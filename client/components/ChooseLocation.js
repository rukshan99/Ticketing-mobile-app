import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';

export default class ChooseLocation extends Component {

    constructor(props) {
     
        super(props)
     
        this.state = {
     
          sourse: '',
          destination:''
     
        }
    }

    // navigateDocumentPage(e, sourse) {
    //     window.location ='/SelectRoute'
    //   }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                <Button 
                    title="Go to CompleteTrip"
                    // onClick={e => this.navigateDocumentPage(e, this.state.sourse)}
                    onPress={() => this.props.navigation.navigate('SelectRoute',{sourse:this.state.sourse,destination:this.state.destination})}
                />
                <Button 
                    title="cancle"
                />
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