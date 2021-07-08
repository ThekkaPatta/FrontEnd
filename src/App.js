import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Container from './Components/Container';
import Head from './Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Head></Head>
      <Container></Container>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
