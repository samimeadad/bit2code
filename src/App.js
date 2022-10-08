import logo from './images/logo.png';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h1>Hi, This is Sami Meadad Choudhury, the proprietor of bit2code.com. We develop web application for our clients. This site is under development at this moment. We will come back soon after some major updates. Please stay with us..</h1>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/sami-meadad-choudhury/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please Contact bit2code.com proprietor through Linkedin. Thank you.
        </a>
      </header>
    </div>
  );
}

export default App;
