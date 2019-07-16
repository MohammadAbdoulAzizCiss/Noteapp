import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/EvilIcons";
import styles from "./style";
class Note extends Component {
  state = {};
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText} children={this.props.val.date} />
        <Text style={styles.noteText} children={this.props.val.note} />
        <TouchableOpacity
          onPress={this.props.onPressDelete}
          style={styles.deleteNote}
        >
          <Icon name="minus" size={20} color="#19d6ac" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Note;
