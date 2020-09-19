
import React from 'react';
import styles from './index.module.css';

interface SearchBodyProps {
    children: React.ReactNode;
}

const Search = ({ children, ...props }: SearchBodyProps) => {
    return (
      <div className={styles.SearchBody} {...props}>
        {children}
      </div>
    );
  };

export default Search;