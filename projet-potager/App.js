import * as React from 'react';
import AppNavigation from './src/views/routes/AppNavigation';
import { UserProvider } from './src/context/UserContext';  // Assurez-vous du chemin correct

const App = () => 
  <UserProvider>
    <AppNavigation />
  </UserProvider>;

export default App;


/*import * as React from 'react';
import { UserProvider } from './src/context/UserContext';  // Assurez-vous du chemin correct
import Menu from './src/navigators/menu';

export default function App() {
  return (
    <UserProvider>
      <Menu />
    </UserProvider>
  );
}
*/