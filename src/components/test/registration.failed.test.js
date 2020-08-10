import React from 'react';
import { shallow } from 'enzyme';
import RegistartionFailed from '../registration.failed';

/**
 * Factory function to create a shallow wrapper for RegistartionFailed component.
 * @function setup
 * @param {object} props
 * @param {any} state
 * @returns {shallow wrapper}
 */
const setup = (props = {}, state = {}) => {
    const wrapper = shallow(<RegistartionFailed {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}

describe('Test Suites for RegistartionFailed component', () => {

    it('Test case for header text', () => {
        const wrapper = setup();
        const title = 'Registration Failed';
        expect(wrapper.find('h1').text()).toEqual(title);
    });
})