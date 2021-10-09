import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

import Registration from "./components/UserRegistration";


configure({ adapter: new Adapter() });

it("Registration renders correctly", () => {
    const tree = shallow(<Registration />);
    expect(toJson(tree)).toMatchSnapshot();
});

