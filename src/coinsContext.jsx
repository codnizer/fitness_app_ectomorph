import React, { useState, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';
import { createContext } from 'react';

// Create context
export const coinsContext = createContext();

// Create provider component
export const CoinsProvider = ({ children }) => {
  const [coins, setCoinsState] = useState(null); // Initialize coins as null
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  useEffect(() => {
    const initializeCoins = async () => {
      const { value } = await Preferences.get({ key: 'coins' });

      if (value !== null && value !== undefined) {
        setCoinsState(parseInt(value, 10)); // Parse the retrieved value to ensure it's a number
        // console.log(`Previously stored coins: ${value}`);
      } else {
        // Initial setup when coins are not yet set in preferences
        const initialCoins = 10;
        setCoinsState(initialCoins);
        await Preferences.set({ key: 'coins', value: initialCoins.toString() });
        // console.log(`Initialized coins: ${initialCoins}`);
      }
    };

    initializeCoins();
  }, []);

  useEffect(() => {
    if (coins !== null) {
      const setCoinsToStorage = async () => {
        await Preferences.set({ key: 'coins', value: coins.toString() }); // Save to preferences
      };
      setCoinsToStorage();
    }
  }, [coins]);

  const setCoins = (newCoins) => {
    setCoinsState(newCoins); // Update local state immediately
  };

  useEffect(() => {
    const retrieveLevel = async () => {
      const { value } = await Preferences.get({ key: 'selectedLevels' });
      if (value) {
        const levelsArray = JSON.parse(value);
        const highestLevel = Math.max(...levelsArray);
        setSelectedLevel(highestLevel);
        // console.log(`Previously selected highest level: ${highestLevel}`);
      }
    };
    retrieveLevel();
  }, []);
  

  // useEffect(() => {
  //   if (selectedLevel !== null) {
  //     const setLevelToStorage = async () => {
  //       await Preferences.set({ key: 'selectedLevel', value: selectedLevel.toString() }); // Save to preferences
  //     };
  //     setLevelToStorage();
  //   }
  // }, [selectedLevel]);

  return (
    <coinsContext.Provider value={{ coins, setCoins, selectedLevel, setSelectedLevel,isSoundEnabled, setIsSoundEnabled }}>
      {children}
    </coinsContext.Provider>
  );
};
