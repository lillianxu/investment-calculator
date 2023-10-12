import React, { useState } from 'react';
import { CalculatorHeader } from './CalculatorHeader';
import { UserInput } from './UserInput';
import { ResultTable } from './ResultTable';
import styles from './InvestmentCalculator.module.css';
import { UserInputValues } from './constants';

export const InvestmentCalculator: React.FC = () => {
  const [userInputValues, setUserInputValues] = useState<UserInputValues>({});
  const calculateHandler = (inputValues: UserInputValues) => {
    return setUserInputValues(inputValues);
  };
  const showFallbackText = Object.keys(userInputValues).length === 0;

  let yearlyData = [];
  if (!showFallbackText) {
    let currentSavings = userInputValues.currentSavings ?? 0;
    const yearlyContribution = userInputValues.yearlyContribution ?? 0;
    const expectedReturn = userInputValues.expectedReturn
      ? userInputValues.expectedReturn / 100
      : 0;
    const duration = userInputValues.duration ?? 0;
    let totalInterest = 0;
    let investedCapital = currentSavings;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital += yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
        investedCapital: investedCapital,
      });
    }
  }
  return (
    <div>
      <CalculatorHeader />
      <UserInput onCalculate={calculateHandler} />

      {showFallbackText ? (
        <p className={styles['result-note']}>No Investment calculated yet.</p>
      ) : (
        <ResultTable data={yearlyData} />
      )}
    </div>
  );
};
