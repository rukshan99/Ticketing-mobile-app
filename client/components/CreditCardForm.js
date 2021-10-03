import React, { Component } from "react";
import { StyleSheet, View, Switch, Button, TextInput} from "react-native";

export default class CreditCard extends Component {
    constructor(props) {
     
        super(props)
     
        this.state = {
          Cardholder:'',
          cardNumber: '',
          expiration: '',
          cvv: '',
          focus:''
     
        }
     
      }

     
    // state = { useLiteCreditCardInput: false };

    // _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
    // _onFocus = (field) => console.log("focusing", field);
    // _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });
  
    render() {
      return (

        <View>
            <TextInput
                
                style={styles.TextInputStyleClass}
                placeholder="Cardholder Name"
                onChangeText={Cardholder => this.setState({Cardholder})}
            />
            <TextInput
                style={styles.TextInputStyleClass}
                placeholder="Card Number"
                onChangeText={cardNumber => this.setState({cardNumber})}
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
            onChangeText={expiration => this.setState({expiration})}
            />
            <TextInput
            style={styles.TextInputStyleClass}
            placeholder="Security Code"
            onChangeText={cvv => this.setState({cvv})}
            />
      </View>
      <Button title="PAY" onPress={this.onSubmit} />
    </View>
        
      );
        }
}


  const styles = StyleSheet.create({
 
    container :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10
    },
    row: {
              flex: 1,
              flexDirection: 'row',
              marginBottom: 36,
            },
    // textField: {
    //           flex: 1,
    //           marginTop: 24,
    //         },
     
    TextInputStyleClass: {
     
    // textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#2196F3',
     
     // Set border Radius.
     borderRadius: 5 ,
     
    // Set border Radius.
     //borderRadius: 10 ,
    }
     
    });
