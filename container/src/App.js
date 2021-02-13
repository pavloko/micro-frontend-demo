import React from 'react';
import { mount as mountMarketingApp } from 'marketing/MarketingApp';

export default function App() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    mountMarketingApp(containerRef.current);
  }, []);

  return (
    <div>
      <header>
        <h1>Container</h1>
      </header>
      <div ref={containerRef}></div>
    </div>
  );
}
