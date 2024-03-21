import React from 'react';
import ReactDOM  from 'react-dom/client';
const heading = React.createElement("h1",{id:'heading', class:"heading"},"Hello World");
const jsxHeading = <h1 id='heading'>React JSX</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);