import React from "react";
import logo from '../../logo.svg';
import styles from './index.module.css';

function Header(props: any) {

  return (
    <header className={styles.Header}>
        <div className={styles.HeaderContent}>
          <img src={logo} alt="logo" />
        </div>
    </header>
  );
}
export default Header;