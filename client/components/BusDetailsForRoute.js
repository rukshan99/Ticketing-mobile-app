import React, { Component } from 'react';
import { View, Text, StyleSheet, CheckBox, Button} from 'react-native';
import axios from 'axios';
import { param } from '../../src/routes/bus.routes';


export default  class BusDetailsForRoute extends Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            busessCollection: [],
            route:'',
            bus:'',
            selectedBus:'',
            isSelected:false
           
        }

    }

    componentDidMount() {

        // console.log(this.props)
        // const route = this.props.route;

        // this.setState({route:route});

        // const body = {route: route};

        axios.get('http://localhost:4000/api/v1/buses/buses')
        .then(response => {
             console.log('busessCollection',response.data);
        this.setState({ busessCollection: response.data.data });

        })
    }

    render() {
        return (
            <View style={styles.container}>

            {this.state.busessCollection.length > 0 && this.state.busessCollection.map((bus, index) => (
                
                <View style={styles.containerview}>
                        <CheckBox
                            value={this.state.isSelected}
                            onValueChange={() => this.setState({ isSelected: true})}
                            style={styles.checkbox}
                        />

                        <Text> Name: {bus.BusNo}</Text>
                        <Text>Email: {bus.time}</Text>
                        <Text>Is CheckBox selected: {this.state.isSelected? "👍" : "👎"}</Text>
                   
                </View>     
                   
                    ))}
                
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
    
    containerview :{
     
        justifyContent: 'center',
       
        margin: 10
        },
     checkbox: {
            alignSelf: "center",
    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
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