import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

const Filter = ({ options, selected, onChange }) => (
  <div className={styles.root}>
    {options.map(option => {
      const isSelected = selected && selected.includes(option);
      return (
        <div key={option} className={styles.option}>
          <label htmlFor={`filter_${option}`}>
            <input
              onChange={() => onChange(option)}
              type="checkbox"
              id={`filter_${option}`}
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
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
};

Filter.defaultProps = {
  selected: [],
};

export default Filter;
