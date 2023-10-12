import React, { useState } from 'react';
import { CalculatorHeader } from './CalculatorHeader';
import { UserInput } from './UserInput';
import { ResultTable } from './ResultTable';
import { UserInputValues } from './constants';

export const InvestmentCalculator: React.FC = () => {
  const [userInputValues, setUserInputValues] = useState<UserInputValues>({});
  const calculateHandler = (inputValues: UserInputValues) => {
    return setUserInputValues(inputValues);
  };
  return (
    <div>
      <CalculatorHeader />
      <UserInput onCalculate={calculateHandler} />
      <ResultTable />
    </div>
  );
};
