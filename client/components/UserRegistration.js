import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CreditCard from './CreditCardForm'

export default class Registration extends Component {
 
    constructor(props) {
     
        super(props)
     
        this.state = {
     
          name: '',
          email:'',
          password: '',
          mobile: '',
          role:'Passenger',
          holdername:'',
          cardnumber:'',
          expdate:'',
          cvv:'',
          isPassenger:true,
          isConductor:false,
          isDriver:false
     
        }
        this.typeSelectHandler=this.typeSelectHandler.bind(this);
        this.signupSubmitHandler=this.signupSubmitHandler.bind(this);
     
      }

      signupSubmitHandler = () =>{

        try {
          // const { firstName, lastName, age, gender, email, salary, subjectId } = this.state;
          const { name,email,password,mobile,role,holdername,cardnumber,expdate,cvv } =this.state;
          const body = {
            name: name,
            email: email,
            password: password,
            mobile: mobile,
            role: role,
            holdername: holdername,
            cardnumber: cardnumber,
            expdate: expdate,
            cvv: cvv
          };
          console.log('add user -> body', body);
          const res = axios.post('http://localhost:4000/api/v1/user/signup', body);
          let doneObj = { message: res.data.message, type: 'success' };
          this.setState({ loading: false, doneObj: doneObj });
        } catch (error) {
          let doneObj = { message: error.response.data.error, type: 'error' };
          this.setState({ loading: false, doneObj: doneObj });
        }

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

      this.setState({role:value}, ()=>{
        if(this.state.role==="Passenger") {
            this.setState({isPassenger:true});
            this.setState({isConductor:false});
            this.setState({isDriver:false});
        }
        else if(this.state.role==="Conductor") {
          this.setState({isPassenger:false});
          this.setState({isConductor:true});
          this.setState({isDriver:false});
        }
        else if(this.state.role==="Driver") {
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
              onChangeText={name => this.setState({name})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              value={this.state.name}
            />

            <TextInput
              placeholder="Enter User Email"
              onChangeText={email => this.setState({email})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              value={this.state.email}
            />

            <TextInput
              placeholder="Enter User Password"
              onChangeText={password => this.setState({password})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              secureTextEntry={true}
              value={this.state.password}
            />
     
            <TextInput
              placeholder="Enter User Mobile Number"
              onChangeText={mobile => this.setState({mobile})}
              underlineColorAndroid='transparent'
              style={styles.TextInputStyleClass}
              value={this.state.mobile}
            />

            <Picker
                selectedValue= {this.state.role}
                style={styles.TextInputStyleClass}
                value={this.state.role}
                onValueChange={this.typeSelectHandler.bind(this.state.role)}
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