import React, { Component } from "react";
import { StyleSheet, View, Switch, Button, TextInput} from "react-native";

let _creditCard={};
// let _creditCard;
export default class CreditCard extends Component {
    constructor(props) {
     
        super(props)
     
        this.state = {
          holdername:'',
          cardnumber: '',
          expdate: '',
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
                onChangeText={holdername => {
                  this.setState({holdername})
                  _creditCard = {..._creditCard, holdername}
                }}
            />
            <TextInput
                style={styles.TextInputStyleClass}
                placeholder="Card Number"
                onChangeText={cardnumber => {
                  this.setState({cardnumber})
                  _creditCard = {..._creditCard, cardnumber}
                }}
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
              this.setState({expdate})
              _creditCard = {..._creditCard, expdate}
            }}
            // onChangeText={expdate => this.setState({expdate})}
            />
            <TextInput
            style={styles.TextInputStyleClass}
            placeholder="Security Code"
            onChangeText={cvv => {
              this.setState({cvv})
              _creditCard = {..._creditCard, cvv}
            }}
            // onChangeText={cvv => this.setState({cvv})}
            />
      </View>
     
      </View>
      );
    }
}

  // exports._creditCard = _creditCard;
  export { _creditCard };


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
