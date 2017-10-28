import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

class SubmitButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.scaffold}
        onPress={() => { Alert.alert('Order submitted!')}}
      >
        <Text>Submit Order!</Text>
      </TouchableOpacity>
    );
  }
}
class JuiceInput extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0, price: 0 }
  }
  render() {
    return (
      <View style={[styles.JuiceInput, styles.scaffold]}>
        <TouchableOpacity style={[styles.IncrementButton, styles.scaffold]}
          onPress={() => {
            this.setState(previousState => {
              let _amount = previousState.amount == 0 ? 1 : previousState.amount + 0.5;
              return {
                amount: _amount,
                cost: _amount * this.props.price
              };
            });
          }}
        >
          <Text>
            {this.props.name}, Rs {this.props.price}: {this.state.amount} liters (Rs {this.state.cost})
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class AccountSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

export default class LotsOfChoices extends Component {
  constructor(props) {
    super(props);
    this.state = { orderStatus: 'pending' }
  }
  render() {
    return (
      <View style={{
        marginTop: 50,
        flex: 1,
      }}>
        <AccountSetup />
        <JuiceInput name='Carrot Mint Mosambi' price={250} />
        <JuiceInput name='Ginger Carrot Grape' price={200} />
        <JuiceInput name='Apple Mango Spinach' price={220} />
        <JuiceInput name='Apple Mango Spinach' price={220} />
        <SubmitButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  JuiceInput: {
    flex: 2,
    backgroundColor: 'skyblue',
    padding: 10
  },
  IncrementButton: {
    flex: 1
  },
  scaffold: {
    borderWidth: 1,
    borderColor: 'white',
  }
});
