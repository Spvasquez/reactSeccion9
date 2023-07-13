import { LoadingQuote } from "../03-examples/LoadingQuote";
import { useCounter,useFetch } from "../hooks";
import { Quote } from "../03-examples/Quote";


export const Layout = () => {
    const {counter,increment}=useCounter(1);
    const{data,isLoading,hasError}=useFetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${counter}`)
    const {character,quote}=!!data&&data[0];
  return (
    <>
    <h1>The simpsons Quotes</h1>
    <hr/>
    {
      (isLoading)
      ?(
       <LoadingQuote/>
      ):(
       /*  data.map((q)=>(
          <Quote character={q.character} quote={q.quote}/>
          )) */
          <Quote character={character} quote={quote}/>
      )
    }
    <button className="btn btn-warning" onClick={()=>increment()} disabled={isLoading}>Next quote</button>
    </>
  )
}
