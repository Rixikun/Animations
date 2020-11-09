import React, { useRef} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./scss/main.scss";
import * as C from './component/content';

const scrollToRef = (ref) => {
  ref.current.scrollIntoView({behavior: 'smooth'})
}

function App() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <Router>
      <div className="App">
        <C.Navigation scroll={executeScroll} />
        {/* <button id="btn-scrollDown" onClick={executeScroll}>Go Down</button> */}
          <Switch>
            <Route path="/Cards" component={C.Cards}/>
            <Route path="/Spinner" component={C.Spin}/>
            <Route path="/Home" component={C.Home}/>
            <Route exact path="/" component={C.Home}/>
          </Switch>
        <footer ref={myRef}>
          <p>Lin 2020</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
