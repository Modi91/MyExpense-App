import React from "react";
import { Provider } from "react-redux";
import AppContainer from "./Components/Navigation/";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
