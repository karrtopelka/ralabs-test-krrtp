import './App.css';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { useState } from 'react';
import PageLayout from './components/PageLayout/PageLayout';

const App = () => {
  const [themeType, setThemeType] = useState('light');

  const switchThemes = () => {
    setThemeType((last) => (last === 'dark' ? 'light' : 'dark'));
  };

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <PageLayout switchThemes={switchThemes} themeType={themeType} />
    </GeistProvider>
  );
};

export default App;
