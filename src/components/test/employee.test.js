import React from 'react';
import { shallow } from 'enzyme';
import Employee from '../employee';

/**
 * Factory function to create a shallow wrapper for Employee component.
 * @function setup
 * @param {object} props
 * @param {any} state
 * @returns {shallow wrapper}
 */
const setup = (props = {}, state = {}) => {
    const wrapper = shallow(<Employee {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}

describe('Test Suites for employee component', () => {

    it('Test case for header text', () => {
        const wrapper = setup();
        const title = 'Employee Registration Portal';
        expect(wrapper.find('h1').text()).toEqual(title);
    });

    it('Test case for onchange events',()=>{
        const wrapper=setup();
        wrapper.find('input').at(0).simulate('change', { target: { name: 'firstName', value: "sujeet" } });
        expect(wrapper.state('firstName')).toEqual('sujeet');
        wrapper.find('input').at(1).simulate('change', { target: { name: 'lastName', value: "swain" } });
        expect(wrapper.state('lastName')).toEqual('swain');
        wrapper.find('input').at(2).simulate('change', { target: { name: 'dateOfBirth', value: "09-05-1980" } });
        expect(wrapper.state('dateOfBirth')).toEqual('09-05-1980');
        wrapper.find('input').at(3).simulate('change', { target: { name: 'gender', value: "Male" } });
        expect(wrapper.state('gender')).toEqual('Male');
        wrapper.find('input').at(4).simulate('change', { target: { name: 'department', value: "IT" } });
        expect(wrapper.state('department')).toEqual('IT');
      });

    it('Test case for link ', () => {
        const wrapper = setup();
        const title = 'See All Registered Employee';
        expect(wrapper.find('Link').text()).toEqual(title);
    })
})