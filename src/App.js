// import React from 'react';
import React, { Component } from 'react';


// function App() {
//   return (
//     <div >Hello, world!</div>
//   );
// }

class App extends Component {
    render (){
      return (
        <React.Fragment>
          <label htmlFor="bar">bar</label>
          <input type="text" onChange={() => {console.log("I am clicked")}} />
        </React.Fragment>
      )
      // const input = <input type="text" onChange={ () => {console.log("I am clicked")}} />;
      // const greeting = "Hi!!";
      // const dom = <h1 className="foo">{greeting} World!</h1>;
      // return input;
    }
}

//import Reactはjsxを使う場合は必要
// class App extends Component {
//   render () {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, World!!"
//     )
//   }
// }

export default App;
