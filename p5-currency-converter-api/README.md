# p5-currency-converter-api

## Overview
This project is a currency converter application built using React. It demonstrates the use of custom hooks to manage state and side effects, making the code more modular and reusable.

## Custom Hooks
Custom hooks in React allow you to extract component logic into reusable functions. They enable you to share logic across multiple components without repeating code.

### Creating a Custom Hook
A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks.

### Using a Custom Hook
You can use the custom hook in your components just like you would use built-in hooks.

## Project Structure
- `src/`
    - `components/`
        - `CurrencyConverter.js` - Main component for currency conversion.
    - `hooks/`
        - `useCurrencyConverter.js` - Custom hook for fetching and managing currency rates.
    - `App.js` - Main application component.
    - `index.js` - Entry point of the application.

## Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Open the application in your browser.

## Conclusion
This project showcases the power of custom hooks in React to create a clean and maintainable codebase. By encapsulating logic in custom hooks, you can easily reuse and test your code.
