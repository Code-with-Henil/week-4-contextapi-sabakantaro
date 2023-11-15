// components/CurrencySelector.jsx
import React from 'react';
import { useCurrency } from '../context/CurrencyContext';

function CurrencySelector() {
  const { switchCurrency } = useCurrency();

  const handleCurrencyChange = (newCurrency) => {
    switchCurrency(newCurrency);
  };

  return (
    <div>
      <h2>Select Currency:</h2>
      <button onClick={() => handleCurrencyChange('USD')}>USD</button>
      <button onClick={() => handleCurrencyChange('EUR')}>EUR</button>
    </div>
  );
}

export default CurrencySelector;
