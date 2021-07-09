import './App.css';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from './Body/Container'
import Header from './Header/Header';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Container></Container>
    </div>
    </BrowserRouter>
  );
  
}

export default App;
