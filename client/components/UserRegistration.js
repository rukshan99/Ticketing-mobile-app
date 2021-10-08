import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CreditCard from './CreditCardForm';
import axios from 'axios';
import {_creditCard} from './CreditCardForm';

export default class Registration extends Component {
 
    constructor(props) {
     
        super(props)
     
        this.state = {
     
          name: '',
          email:'',
          password: '',
          mobile: '',
          role:'Passenger',
          isPassenger:true,
          isConductor:false,
          isDriver:false,
          isInspector:false,
          holdername: '',
          cardnumber:'',
          expdate:'',
          cvv:''
     
        }
        this.typeSelectHandler=this.typeSelectHandler.bind(this);
        this.signupSubmitHandler=this.signupSubmitHandler.bind(this);
     
      }


      signupSubmitHandler = async () =>{

        try {

          if( this.state.role === 'Passenger'){
            const { holdername,cardnumber,expdate,cvv } = _creditCard;
            this.setState({
              holdername : holdername,
              cardnumber: cardnumber,
              expdate: expdate,
              cvv: cvv

            }) 

          }

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
          const res = await axios.post('https://ticketing-mobileapp-service.herokuapp.com/api/v1/user/signup', body);
          console.log(res);
          let doneObj = { message: res.data.message, type: 'success' };
          this.setState({ loading: false, doneObj: doneObj });
        } catch (error) {
          let doneObj = { message: error.response.data.error, type: 'error' };
          this.setState({ loading: false, doneObj: doneObj });
        }

      }

    typeSelectHandler = (value) =>{

      this.setState({role:value}, ()=>{
        if(this.state.role==="Passenger") {
            this.setState({isPassenger:true});
            this.setState({isConductor:false});
            this.setState({isDriver:false});
            this.setState({isInspector:false});
            
        }
        else if(this.state.role==="Conductor") {
          this.setState({isPassenger:false});
          this.setState({isConductor:true});
          this.setState({isDriver:false});
          this.setState({isInspector:false});
        }
        else if(this.state.role==="Driver") {
          this.setState({isPassenger:false});
          this.setState({isConductor:false});
          this.setState({isDriver:true});
          this.setState({isInspector:false});
        }
        else if(this.state.role==="Inspector"){
          this.setState({isPassenger:false});
          this.setState({isConductor:false});
          this.setState({isDriver:false});
          this.setState({isInspector:true});
        }
      })

      
    }
     
      render() {

        return (
     
        <View style={styles.container}>
     
            <Text style= {{ fontSize: 30, color: "#000", textAlign: 'center', marginBottom: 45 }}>User Registration Form</Text>
      
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
            >
                <Picker.Item label="Passenger" value="Passenger"></Picker.Item>
                <Picker.Item label="Conductor" value="Conductor"></Picker.Item>
                <Picker.Item label="Driver" value="Driver"></Picker.Item>
                <Picker.Item label="Inspector" value="Inspector"></Picker.Item>
                
            </Picker>

            {this.state.isPassenger &&(<CreditCard />)}
            <View style={{width:250,left:65}}>
            <Button title="Click Here To Register" onPress={this.signupSubmitHandler} color="#2196F3" />
            </View>
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
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,

        }
         
});