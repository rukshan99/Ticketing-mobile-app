import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

import ScanQR from './components/ScanQR';
import UserDetails from "./components/UserDetails";



configure({ adapter: new Adapter() });

it("ScanQR renders correctly", () => {
    const tree = shallow(<ScanQR />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("User Details renders without crashing", () => {
    const tree = shallow(<UserDetails />);
    expect(toJson(tree)).toMatchSnapshot();
});