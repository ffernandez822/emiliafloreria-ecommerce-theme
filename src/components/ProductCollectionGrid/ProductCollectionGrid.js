import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/catalogo/valentines_minimalistic_floral.jpg'}
        title={'Día de los enamorados'}
        text={'Ver catalogo'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/catalogo/wedding_minimalistic_floral.jpg'}
        title={'Bodas'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/catalogo/birthday_minimalistic_floral.jpg'}
        title={'Feliz cumpleaños !'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Aniversarios'}
        text={'SHOP NOW'}
        link={'/shop'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
