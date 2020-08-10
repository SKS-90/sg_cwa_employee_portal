import React from 'react';
import { shallow } from 'enzyme';
import EmployeeList from '../employee.list';

/**
 * Factory function to create a shallow wrapper for EmployeeList component.
 * @function setup
 * @param {object} props
 * @param {any} state
 * @returns {shallow wrapper}
 */
const setup = (props = {}, state = {}) => {
    const wrapper = shallow(<EmployeeList {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}

describe('Test Suites for EmployeeList component', () => {

    it('Test case for header text', () => {
        const wrapper = setup();
        const title = 'All Registered Employee';
        expect(wrapper.find('h1').text()).toEqual(title);
    });

    it('Test case for link ', () => {
        const wrapper = setup();
        const title = 'Back To Registration';
        expect(wrapper.find('Link').text()).toEqual(title);
    })
})