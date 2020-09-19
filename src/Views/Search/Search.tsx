
import React from 'react';
import styles from './index.module.css';

interface SearchProps {
    children: React.ReactNode;
}

const Search = ({ children, ...props }: SearchProps) => {
  return (
    <div className={styles.Search} {...props}>
      {children}
    </div>
  );
};

export default Search;