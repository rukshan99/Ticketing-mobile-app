import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import BusDetailsForRoute from './BusDetailsForRoute';


export default  class SelectRoute extends Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            sourse:'',
            destination:'',
            routesCollection: [],
            route:'',
            isRouteSelected:false
        }

        // this.routeSelectHandler=this.routeSelectHandler.bind(this);

    }

    componentDidMount() {

        const sourse  = this.props.route.params.sourse;
        const destination  = this.props.route.params.destination;
        console.log(sourse)

        this.setState({
            sourse : sourse,
            destination : destination
        })

        const body = {
            sourse : sourse,
            destination : destination
        }

        axios.get('http://localhost:4000/api/v1/buses/routes', {params: {...body}} )
        .then(response => {
             console.log('routesCollection',response.data);
        this.setState({ routesCollection: response.data.data });

        })
    }
    // onClickHandler = () =>{
        
    //     this.setState({isRouteSelected:true});
        
    // }
    render() {
       
        return (
            <View style={styles.container}>
               
                <Text>Route</Text>

                <Picker
                    selectedValue= {this.state.route}
                    style={styles.TextInputStyleClass}
                    // onValueChange={this.routeSelectHandler.bind(this.state.route)}
                    onValueChange={()=>(itemValue,itemIndex)=>this.setState({route:itemValue})}
                >
                    {this.state.routesCollection.map((item, key)=>(
                    <Picker.Item label={item.route} value={item.route} key={key} />)
                    )}
                </Picker>
{/* 
                <Button title="next" onPress={this.onClickHandler} color="#2196F3" />
                <Button title="cancle" color="#2196F3" />

                {this.state.isRouteSelected &&(<BusDetailsForRoute route={this.state.route}/>)} */}

                {/* {this.state.isRouteSelected &&(<BusDetailsForRoute/>)} */}
                

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