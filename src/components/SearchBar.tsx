import React, { useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './components.module.scss';
let cx = classNames.bind(styles);

const SearchBar = () => {
  const [focus, setFocus] = useState<boolean>(false);
  let searchBarTheme = cx(styles.searchBar, focus ? styles.searchBarFocus : null);
  const atFocusInput = () => setFocus(true);
  const atBlurInput = () => setFocus(false);
  const atChangeInput = (e: React.ChangeEvent<HTMLInputElement> | undefined): void => {
    console.log(e)
  }

  return (
    <div className={searchBarTheme}>
      <div className={styles.searchBarBlur}>
        <input
          className={styles.searchInput}
          onFocus={atFocusInput}
          onBlur={atBlurInput}
          placeholder='搜尋'
          onChange={(e) => atChangeInput(e)}
        />
        <button className={styles.searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" fixedWidth color='white' />
        </button>
      </div>
      {focus ? <div className={styles.line}></div> : null}
    </div>
  );
};

export default memo(SearchBar);