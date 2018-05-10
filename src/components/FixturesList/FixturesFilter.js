import React from 'react';
import PropTypes from 'prop-types';

import styles from './FixturesFilter.module.scss';

const FixturesFilter = ({ options, selected, onChange }) => (
  <div className={styles.root}>
    {options.map(option => (
      <div key={option} className={styles.option}>
        <label htmlFor={`filter_${option}`}>
          <input
            onChange={() => onChange(option)}
            type="checkbox"
            id={`filter_${option}`}
            selected={selected.indexOf(option) > -1 ? 'selected' : null}
          />
          {option}
        </label>
      </div>
    ))}
  </div>
);

FixturesFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FixturesFilter;
