import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Test sobre useForm', () => { 
    
    const initialForm={
        name:'santiago',
        email:'santiago@google.com'
    }
    test('Debe regresar la informacion por defecto', () => { 
        const{result}=renderHook( ()=>useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState:initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
     });

     test('Debe cambiar el nombre del input del form', () => { 
        const newName='Juancho';
        const {result}=renderHook(()=>useForm(initialForm));
        const {onInputChange}=result.current;
        act(()=>{
            onInputChange({target:{name:'name', value:newName}})
        });
        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);
      })

     test('Debe realizar el reset del form', () => { 
        const newName='Juancho';
        const {result}=renderHook(()=>useForm(initialForm));
        const {onInputChange, onResetForm}=result.current;
        act(()=>{
            onInputChange({target:{name:'name', value:newName}});
            onResetForm();
        });
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
      })

 })