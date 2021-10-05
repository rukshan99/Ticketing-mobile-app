import React, { Component } from 'react';
import { View, Text, StyleSheet, CheckBox, Button} from 'react-native';
import axios from 'axios';
import RadioButton from './RadioButton';


export default  class BusDetailsForRoute extends Component {

    
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            busessCollection: [],
            route:'',
            bus:'',
            sourse:'',
            destination:'',
            selectedBus:'',
            props:[],
            isSelected:false
           
        }

        this.handleChange=this.handleChange.bind(this);


    }

    componentDidMount() {

        const sourse = this.props.route.params.sourse;
        const destination = this.props.route.params.destination;
        const route = this.props.route.params.route;
        this.setState({
            sourse: sourse,
            destination: destination,
            route: route
        })
        const body = {
            route: route
        }

        axios.get('http://localhost:4000/api/v1/buses/buses', { params: { ...body } })
        .then(response => {
             console.log('busessCollection',response.data);
        this.setState({ busessCollection: response.data.data });


        })

        // this.state.busessCollection.map((bus) => {
        //     this.setState([...{props});
        // });

    }

    handleChange(event) {  
        var isSelected = event.target.checked;  
        var item = event.target.value;                             
           
        this.setState(prevState => ({ selectedBus: prevState.selectedBus.set(item, isSelected) }));
        console.log(selectedBus);  
  }  

    render() {
        return (
            <View style={styles.container}>

                <Text>Hello</Text>

            {this.state.busessCollection.length > 0 && this.state.busessCollection.map((bus, index) => (
                
                <View style={styles.containerview}>
                    <RadioButton>

                    </RadioButton>

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
     
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
    }
     
    });