import React from 'react';
import SearchHeader from './SearchContent/SearchHeader/SearchHeader';
import SearchBody from './SearchContent/SearchBody/SearchBody';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import styles from './index.module.css';

export default function SearchContainer() {
  return (
    <div className={styles.SearchPage}>
        <SearchHeader>
            <div>
                <h1>Lorem ipsum</h1>
                <p>Sit dolor</p>
            </div>
        </SearchHeader>
        <SearchBody>
            <SearchComponent/>
        </SearchBody>
    </div>
  );
}