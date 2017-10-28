import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image } from 'react-native';

class SubmitButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.SubmitButton, styles.scaffold]}
        onPress={() => { Alert.alert('Order submitted!')}}
      >
        <Text style={styles.mostText}>Submit Order!</Text>
      </TouchableOpacity>
    );
  }
}
class JuiceInput extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0, cost: 0 }
  }
  render() {
    return (
      <Image
        style={[styles.JuiceInput, styles.scaffold]}
        source={{ uri: this.props.img}}
      >
        <TouchableOpacity style={[styles.IncrementButton]}
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

          <Text style={styles.mostText}>
            {this.props.name}, Rs {this.props.price}
          </Text>
          <Text style={styles.mostText}>
            {this.state.amount} liters (Rs {this.state.cost})
          </Text>
        </TouchableOpacity>
      </Image>
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
      <View style={[styles.MainChoicesView, styles.scaffold]}>
        <JuiceInput name='Mosambi Carrot Ginger' price={250} img='https://draxe.com/wp-content/uploads/2014/03/Orange-Carrot-Ginger-Juice.jpg' />
        <JuiceInput name='Beet Mosambi Nimbu Ginger' price={200} img='https://lh4.googleusercontent.com/-9M5dqfoxUzI/UmiOcnhekhI/AAAAAAAANsY/CjR1j53ZqvQ/w653-h479-no/Beetroot+Juice3.jpg' />
        <JuiceInput name='Apple Mango Spinach' price={220} img='https://placehold.it/600x200' />
        <JuiceInput name='Pineapple Cucumber Mint' price={220} img='https://livelovefruit.com/wp-content/uploads/2017/03/Pineapple-cucumber-mint-juice.jpg' />
        <SubmitButton />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  JuiceInput: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 10,
  },
  IncrementButton: {
    flex: 1,

  },
  MainChoicesView: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    //justifyContent: 'center',
  },
  SubmitButton: {
    //display: 'none',
    height: 60,
    backgroundColor: 'limegreen',
    padding: 20
  },
  scaffold: {
    borderWidth: 1,
    borderColor: 'white',
  },
  mostText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  }
});
