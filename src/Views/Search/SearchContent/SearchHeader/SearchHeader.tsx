import React from 'react';
import styles from './index.module.css';

interface SearchHeaderProps {
  children: React.ReactNode;
}

const SearchHeader = ({ children, ...props }: SearchHeaderProps) => {
  return (
    <div className={styles.SearchHeader} {...props}>
      {children}
    </div>
  );
};

export default SearchHeader;