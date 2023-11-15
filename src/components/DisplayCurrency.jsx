import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useTheme } from '../context/ThemeContext';

function DisplayCurrency() {
  const { selectedCurrency } = useCurrency();
  const { theme } = useTheme();

  return (
    <div>
      <h2 style={{ color: theme === 'light' ? 'black' : 'white' }}>
        Display Currency Component
      </h2>
      <p style={{ color: theme === 'light' ? 'black' : 'white' }}>
        Selected Currency: {selectedCurrency}
      </p>
    </div>
  );
}

export default DisplayCurrency;
