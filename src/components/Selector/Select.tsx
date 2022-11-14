import { useEffect, useState } from 'react';
import styles from './select.module.scss';

type SelectOptions = {
  label: string
  value: string
}

// value?: SelectOptions  === value: SelectOptions | undefined
type SelectProps = {
  options: SelectOptions[]
  value?: SelectOptions 
  onChange: (value: SelectOptions | undefined) => void
}

const Select = ({options, value, onChange}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const atClickClearButton = () => {
    onChange(undefined);
  };

  const isOptionSelected = (option: SelectOptions) => {
    return option === value;
  };

  const atSelectedOption = (item: SelectOptions) => {
    if (value !== item) onChange(item);
  }

  useEffect(() => {
    if (isOpen) setHighlightIndex(0);
  }, [isOpen]);

  return (
    <div
      className={styles.container}
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.value}>{value?.label}</span>
      <button
        className={styles["clear-btn"]}
        onClick={(e) => {
          e.stopPropagation();
          atClickClearButton();
        }}
      >&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((item, index) => (
          <li
            onMouseEnter={() => setHighlightIndex(index)}
            key={item.value}
            className={
              `${styles.option}
              ${isOptionSelected(item) ? styles.selected : ""}
              ${highlightIndex === index ? styles.highlight : ""}
            `}
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
              atSelectedOption(item);
            }}>
          {item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Select;