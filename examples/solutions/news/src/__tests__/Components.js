import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Dogs } from '../Dogs';
import App from '../App';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

beforeEach(() => {
  Math.random = jest.fn(() => 23)
});

describe("dogs", () => {
  it('Renders without crashing', () => {
    Math.random = jest.fn(() => 23)
    const rand = Math.random();
    const dogsComponent = shallow(<Dogs number={rand} />);
    expect(dogsComponent).toMatchSnapshot();
  }); 

  it('have a random number that is not so random', () => {
    const random = Math.random();
    expect(random).toEqual(23); 
  })
});

class TestWrapper extends React.Component {
  render() {
    return this.props.children;
  }
}

