import * as React from 'react';
import { UserProvider } from './src/screens/UserContext';  // Assurez-vous du chemin correct
import Menu from './src/navigators/menu';

export default function App() {
  return (
    <UserProvider>
      <Menu />
    </UserProvider>
  );
}
