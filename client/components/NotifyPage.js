import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

export default class NotifyPage extends Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            driversCollection: [],
            conductorCollection: [],
            inspectorCollection: [],
            driver:'',
            conductor:'',
            inspector:''
        }
    }

    componentDidMount() {

        axios.get('http://localhost:4000/api/v1/user/allDrivers')
        .then(response => {
             console.log('driversCollection',response.data);
        this.setState({ driversCollection: response.data.data });
        })

        axios.get('http://localhost:4000/api/v1/user/allConductors')
        .then(response => {
             console.log('conductorCollection',response.data);
        this.setState({ conductorCollection: response.data.data });
        })

        axios.get('http://localhost:4000/api/v1/user/allInspectors')
        .then(response => {
             console.log('inspectorCollection',response.data);
        this.setState({ inspectorCollection: response.data.data });
        })
    }
    render() {
        return (
            <View  style={styles.container}>
                <Text> Drivers </Text>    
                <Picker
                    selectedValue= {this.state.driver}
                    style={styles.TextInputStyleClass}
                    onValueChange={()=>(itemValue,itemIndex)=>this.setState({driver:itemValue})}
                    

                >
                    {this.state.driversCollection.map((item, key)=>(
                        <Picker.Item label={item.name} value={item.name} key={key} />)
                    )}
                
                </Picker>

                <Text> Conductors </Text>    
                <Picker
                    selectedValue= {this.state.conductor}
                    style={styles.TextInputStyleClass}
                    onValueChange={()=>(itemValue,itemIndex)=>this.setState({conductor:itemValue})}
                    

                >
                    {this.state.conductorCollection.map((item, key)=>(
                        <Picker.Item label={item.name} value={item.name} key={key} />)
                    )}
                
                </Picker>

                <Text> Inspectors </Text>    
                <Picker
                    selectedValue= {this.state.inspector}
                    style={styles.TextInputStyleClass}
                    onValueChange={()=>(itemValue,itemIndex)=>this.setState({inspector:itemValue})}
                    

                >
                    {this.state.inspectorCollection.map((item, key)=>(
                        <Picker.Item label={item.name} value={item.name} key={key} />)
                    )}
                
                </Picker>

                <Button title="Notify"
                        onPress={() => this.submit()}
                />
                 <Button title="Cancel"
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
 
    container :{
        flex:1,
        margin: 10,
    },
     
    TextInputStyleClass: {
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 
    }
     
    });