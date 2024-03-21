import React from 'react';
import ReactDOM  from 'react-dom/client';
// React Element (RE)
const heading = React.createElement("h1",{id:'heading', class:"heading"},"Hello World");
// React JSX -> -> parcel -> Bable -> RCE  -> RE (JS object) -> Render to browser with render method
const jsxHeading = (<h1 id='heading'>
    React JSX
</h1>)
const HeadingFuncComponent = () => {
    return <h1>This is headingFuncComponent</h1>
};
const HeadingFuncComponent2 = () => <h1>This is headingFuncComponent2</h1>
const HeadingFuncComponent3 = () => {
    return <div>
    <HeadingFuncComponent />
    <HeadingFuncComponent2 />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingFuncComponent3 />);