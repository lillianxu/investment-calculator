import React from 'react';
import { ResultData } from './constants';

interface ResultRowProps {
  data: ResultData;
}
export const ResultRow: React.FC<ResultRowProps> = ({ data }) => {
  return (
    <tr>
      <td>{data.year}</td>
      <td>{data.savingsEndOfYear}</td>
      <td>{data.yearlyInterest}</td>
      <td>{data.totalInterest}</td>
      <td>{data.investedCapital}</td>
    </tr>
  );
};
