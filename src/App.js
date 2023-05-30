import './App.css';
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MyButton/>
      </header>
    </div>
  );
}

// DEMO CODE:
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
// END OF DEMO CODE

// EXERCISE 1:
//Create a React component that displays a button and a number. Each time the button is clicked, the number should increase by one.


// EXERCISE 2:
//Create a toggle component that contains a button. When the button is clicked, the text should toggle between "On" and "Off".


// EXERCISE 3:
//Create a simple to-do list. The component should contain a prompt and a button to add an item to the list. The list of items should be displayed below.


export default App;