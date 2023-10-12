import React, { useCallback, useState } from 'react';
import { INPUT_KEYS, UserInputValues, initialInputValue } from './constants';
import { NumberInput } from './NumberInput';
import styles from './InvestmentCalculator.module.css';
interface UserInputProps {
  onCalculate: (inputValues: UserInputValues) => void;
}
export const UserInput: React.FC<UserInputProps> = ({ onCalculate }) => {
  const [inputValues, setInputValue] = useState(initialInputValue);

  const inputValuesChangeHandler = useCallback(
    (inputId: string, value: string) => {
      setInputValue(prevValues => {
        return { ...prevValues, [inputId]: +value };
      });
    },
    [],
  );

  const resetHandler = useCallback(() => {
    setInputValue(initialInputValue);
  }, []);

  const submitHandler = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onCalculate(inputValues);
    },
    [inputValues, onCalculate],
  );
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <NumberInput
          id={INPUT_KEYS.CURRENT_SAVINGS}
          label={'Current Savings ($)'}
          value={inputValues.currentSavings}
          onChange={inputValuesChangeHandler}
        />
        <NumberInput
          id={INPUT_KEYS.YEARLY_CONTRIBUTION}
          label={'Yearly Savings ($)'}
          value={inputValues.yearlyContribution}
          onChange={inputValuesChangeHandler}
        />
      </div>
      <div className={styles['input-group']}>
        <NumberInput
          id={INPUT_KEYS.EXPECTED_RETURN}
          label={' Expected Interest (%, per year)'}
          value={inputValues.expectedReturn}
          onChange={inputValuesChangeHandler}
        />
        <NumberInput
          id={INPUT_KEYS.DURATION}
          label={'Investment Duration (years)'}
          value={inputValues.duration}
          onChange={inputValuesChangeHandler}
        />
      </div>
      <div className={styles.actions}>
        <button
          type="reset"
          className={`${styles.button} ${styles['reset-btn']}`}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-btn']}`}
        >
          Calculate
        </button>
      </div>
    </form>
  );
};
