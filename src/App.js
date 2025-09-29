import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Good</p>
    </>
  );
}
function App( ) {
  return (
    <div className="App">
      <header className="App-header">
        Hello 
      {AboutPage()}
      </header>
    </div>
  );
} 

export default App;
