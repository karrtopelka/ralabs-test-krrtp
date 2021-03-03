import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { useState } from 'react';
import PageLayout from './components/PageLayout/';

const App = () => {
  const [themeType, setThemeType] = useState('light');

  const switchThemes = () => {
    setThemeType((last) => (last === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <PageLayout switchThemes={switchThemes} themeType={themeType} />
      </GeistProvider>
    </div>
  );
};

export default App;
