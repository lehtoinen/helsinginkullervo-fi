import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

const Filter = (
  { group, options, selected, onChange } // eslint-disable-line object-curly-newline
) => (
  <div className={styles.root}>
    {options.map(option => {
      const isSelected = selected && selected.includes(option);
      const inputID = `filter_${group}_${option}`;

      return (
        <div key={option} className={styles.option}>
          <label htmlFor={inputID}>
            <input
              onChange={() => onChange(option)}
              type="checkbox"
              id={inputID}
              selected={isSelected ? 'selected' : null}
              defaultChecked={isSelected}
            />
            {option}
          </label>
        </div>
      );
    })}
  </div>
);

Filter.propTypes = {
  group: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
};

Filter.defaultProps = {
  selected: [],
};

export default Filter;
