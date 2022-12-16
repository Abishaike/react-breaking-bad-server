// importing the logo that will be used for the navbar
import homePage from '../Images/homeLogo.jpg';
import './home.css';

function Home() {
  /*
    Contains the JSX code which will be rendered for the App component
  */
  return (
    <img src={homePage} width="100%" height="600px" />
  );
}

export default Home;