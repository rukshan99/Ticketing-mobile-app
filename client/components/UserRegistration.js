import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CreditCard from './CreditCardForm'

export default class Registration extends Component {
 
    constructor(props) {
     
        super(props)
     
        this.state = {
     
          UserName: '',
          userMobile:'',
          UserEmail: '',
          UserPassword: '',
          UserType:'Passenger',
          isPassenger:true,
          isConductor:false,
          isDriver:false
     
        }
        this.typeSelectHandler=this.typeSelectHandler.bind(this);
     
      }

     
    //   UserRegistrationFunction = () =>{
     
     
    //  const { UserName }  = this.state ;
    //  const { UserEmail }  = this.state ;
    //  const { UserPassword }  = this.state ;
     
     
     
    // fetch('https://reactnativecode.000webhostapp.com/user_registration.php', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
     
    //     name: UserName,
     
    //     email: UserEmail,
     
    //     password: UserPassword
     
    //   })
     
    // }).then((response) => response.json())
    //       .then((responseJson) => {
     
    // // Showing response message coming from server after inserting records.
    //         Alert.alert(responseJson);
     
    //       }).catch((error) => {
    //         console.error(error);
    //       });
     
     
    //   }

    typeSelectHandler = (value) =>{

      this.setState({UserType:value}, ()=>{
        if(this.state.UserType==="Passenger") {
            this.setState({isPassenger:true});
            this.setState({isConductor:false});
            this.setState({isDriver:false});
        }
        else if(this.state.UserType==="Conductor") {
          this.setState({isPassenger:false});
          this.setState({isConductor:true});
          this.setState({isDriver:false});
        }
        else if(this.state.UserType==="Driver") {
          this.setState({isPassenger:false});
          this.setState({isConductor:false});
          this.setState({isDriver:true});
        }
      })
      // console.log(value);
      // console.log(this.state.UserType);
      // setType(value);
      
    }
     
      render() {

        return (
     
        <View style={styles.container}>
     
            <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>
      
            <TextInput
              placeholder="Enter User Name"    
              onChangeText={UserName => this.setState({UserName})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />

            <TextInput
              placeholder="Enter User Mobile Number"
              onChangeText={userMobile => this.setState({userMobile})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              placeholder="Enter User Email"
              onChangeText={UserEmail => this.setState({UserEmail})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              placeholder="Enter User Password"
              onChangeText={UserPassword => this.setState({UserPassword})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={true}
            />

            <Picker
                selectedValue= {this.state.UserType}
                style={styles.TextInputStyleClass}
                onValueChange={this.typeSelectHandler.bind(this.state.UserType)}
                // onValueChange={()=>(itemValue,itemIndex)=>this.setState({UserType:itemValue})}
            >
                <Picker.Item label="Passenger" value="Passenger"></Picker.Item>
                <Picker.Item label="Conductor" value="Conductor"></Picker.Item>
                <Picker.Item label="Driver" value="Driver"></Picker.Item>
                
            </Picker>

            {this.state.isPassenger &&(<CreditCard />)}
            
            <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />

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