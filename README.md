# Investment Calculator

This is an Investment Calculator application built using React and Typescript.
It helps users to estimate their investment growth over a specified duration
based on their initial savings, yearly contributions, expected return rate, and
investment duration.

## Local Environment Setup

To run the application locally, follow these steps:

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project folder: `cd investment-calculator`
3. Install dependencies: `npm install`
4. Run the web application: `npm start`

The app could be accessible at `http://localhost:3000`

## File Structure

The project is structured as follows:

CalculatorHeader.tsx: React component for the header of the calculator.

constants.ts: File containing interfaces, types, and initial values for the
application.

helpers.ts: Utility file with a number formatter for currency values.

InvestmentCalculator.tsx: Main file for the investment calculator component.

InvestmentCalculator.module.css: CSS module file for styling the investment
calculator.

NumberInput.tsx: Reusable component for numerical input fields.

ResultRow.tsx: Component for rendering each row of the result table.

ResultTable.tsx: Component for rendering the result table.

UserInput.tsx: Component for handling user input and form submission.

## Usage

Users can input their current savings, yearly contributions, expected return
rate, and investment duration into the provided input fields. After filling out
the necessary details, they can click the "Calculate" button to see the
estimated investment growth over the specified duration.
