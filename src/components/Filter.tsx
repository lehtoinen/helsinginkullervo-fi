import React from 'react';

import styles from './Filter.module.css';

type Props = {
  group: string;
  property: string;
  onChange: (option: string) => void;
  selected: string[];
  options?: string[];
  legend?: string;
};

const Filter = ({
  group,
  property,
  selected,
  onChange,
  legend,
  options = [],
}: Props) => (
  <div className={styles.root}>
    <FiltersWrapper legend={legend}>
      {options.map((option) => {
        const isSelected = selected && selected.includes(option);

        const inputID = `filter_${property}_${group}_${option}`;
        return (
          <div key={option} className={styles.option}>
            <label>
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
    </FiltersWrapper>
    {legend && <legend className="off-screen">{legend}</legend>}
  </div>
);

type FiltersWrapperProps = {
  children: React.ReactNode;
  legend?: string;
};

const FiltersWrapper = ({ legend, children }: FiltersWrapperProps) => {
  return legend ? (
    <fieldset>
      <legend className="off-screen">{legend}</legend>
      {children}
    </fieldset>
  ) : (
    <>{children}</>
  );
};

export default Filter;
