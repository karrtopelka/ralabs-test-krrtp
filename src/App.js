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
    <div style={{ marginTop: 11 }}>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PageLayout switchThemes={switchThemes} themeType={themeType} />
      </GeistProvider>
    </div>
  );
};

export default App;
