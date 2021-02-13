import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import { mount as mountMarketingApp } from 'marketing/MarketingApp';
import Header from './components/Header'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default function App() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    mountMarketingApp(containerRef.current);
  }, []);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header/>
        <div ref={containerRef}></div>
      </BrowserRouter>
    </StylesProvider>
  );
}
