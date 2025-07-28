
import { useState, useEffect } from 'react';

interface CurrencyData {
  currency: 'BDT' | 'USD' | 'AUD' | 'INR' | 'GBP' | 'CAD' | 'EUR';
  symbol: string;
  conversionRate: number;
}

export const useCurrencyByLocation = () => {
  const [currencyData, setCurrencyData] = useState<CurrencyData>({
    currency: 'BDT',
    symbol: '৳',
    conversionRate: 1
  });
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCountryAndSetCurrency = async () => {
      try {
        // Try to get country from IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        console.log('Detected country:', data.country_name, 'Code:', data.country_code);
        
        // Set currency based on country code
        switch (data.country_code) {
          case 'BD':
            setCurrencyData({
              currency: 'BDT',
              symbol: '৳',
              conversionRate: 1
            });
            break;
          case 'US':
            setCurrencyData({
              currency: 'USD',
              symbol: '$',
              conversionRate: 0.0083 // 1 BDT = 0.0083 USD
            });
            break;
          case 'AU':
            setCurrencyData({
              currency: 'AUD',
              symbol: 'A$',
              conversionRate: 0.013 // 1 BDT = 0.013 AUD
            });
            break;
          case 'IN':
            setCurrencyData({
              currency: 'INR',
              symbol: '₹',
              conversionRate: 0.70 // 1 BDT = 0.70 INR
            });
            break;
          case 'GB':
            setCurrencyData({
              currency: 'GBP',
              symbol: '£',
              conversionRate: 0.0065 // 1 BDT = 0.0065 GBP
            });
            break;
          case 'CA':
            setCurrencyData({
              currency: 'CAD',
              symbol: 'C$',
              conversionRate: 0.011 // 1 BDT = 0.011 CAD
            });
            break;
          // European countries
          case 'DE':
          case 'FR':
          case 'IT':
          case 'ES':
          case 'NL':
          case 'BE':
          case 'AT':
          case 'PT':
          case 'IE':
          case 'GR':
          case 'FI':
          case 'LU':
          case 'MT':
          case 'CY':
          case 'SK':
          case 'SI':
          case 'EE':
          case 'LV':
          case 'LT':
            setCurrencyData({
              currency: 'EUR',
              symbol: '€',
              conversionRate: 0.0077 // 1 BDT = 0.0077 EUR
            });
            break;
          default:
            // Default to USD for other countries
            setCurrencyData({
              currency: 'USD',
              symbol: '$',
              conversionRate: 0.0083
            });
        }
      } catch (error) {
        console.error('Error detecting country:', error);
        // Default to BDT if geolocation fails
      } finally {
        setIsLoading(false);
      }
    };

    detectCountryAndSetCurrency();
  }, []);

  const formatPrice = (bdtPrice: string): string => {
    const numericPrice = parseInt(bdtPrice.replace('৳', ''));
    
    if (currencyData.currency === 'BDT') {
      return bdtPrice;
    }
    
    const convertedPrice = Math.round(numericPrice * currencyData.conversionRate);
    return `${currencyData.symbol}${convertedPrice}`;
  };

  const getCurrencyDisplayName = (): string => {
    switch (currencyData.currency) {
      case 'BDT': return 'Bangladeshi Taka';
      case 'USD': return 'US Dollar';
      case 'AUD': return 'Australian Dollar';
      case 'INR': return 'Indian Rupee';
      case 'GBP': return 'British Pound';
      case 'CAD': return 'Canadian Dollar';
      case 'EUR': return 'Euro';
      default: return 'Unknown Currency';
    }
  };

  return {
    currencyData,
    formatPrice,
    getCurrencyDisplayName,
    isLoading
  };
};
