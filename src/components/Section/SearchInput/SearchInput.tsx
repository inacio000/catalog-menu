import React from 'react';
import styles from './styles.module.scss';
import SearchIcon from '@/assets/components/searchIcon';

export const SearchInput: React.FC = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Введите артикул, партномер, название модели, бренд"
      />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
};
