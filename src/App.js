import './App.css';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  const [editNum, setEditNum] = useState(null);

  const result = notes.map((note, index) => {
    return (
      <li key={index} onClick={() => setEditNum(index)}>
        {note}
      </li>
    );
  });

  function changeItem(event) {
    setNotes([
      ...notes.slice(0, editNum),
      event.target.value,
      ...notes.slice(editNum + 1),
    ]);
  }

  return (
    <div>
      <ul>{result}</ul>
      <input
        value={editNum !== null ? notes[editNum] : ''}
        onChange={changeItem}
        onBlur={() => setEditNum(null)}
      />
    </div>
  );
}

export default App;
