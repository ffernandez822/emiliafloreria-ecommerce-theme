import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';
import Logo from '../../assets/logo.svg'; // Ruta a tu archivo SVG


const Brand = () => (
  <div class="logo">
    <img
      src="/logo.svg" // Ruta relativa desde la carpeta `static/`
      alt="Emilia's Florería Logo"
     
    />
  </div>
);

export default Brand;
