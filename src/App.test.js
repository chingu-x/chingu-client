import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

// Configure Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

it('renders app component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
