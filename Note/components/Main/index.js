import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import Note from "../Note";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: ""
    };
  }
  deleteNote = index => {
    this.state.noteArray.splice(index, 1);
    this.setState({ noteArray: this.state.noteArray });
  };
  addNote = () => {
    if (this.state.noteText) {
      let d = new Date();
      this.state.noteArray.push({
        date: `${d.getFullYear()} / ${d.getMonth() + 1} / ${d.getDate()}`,
        note: this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  };
  render() {
    let notes = this.state.noteArray.map((val, key) => (
      <Note
        key={key}
        keyval={key}
        val={val}
        onPressDelete={() => this.deleteNote(key)}
      />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText} children="-Note-" />
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            placeholder=">note"
            style={styles.footerInputText}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
          />
        </View>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text
            onPress={() => {
              this.addNote();
            }}
            children="+"
            style={styles.addButtonText}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Main;
