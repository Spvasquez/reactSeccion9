import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementar=useCallback(
      (add) => {
        setCounter((value)=>value+add)
      },
      [],
    )
    

    /* const incrementar=()=>{
        setCounter(counter+1)
    } */

  return (
   <>
       <h1>Use Callback Hook: {counter}</h1>
       <hr/>
       <ShowIncrement increment={incrementar} />
   </>
  )
}
