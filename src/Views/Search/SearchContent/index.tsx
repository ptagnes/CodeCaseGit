import React from 'react';
import styles from './index.module.css';
import SearchBody from './SearchBody/SearchBody';
import SearchHeader from './SearchHeader/SearchHeader';

interface SearchProps {
  children: React.ReactNode;
}

const Search = ({ children, ...props }: SearchProps) => {
  return <div className={styles.Search}>{children}</div>;
};

Search.Page = SearchBody;
Search.Header = SearchHeader;

export default Search;