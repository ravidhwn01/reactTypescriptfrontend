import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { add } from './utils/common.utils'
import { QueryClientProvider } from 'react-query'
import { client } from './query-client-provider'
import { Test } from './test/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <QueryClientProvider client={client} >
       <Test></Test>
     </QueryClientProvider>
      
    </>
  )
}

export default App
