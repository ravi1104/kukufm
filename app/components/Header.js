import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>KukuFM</div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <div className={styles.headerExtras}>
                <div className={styles.languageSelect}>
                    <select>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="mr">Sanskrit</option>
                    </select>
                </div>
                <div className={styles.searchSection}>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className={styles.authButtons}>
                    <Link href="/signin" className={styles.signin}>Sign In</Link>
                    <Link href="/signup" className={styles.signup}>Sign Up</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
