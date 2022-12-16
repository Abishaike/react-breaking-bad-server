import './App.css';

/* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/Navbar'


function App() {
  return (
    <div className="App">
      <NavbarComponent company="Breaking Bad" />
    </div>
  );
}

export default App;
