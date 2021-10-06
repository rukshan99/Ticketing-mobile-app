import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';


export default class SelectRoute extends Component {

    state = {
        sourse: '',
        destination: '',
        routesCollection: [],
        route: '',
        isRouteSelected: false
    }

    componentDidMount() {
        const sourse = this.props.route.params.sourse;
        const destination = this.props.route.params.destination;
        this.setState({
            sourse: sourse,
            destination: destination
        })
        const body = {
            sourse: sourse,
            destination: destination
        }
        axios.get('http://localhost:4000/api/v1/buses/routes', { params: { ...body } })
            .then(response => {
                this.setState({ routesCollection: response.data.data });

            })
    }
    
  
    render() {
        return (
            <View style={styles.container}>
            <Text>Route</Text>
            <Picker
                selectedValue={this.state.route}
                style={styles.TextInputStyleClass}    
                onValueChange={(itemValue, itemIndex) => this.setState({ route: itemValue })}
            >
                {this.state.routesCollection.map((item, key) => (
                    <Picker.Item label={item.route} value={item.route} key={key} />)
                )}
            </Picker>
            <Button 
                title="Next"
                onPress={() => this.props.navigation.navigate('BusDetailsForRoute',{sourse:this.state.sourse,destination:this.state.destination,route:this.state.route})}
                
            />
            <Button title="Cancel"/>
        </View>
        )
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

    btn:{
        flexDirection: 'row', 
        height: 50, 
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
     
    },
     
    TextInputStyleClass: {
     
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3', 
    borderRadius: 5 ,
    }
     
    });