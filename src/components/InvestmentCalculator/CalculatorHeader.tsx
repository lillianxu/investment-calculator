import React from 'react';
import styles from './InvestmentCalculator.module.css';

export const CalculatorHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Investment Calculator</h1>
    </header>
  );
};
