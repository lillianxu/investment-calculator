export interface UserInputValues {
  currentSavings?: number;
  yearlyContribution?: number;
  expectedReturn?: number;
  duration?: number;
}
export const INPUT_KEYS = {
  CURRENT_SAVINGS: 'currentSavings',
  YEARLY_CONTRIBUTION: 'yearlyContribution',
  EXPECTED_RETURN: 'expectedReturn',
  DURATION: 'duration',
};
export const initialInputValue = {
  currentSavings: 0,
  yearlyContribution: 0,
  expectedReturn: 0,
  duration: 0,
};
