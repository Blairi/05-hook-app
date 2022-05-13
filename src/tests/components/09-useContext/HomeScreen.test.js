import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Fer',
        email: 'fer@fer.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrarse el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

});