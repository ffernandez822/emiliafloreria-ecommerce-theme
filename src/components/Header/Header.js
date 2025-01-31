import React, { useState, useEffect, createRef } from 'react';
import { Link, navigate } from 'gatsby';

import { isAuth } from '../../helpers/general';
import Brand from '../Brand';
import Container from '../Container';
import Config from '../../config.json';
import Drawer from '../Drawer';
import ExpandedMenu from '../ExpandedMenu';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import MiniCart from '../MiniCart';
import MobileNavigation from '../MobileNavigation';
import * as styles from './Header.module.css';

const Header = () => {
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [menu, setMenu] = useState();
  const [activeMenu, setActiveMenu] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');

  const searchRef = createRef();

  const handleHover = (navObject) => {
    if (navObject.category) {
      setShowMenu(true);
      setMenu(navObject.category);
      setShowSearch(false);
    } else {
      setMenu(undefined);
    }
    setActiveMenu(navObject.menuLabel);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setShowSearch(false);
  };

  useEffect(() => {
    if (showMenu === false) setActiveMenu(false);
  }, [showMenu]);

  useEffect(() => {
    const onScroll = () => {
      setShowMenu(false);
      setShowSearch(false);
      setActiveMenu(undefined);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (showSearch === true) {
      setTimeout(() => {
        searchRef.current.focus();
      }, 250);
    }
  }, [showSearch]);

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.header}>
          {/* Logo a la izquierda */}
          <Brand />
          
          {/* Espaciador flexible para empujar el menú a la derecha en escritorio */}
          <div className={styles.spacer}></div>
          
          {/* Menú de navegación en escritorio */}
          <div className={styles.linkContainer}>
            <nav
              role={'presentation'}
              onMouseLeave={() => setShowMenu(false)}
            >
              {Config.headerLinks.map((navObject) => (
                <Link
                  key={navObject.menuLink}
                  onMouseEnter={() => handleHover(navObject)}
                  className={`${styles.navLink} ${
                    activeMenu === navObject.menuLabel ? styles.activeLink : ''
                  }`}
                  to={navObject.menuLink}
                >
                  {navObject.menuLabel}
                </Link>
              ))}
            </nav>
          </div>

          {/* Botón de menú móvil */}
          <div
            role={'presentation'}
            onClick={() => setMobileMenu(!mobileMenu)}
            className={styles.burgerIcon}
          >
            <Icon symbol={`${mobileMenu === true ? 'cross' : 'burger'}`} />
          </div>
        </div>
      </Container>

      {/* Menú móvil */}
      <Drawer
        hideCross
        top={'98px'}
        isReverse
        visible={mobileMenu}
        close={() => setMobileMenu(false)}
      >
        <MobileNavigation close={() => setMobileMenu(false)} />
      </Drawer>
    </div>
  );
};

export default Header;
