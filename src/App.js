import logo from './logo.svg';
import Typewriter from 'typewriter-effect';
import topu from './66577357_777162262712551_3444778854764249088_n.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className="topuimg">
          <img src={topu} alt="" className='topu' />
        </div>
        <Typewriter
          options={{
            strings: [
      ` নাম তপু। ফেভারিট ডায়লগ ঃ - 'চৌধুরী সাহেব আমরা গরিব হতে পারি, কিন্তু আমরা মানুষ, আমাদেরও ইজ্জত আছে' `       

        ],
            autoStart: true,
            loop: true,
          }}
        />
      </header>
    </div>
  );
}

export default App;
