import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'Santiago',
        email:'santiago@google.com'
    })

    const {username,email}=formState;

    const onInputChange=({target})=>{
        const{name,value}=target;
        setFormState({
            ...formState,
            [name]:value
        });
    }

    useEffect(()=>{
       // console.log('1era vez')
//Cuando en la lista de dependencias se manda un arreglo vacio significa que el useEffect se dispara una sola vez al renderizar
    },[]);
    useEffect(()=>{
       // console.log('cuando cambia el formState')
    },[formState]);
    useEffect(()=>{
        //console.log('cuando ambia el email')
    },[email]);

  return (
    <>
    <h1>Formulario Simple</h1>
    <hr/>
    <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
    <input type="email" className="form-control mt-2" placeholder="santiago@google.com" name="email" value={email} onChange={onInputChange}/>
    {
        (username==='Santiago2')&&<Message/>
    }
    </>
  )
}
