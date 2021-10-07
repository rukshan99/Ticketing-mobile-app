import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import busImage from '../assets/splash.png'

export default class ChooseLocation extends Component {

    constructor(props) {
     
        super(props)
     
        this.state = {
     
          sourse: '',
          destination:''
     
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Image source={busImage} style={{ width: 305, height: 159, bottom: 25 }} /> 

                <TextInput
                    placeholder="Enter Sourse"
                    onChangeText={sourse => this.setState({sourse})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.sourse}
                />
                
                <TextInput
                    placeholder="Enter Destination"
                    onChangeText={destination => this.setState({destination})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    value={this.state.destination}
                />
                <View style={styles.row}>
                <View style={{right: 21, width: 130}}>
                <Button 
                    title="Select route"
                    onPress={() => this.props.navigation.navigate('SelectRoute',{sourse:this.state.sourse,destination:this.state.destination})}
                />
                </View>
                <View style={{left:17, width: 130}}>
                <Button 
                    title="cancel"
                    color="#ed665c"
                />
                </View>
                </View>
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
        flexDirection: 'row',
        marginBottom: 36,
      },

    TextInputStyleClass: {
    
        marginBottom: 15,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
        margin: 5,
        width: 300
    }
     
    });