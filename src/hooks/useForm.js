import { useState } from "react";
//Este hook toma un formulario y cambia el valor de los inputs

export const useForm = (initialForm={}) => {

    const [formState, setFormState] = useState({initialForm})

    const onInputChange=({target})=>{
        const{name,value}=target;
        setFormState({
            ...formState,
            [name]:value
        });
    }
    const onResetForm=()=>{
        setFormState(initialForm);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
