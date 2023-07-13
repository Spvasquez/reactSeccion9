import {  memo} from "react";

export const Small = memo(({counter}) => {
    console.log('Me volvi a dibujar :c')
  return (
    <small>{counter}</small>
  )
})
