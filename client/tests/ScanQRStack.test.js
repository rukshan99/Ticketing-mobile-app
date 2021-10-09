import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import ScanQR from './components/ScanQR';
import UserDetails from "./components/UserDetails";

configure({ adapter: new Adapter() });

it("User Details renders without crashing", () => {
    shallow(<ScanQR />);
});

it("ScanQR renders without crashing", () => {
    shallow(<UserDetails />);
});


