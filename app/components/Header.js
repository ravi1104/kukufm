"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>KukuFM</div>
            <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
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
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/signin">Sign In</Link>
                    <Link href="/signup">Sign Up</Link>
                </div>
            )}
            <div className={styles.menuIcon} onClick={toggleMenu}>&#8942;</div>

        </header>
    );
};

export default Header;
