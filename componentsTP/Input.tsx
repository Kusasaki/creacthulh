import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

interface InputProps {
    onSubmittingEdit;
    placeholder: string;
}

interface InputState {
    input: "";
};

export default class Input extends Component<InputProps, {}> {
    state: InputState = {
        input: "",
    }

    updateInput(newInput : string){
        this.setState({input: newInput})
    }

    render() {
        return (
        <View style={styles.inputContainer}>
            <TextInput
            placeholder={this.props.placeholder}
            onChangeText={ text => {this.updateInput(text)}}
            onSubmitEditing={ () => { this.props.onSubmittingEdit(this.state.input)}}
            />
        </View>
        );}
    }

    const styles = StyleSheet.create({
    inputContainer: {
        borderBottomColor: "#F5FCFF",
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    inputText: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: "center",
    },
});
