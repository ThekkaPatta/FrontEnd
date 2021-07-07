import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Container from './Components/Container';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Container/>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
