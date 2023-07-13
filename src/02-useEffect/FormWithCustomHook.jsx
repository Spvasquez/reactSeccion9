import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWhithCustomHook = () => {

    const{formState,onInputChange,onResetForm,username,email,password}=useForm({
        username: '',
        email: '',
        password: ''
    });

  return (
    <>
    <h1>Formulario con custom Hook</h1>
    <hr/>
    <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
    <input type="email" className="form-control mt-2" placeholder="santiago@google.com" name="email" value={email} onChange={onInputChange}/>
    <input type="password" className="form-control mt-2" placeholder="contraseña" name="password" value={password} onChange={onInputChange}/>

    <button className="btn btn-success mt-2" onClick={onResetForm}>Borrar</button>
    </>
  )
}
