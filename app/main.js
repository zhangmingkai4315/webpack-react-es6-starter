import React from 'react';
import ReactDOM from 'react-dom';
import Component from './src/Component_1.js';
class Hello extends React.Component {
    render() {
      return (< div >
        < h1 > HELLO WORLD < /h1> < Component / >
        < /div>);
    }
}

ReactDOM.render(<Hello/>, document.getElementById('container'));
