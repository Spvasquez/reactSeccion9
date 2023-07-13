import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import { Padre } from './07-tarea-memo/Padre'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayotEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
 import { FormWhithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
    <FormWhithCustomHook />
//  </React.StrictMode>,
)
