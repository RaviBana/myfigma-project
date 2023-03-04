
import './App.css';
import { Information } from './components/allComponents/Information';
import LeftMenu from './components/allComponents/LeftMenu';
import Profile from './components/allComponents/Profile';

function App() {
  return (
    <div className="App">
     <LeftMenu/>
     <Profile/>
     <Information/>
    </div>
  );
}

export default App;
