import React from 'react';
import { shallow } from 'enzyme';
import RegisterSuccess from '../registration.success';

/**
 * Factory function to create a shallow wrapper for RegisterSuccess component.
 * @function setup
 * @param {object} props
 * @param {any} state
 * @returns {shallow wrapper}
 */
const setup = (props = {}, state = {}) => {
    const wrapper = shallow(<RegisterSuccess {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}

describe('Test Suites for RegisterSuccess component', () => {

    it('Test case for header text', () => {
        const wrapper = setup();
        const title = 'Successfully Registered';
        expect(wrapper.find('h1').text()).toEqual(title);
    });

    it('Test case for link ', () => {
        const wrapper = setup();
        const title = 'See All Registered Employee';
        expect(wrapper.find('Link').text()).toEqual(title);
    })
})