import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  changeByState,
} from './redux/slice/counterSlice';
import { useState } from 'react';
function App() {
  const [inputValue, setInputValue] = useState('');
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>current value is {value}</h1>
        <div>
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <div>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            ></input>
            <button
              onClick={() => {
                dispatch(changeByState(parseInt(inputValue)));
                setInputValue('');
              }}
            >
              change
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
