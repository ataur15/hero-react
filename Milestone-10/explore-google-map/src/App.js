import logo from './logo.svg';
import './App.css';
import Map from './components/Map/Map';
import Direction from './components/Direction/Direction';
import { useRef, useState } from 'react';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const originRef = useRef('');
  const destinationRef = useRef('');

  const handleDirection = (e) => {
    e.preventDefault();
    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleDirection}>
        <input type="text" ref={originRef} placeholder="Start From" /><br />
        <input type="text" ref={destinationRef} placeholder="Destination" /><br />
        <input type="submit" value="Get Direction" />
      </form>

      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
