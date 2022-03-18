import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, } from "react-native";
import TodoList from "./componentsTP/TodoList";
import { Header as HeaderRNE } from 'react-native-elements';
import todoService from "./servicesTP/todo.service";

import Input from "./componentsTP/Input";

interface AppState {
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
  };
  
  addTodo = (task: string) => {
    todoService.add(task);
    this.loadTodos();
  }

  loadTodos = () => {
    // Load all modules
    todoService.getAll().then((todos) => { this.setState({ todos: todos });
    });
  };

  render() {
    const todosList = <TodoList />;

    return (
      <View style={styles.container}>
        <HeaderRNE
            centerComponent={{ text: 'Todo Native', style: styles.heading }}
        />
        <View style={styles.inputContainer}>
          <Input
              placeholder="Saissisez une nouvelle tâche"
              onSubmittingEdit={this.addTodo}
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
  buttonContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signInButton: {
    backgroundColor: "skyblue",
  },
  loginText: {
    color: "white",
  },
});