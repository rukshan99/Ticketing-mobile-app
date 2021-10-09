import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

import UserAccount from './components/UserAccount';
import SingleTrip from './components/SingleTrip';

configure({ adapter: new Adapter() });

it("User Account renders correctly", () => {
    const tree = shallow(<UserAccount />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Single Trip renders correctly", () => {
    const tree = shallow(<SingleTrip />);
    expect(toJson(tree)).toMatchSnapshot();
});


