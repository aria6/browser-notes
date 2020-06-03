import React, {useState} from 'react';
import './App.css';

function App() {
  let [status, setStatus] = useState(0);

  return (
    <div className="App">
      <div className="body">
        <p>
          Status : {status ? 'Not Active' : 'Active'}
        </p>
        <button 
          className="button-status"
          onClick={() => setStatus(!status)}
        >
          {status ? 'Turn On' : 'Turn Off'}
        </button >
      </div>
    </div>
  );
}

export default App;
