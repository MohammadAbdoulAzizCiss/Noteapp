import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import Main from "./Note/components/Main";

class App extends Component {
  state = {};
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#e91e63" />
        <Main />
      </View>
    );
  }
}

export default App;
