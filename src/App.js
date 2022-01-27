import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Shop from './components/Shop';
import Products from './components/Products';
import Blog from './components/Blog';
import Contactus from './components/Contactus';
import Foot from './components/Foot';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbaar />

        <section className="container">
          <Switch >
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/products" exact component={Products} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contactus" exact component={Contactus} />

          </Switch>
        </section>

        <Foot />
      </Router>




    </div>
  );
}

export default App;
