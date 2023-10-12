import React, { useCallback, useState } from 'react';
import { INPUT_KEYS, UserInputValues, initialInputValue } from './constants';
import { NumberInput } from './NumberInput';
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
      console.log('calculated' + inputValues.currentSavings);
    },
    [inputValues, onCalculate],
  );
  return (
    <form onSubmit={submitHandler}>
      <div>
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
      <div>
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
      <div>
        <button type="reset" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
};
