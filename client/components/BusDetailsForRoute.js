import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import axios from 'axios';

import RadioButtonContainer from './RadioButtonContainer';


export default class BusDetailsForRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busessCollection: [],
            route: '',
            bus: '',
            sourse: '',
            destination: '',
            selectedBus: {},
            props: [],
            isSelected: false

        }
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
                this.setState({ busessCollection: response.data.data }, () => {
                    this.state.busessCollection.map((bus) => {
                        this.setState({
                            props: [...this.state.props, {
                                text: `BusNo: ${bus.BusNo}\nDate: ${bus.date} | Time: ${bus.time}`
                            }]
                        });
                    });
                });
            })
    }

    onRadioButtonPress = (itemIdx) => {
        this.setState({ selectedBus: this.state.busessCollection[itemIdx] });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerview}>
                    <RadioButtonContainer values={this.state.props} onPress={this.onRadioButtonPress} />
                    <br/>
                    <br/>
                    <Button
                        title="Proceed to Payment"
                        onPress={() => this.props.navigation.navigate('CompleteTrip', {
                            ...this.state.selectedBus,
                            source: this.state.sourse,
                            destination: this.state.destination
                        })}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    },
    containerview: {
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
        borderRadius: 5,
    }

});