import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ChooseLocation from './components/ChooseLocation';
import SelectRoute from './components/SelectRoute';
import BusDetailsForRoute from './components/BusDetailsForRoute';
import CompleteTrip from './components/CompleteTrip';
import GenerateQR from './components/GenerateQR';

configure({ adapter: new Adapter() });

it("Choose Location renders without crashing", () => {
    shallow(<ChooseLocation />);
});

it("Select Route renders without crashing", () => {
    shallow(<SelectRoute />);
});

it("BusDetails For Route renders without crashing", () => {
    shallow(<BusDetailsForRoute />);
});

it("Complete Trip renders without crashing", () => {
    shallow(<CompleteTrip />);
});

it("GenerateQR renders without crashing", () => {
    shallow(<GenerateQR />);
});

//Test case for user Profile component using mock data.




