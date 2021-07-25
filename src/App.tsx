import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import CustomerAdd from "./pages/CustomerAdd";
import ProductAdd from "./pages/ProductAdd";
import Cart from "./pages/Cart";

import { AppContainer } from "./globalStyle";

const App: React.FC = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/customers/add" exact component={CustomerAdd} />
          <Route path="/products/add" exact component={ProductAdd} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </AppContainer>
  );
};

export default App;
