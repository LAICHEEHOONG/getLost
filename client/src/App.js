import logo from './logo.svg';
import Language from './components/language';
import InputForm from './pages/inputForm';
import AlertMessage from './components/alert';
import SendAlert from './components/sendAlert';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <AlertMessage />
        <SendAlert />
        <InputForm />
        <Language />
      </header>
    </div>
  );
}

export default App;


//name
//age
//male female
//language control
// from
//contact
//email
// others