import logo from './images/logo.png';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4>BIT2CODE, your ultimate web app solution from a single bit to a clean code and more ... ... ...</h4>
        </div>
        <div style={ { marginBottom: '5rem', marginTop: '5rem' } }>
          <img src={ logo } className="App-logo" alt="logo" style={ { width: '200px', height: '200px' } } />
        </div>
        <div>
          <h4>Hi, This is Sami Meadad Choudhury, the proprietor of bit2code.com. We develop web application for our clients. This site is under development at this moment. We will come back soon after some major updates. Please stay with us.
          </h4>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/sami-meadad-choudhury/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Please Contact BIT2CODE through Linkedin. Thank you.
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
