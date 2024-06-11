import React from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <Link to="/" className={styles.headerLink}>Blog</Link>
        <Link to="/contactform" className={styles.headerLink}>お問い合わせ</Link>
    </header>
  )
}

export default Header;