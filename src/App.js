import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Container from './Components/Container';
import Header from './Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Container></Container>
    </BrowserRouter>
  );
  
}

export default App;
