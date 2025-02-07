/*import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Crée le contexte
const UserContext = createContext();

// Fournisseur de contexte
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Charger les données utilisateur depuis AsyncStorage lorsque l'app démarre
  useEffect(() => {
    const loadUser = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      if (storedUserId) {
        // Vous pouvez aussi récupérer l'email ou d'autres informations si nécessaires
        setUser({ id: storedUserId });
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook pour accéder au contexte
export const useUser = () => useContext(UserContext);
*/
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Charger les données utilisateur depuis AsyncStorage lorsque l'app démarre
  useEffect(() => {
    const loadUser = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      if (storedUserId) {
        // Vous pouvez aussi récupérer l'email ou d'autres informations si nécessaires
        setUser({ id: storedUserId });
      }
    };
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};