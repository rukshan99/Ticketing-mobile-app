import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import UserAccount from './components/UserAccount';
import SingleTrip from './components/SingleTrip';



configure({ adapter: new Adapter() });

it("User Account renders without crashing", () => {
    shallow(<UserAccount />);
});

it("Single Trip renders without crashing", () => {
    shallow(<SingleTrip />);
});