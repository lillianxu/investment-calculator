import React from 'react';
import { ResultData } from './constants';
import { formatter } from './helpers';

interface ResultRowProps {
  data: ResultData;
}
export const ResultRow: React.FC<ResultRowProps> = ({ data }) => {
  return (
    <tr>
      <td>{data.year}</td>
      <td>{formatter.format(data.savingsEndOfYear)}</td>
      <td>{formatter.format(data.yearlyInterest)}</td>
      <td>{formatter.format(data.totalInterest)}</td>
      <td>{formatter.format(data.investedCapital)}</td>
    </tr>
  );
};
