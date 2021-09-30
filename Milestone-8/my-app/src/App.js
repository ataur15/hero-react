import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>

      {/* <Counter></Counter>
      <LoadUserData></LoadUserData> */}
    </div>
  );
}

/* function LoadUserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>Users Data: {users.length}</h1>
      {
        users.map(user => <DisplayUsers name={user.name} email={user.email}></DisplayUsers>)
      }
    </div>
  );
}

function DisplayUsers(props) {
  return (
    <div className="productStyle">
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseHandler = () => setCount(count + 1)
  const decreaseHandler = () => setCount(count - 1)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={decreaseHandler}>Decrease</button>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
} */

export default App;
