import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const switchCurrency = (newCurrency) => {
    setSelectedCurrency(newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, switchCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
