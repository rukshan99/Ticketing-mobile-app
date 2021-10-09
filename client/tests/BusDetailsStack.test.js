import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BusDetails from './components/BusDetails';

configure({ adapter: new Adapter() });

it("bus Details renders without crashing", () => {
    shallow(<BusDetails />);
});

