import React from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { ThemeProvider } from './context/ThemeContext';
import CurrencySelector from './components/CurrencySelector';
import DisplayCurrency from './components/DisplayCurrency';

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <div>
          <CurrencySelector />
          <DisplayCurrency />
        </div>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
