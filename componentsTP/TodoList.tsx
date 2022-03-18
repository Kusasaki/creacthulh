import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, } from "react-native";
import todoService, { Todo } from "../servicesTP/todo.service";
import TodoItem from "./TodoItem";

interface TodoListState {
    todos: Array<Todo>;
    newTask: string;
  }
  
  export default class TodoList extends Component<{}, TodoListState> {
    state: TodoListState = {
        todos: [],
        newTask: "",
    };
  
    loadTodos = () => {
      // Load all modules
      todoService.getAll().then((todo) => {
        // Show all modules by default
        let displayedTodos = todo;
        this.setState({ todos: displayedTodos });
      });
    };

    componentDidMount() {
      this.loadTodos();
    }
  
    render() {
      return (
        <View style={styles.container}>
          <FlatList<Todo>
            style={styles.list}
            data={this.state.todos}
            keyExtractor={(item) => item.task}
            renderItem={({ item }: { item: Todo }) => (
              <TodoItem todo={item} />
            )}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-start",
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
    list: {
      flex: 1,
      flexDirection: "row",
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