import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Todo } from "../servicesTP/todo.service";
import todoService from "../servicesTP/todo.service";

import MySwitch from "./Switch";

interface TodoItemProps {
  todo: Todo;
}

export default class TodoItem extends Component<TodoItemProps, {}> {
  loadTodos = () => {
    // Load all modules
    todoService.getAll().then((todo) => {
      // Show all modules by default
      let displayedTodos = todo;
      this.setState({ todos: displayedTodos });
    });
  };
  
  onDelete = (task: string) => {
    removeTodo();
  }

  removeTodo = () => {
    todoService.remove(task);
    this.loadTodos;
  }

  render() {
    return (
      <View style={styles.main_container}>
          <Text>
              {this.props.todo.task}
          </Text>
          <MySwitch></MySwitch>
          <Button
            title="Supprimer"
            onPress={this.onDelete}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 50,
    flexDirection: "row",
    margin: 10,
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
});