import './App.css';
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MyButton/>
          <ButtonCounter/>
          <ToggleComponent/>
          <TodoList/>
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
function ButtonCounter() {
    const [count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Click me</button>
        </div>
    );
}
// EXERCISE 2:
//Create a toggle component that contains a button. When the button is clicked, the text should toggle between "On" and "Off".
function ToggleComponent() {
    const [isOn, setIsOn] = useState(false);
    const toggle = () => setIsOn(!isOn);

    return (
        <div>
            <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>
        </div>
    );
        }

// EXERCISE 3:
//Create a simple to-do list. The component should contain a prompt and a button to add an item to the list. The list of items should be displayed below.
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');


    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };


    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}


export default App;