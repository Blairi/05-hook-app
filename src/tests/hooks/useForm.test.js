import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Axel',
        email: 'axel@axel.com'
    }

    test('Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange, reset ] = result.current;

        expect(values).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Fer'
                }
            });
        });

        const [ values ] = result.current;
        expect( values ).toEqual({...initialForm, name: 'Fer'});

    });

    test('debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Fer'
                }
            });

            reset();
        });

        const [ values ] = result.current;
        expect( values ).toEqual(initialForm);
    });

});