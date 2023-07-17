import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en useCounter', () => { 

    test('Debe retornar los valores por defecto', () => { 

        const {result}=renderHook(()=>useCounter());
        const{counter,decrement,increment,reset}=result.current;

        expect(counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
     })

     test('Debe generar el counter con 100', () => { 
        const {result}=renderHook(()=>useCounter(100));
        const{counter}=result.current;

        expect(counter).toBe(100)
      })

      test('Debe incrementar el contador', () => { 
        const {result}=renderHook(()=>useCounter());
        const{counter,increment}=result.current;
        act(()=>{
            increment(2);
            
        });
        expect(result.current.counter).toBe(12);
       })

      test('Debe decrementar el contador', () => { 
        const {result}=renderHook(()=>useCounter());
        const{counter,decrement}=result.current;
        act(()=>{
            decrement(2);
            
        });
        expect(result.current.counter).toBe(8);
       })

      test('Debe resetear el contador', () => { 
        const {result}=renderHook(()=>useCounter());
        const{counter,decrement,reset}=result.current;
        act(()=>{
            decrement(2);
            reset();
        });
        expect(result.current.counter).toBe(counter);
       })
 })