import './App.css';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  const [editNum, setEditNum] = useState(null);
  const [value, setValue] = useState('');

  const result = notes.map((note, index) => {
    return (
      <li key={index} onClick={() => startEdit(index)}>
        {note}
      </li>
    );
  });

  function startEdit(index) {
    setEditNum(index);
    setValue(notes[index]);
  }

  function createElem() {
    if (editNum === null) {
      setNotes([...notes, '']);
      setEditNum(notes.length);
    }
  }

  function changeHandler(event) {
    setValue(event.target.value);
    if (editNum !== null) {
      setNotes([
        ...notes.slice(0, editNum),
        event.target.value,
        ...notes.slice(editNum + 1),
      ]);
    }
  }

  function blurHandler(event) {
    editNum === null && setNotes([...notes, value]);
    setEditNum(null);
    setValue('');
  }

  return (
    <div>
      <ul>{result}</ul>
      <input
        value={value}
        onFocus={createElem}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      <p>
        {editNum} {notes[editNum]}
      </p>
    </div>
  );
}

export default App;
