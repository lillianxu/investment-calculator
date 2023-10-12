import React from 'react';
import { CalculatorHeader } from './CalculatorHeader';
import { UserInput } from './UserInput';
import { ResultTable } from './ResultTable';
export const InvestmentCalculator: React.FC = () => {
  return (
    <div>
      <CalculatorHeader />
      <UserInput />
      <ResultTable />
    </div>
  );
};
