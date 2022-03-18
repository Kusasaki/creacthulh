import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, } from "react-native";
import todoService, { Todo } from "../servicesTP/todo.service";
import TodoItem from "./TodoItem";

interface TodoListState {
    todos: Array<Todo>;
  }
  
  export default class TodoList extends Component<{}, TodoListState> {
    state: TodoListState = {
        todos: [],
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
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
  });