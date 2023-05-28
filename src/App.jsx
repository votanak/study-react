import './App.css';
import { useState } from 'react';
import { Input } from './Input';

function App() {
  const [value, setValue] = useState('');

  function changeHandler(event) {
    console.log('change');
    setValue(event.target.value);
  }

  function blurHandler(event) {
  }

  return (
    <div>
      <Input name='email' value={value} onChange = {changeHandler}/>
      <p>
      </p>
    </div>
  );
}

export default App;
