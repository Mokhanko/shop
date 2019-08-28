import React from 'react';
import './styles.scss';
import CollectionItem from '../collectionItem';

const Collection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item, ind) => ind < 4)
          .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
);

export default Collection;
