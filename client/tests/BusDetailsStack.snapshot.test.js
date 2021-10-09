import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

import BusDetails from './components/BusDetails';


configure({ adapter: new Adapter() });

it("Bus Details renders correctly", () => {
    const tree = shallow(<BusDetails />);
    expect(toJson(tree)).toMatchSnapshot();
});

