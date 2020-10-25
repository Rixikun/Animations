import React, { useRef} from "react";
import "./scss/main.scss";
import Cards from "./component/Cards";
import Spin from './component/Spin'
import CountDown from './component/Timer'

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({behavior: 'smooth'})
}

function App() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <div className="App">
      <button onClick={executeScroll}>Jump Down</button>
      <Cards />
      <CountDown seconds={5}/>
      <Spin />
      <footer ref={myRef}>
        <p>Lin 2020</p>
      </footer>
      
    </div>
  );
}

export default App;
