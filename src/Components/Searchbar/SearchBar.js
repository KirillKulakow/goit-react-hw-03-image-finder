import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({addSearchQuery}) => {
    const [input, setInput] = useState('');

    const inputChange = (e) => {
        setInput(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addSearchQuery(input);
    };

    return (
        <header className={styles.bar}>
            <form className={styles.form} onSubmit={onSubmit}>
                <button type="submit" className={styles.formButton}>
                    <span className={styles.formButtonLabel}>Search</span>
                </button>
                <input
                className={styles.formInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos..."
                onChange={inputChange}
                />
            </form>
        </header>
    );
};

export default SearchBar;