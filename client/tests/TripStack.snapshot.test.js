import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

import ChooseLocation from './components/ChooseLocation';
import SelectRoute from './components/SelectRoute';
import BusDetailsForRoute from './components/BusDetailsForRoute';
import CompleteTrip from './components/CompleteTrip';
import GenerateQR from './components/GenerateQR';


configure({ adapter: new Adapter() });

it("Choose Location renders correctly", () => {
    const tree = shallow(<ChooseLocation />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Select Route renders without crashing", () => {
    const tree = shallow(<SelectRoute />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Bus Details For Route renders without crashing", () => {
    const tree = shallow(<BusDetailsForRoute />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Complete Trip renders without crashing", () => {
    const tree = shallow(<CompleteTrip />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("GenerateQR renders without crashing", () => {
    const tree = shallow(<GenerateQR />);
    expect(toJson(tree)).toMatchSnapshot();
});