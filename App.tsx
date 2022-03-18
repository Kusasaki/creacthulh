import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, } from "react-native";
import TodoList from "./componentsTP/TodoList";
import { Header as HeaderRNE } from 'react-native-elements';
import todoService from "./servicesTP/todo.service";

interface AppState {
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
  };

  loadTodos = () => {
    // Load all modules
    todoService.getAll().then((todo) => {
      // Show all modules by default
      let displayedTodos = todo;
      this.setState({ todos: displayedTodos });
    });
  };

  addTodo = (task: string) => {
      todoService.add(task);
      this.loadTodos();
  }

  render() {
    const todosList = <TodoList />;

    return (
      <View style={styles.container}>
        <HeaderRNE
            centerComponent={{ text: 'Todo Native', style: styles.heading }}
        />
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.inputs}
            placeholder="Saisissez une nouvelle tâche"
            />
        </View>
        {todosList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "lightgray",
    borderBottomWidth: 1,
    height: 60,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});