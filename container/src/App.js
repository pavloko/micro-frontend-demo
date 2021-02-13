import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import { mount as mountMarketingApp } from 'marketing/MarketingApp';
import Header from './components/Header'

export default function App() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    mountMarketingApp(containerRef.current);
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <div ref={containerRef}></div>
    </BrowserRouter>
  );
}
