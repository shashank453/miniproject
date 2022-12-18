 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="inspire.png" class="app-logo"></img>
        <h3>REGISTRATION FORM</h3><br></br>
        <label>Name:</label>
        <input type="text" name="name" requried></input>
        <label>Email:</label>
        <input type="email" name="email"></input>
        <button type="submit" onclick="succes()">submit</button>

      </header>
    </div>
  );
}

export default App;
