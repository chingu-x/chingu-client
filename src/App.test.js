import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

// Configure Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  it('Renders App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Contains a div wrapper with a message', () => {
    const wrapper = shallow(<App />);
    const message = <div>Chingu Developers Network</div>;
    expect(wrapper.contains(message)).toEqual(true);
  });
});
