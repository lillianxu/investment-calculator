import React from 'react';
import { ResultData } from './constants';
import { ResultRow } from './ResultRow';
import styles from './InvestmentCalculator.module.css';

interface ResultTableProps {
  data: ResultData[];
}
export const ResultTable: React.FC<ResultTableProps> = ({ data }) => {
  return (
    <table className={styles['result-table']}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map(yearlyData => (
          <ResultRow data={yearlyData} key={yearlyData.year} />
        ))}
      </tbody>
    </table>
  );
};
