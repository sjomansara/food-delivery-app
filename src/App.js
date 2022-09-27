import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/NavBar';
import MyJumbotron from './components/MyJumbotron';

const App = () => {
  return (
    <div className="App">
      <MyNavbar />
      <MyJumbotron />
    </div>
  );
}

export default App;
