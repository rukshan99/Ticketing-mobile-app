import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

let _creditCard = {};

export default class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      holdername: '',
      cardnumber: '',
      expdate: '',
      cvv: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.TextInputStyleClass}
          placeholder="Cardholder Name"
          onChangeText={holdername => {
            this.setState({ holdername })
            _creditCard = { ..._creditCard, holdername }
          }}
          value={this.state.holdername}
        />
        <TextInput
          style={styles.TextInputStyleClass}
          placeholder="Card Number"
          onChangeText={cardnumber => {
            this.setState({ cardnumber })
            _creditCard = { ..._creditCard, cardnumber }
          }}
          value={this.state.cardnumber}
        />
        <View style={styles.row}>
          <TextInput
            style={[
              styles.TextInputStyleClass,
              {
                marginRight: 24,
              },
            ]}
            placeholder="Expiration Date"
            onChangeText={expdate => {
              this.setState({ expdate })
              _creditCard = { ..._creditCard, expdate }
            }}
            value={this.state.expdate}
          />
          <TextInput
            style={styles.TextInputStyleClass}
            placeholder="Security Code"
            onChangeText={cvv => {
              this.setState({ cvv })
              _creditCard = { ..._creditCard, cvv }
            }}
            value={this.state.cvv}
          />
        </View>

      </View>
    );
  }
}

export { _creditCard };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 10
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 36,
  },
  TextInputStyleClass: {
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
  }
});
