import React from 'react';

import styles from './Filter.module.css';

type Props = {
  group: string;
  property: string;
  onChange: (option: string) => void;
  selected: string[];
  options?: string[];
};

const Filter = ({
  group,
  property,
  selected,
  onChange,
  options = [],
}: Props) => (
  <div className={styles.root}>
    {options.map((option) => {
      const isSelected = selected && selected.includes(option);

      const inputID = `filter_${property}_${group}_${option}`;
      return (
        <div key={option} className={styles.option}>
          <label htmlFor={inputID}>
            <input
              onChange={() => onChange(option)}
              type="checkbox"
              id={inputID}
              checked={isSelected}
            />
            {option}
          </label>
        </div>
      );
    })}
  </div>
);

export default Filter;