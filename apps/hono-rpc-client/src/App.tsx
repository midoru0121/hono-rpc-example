import './App.css'

import { hc } from 'hono/client'
import type { AppType} from "../../hono-rpc-server/src/app"
import { useEffect, useState } from 'react'

const client = hc<AppType>('http://localhost:8787/')

function App() {
  const [msg, setMsg] = useState("")

  useEffect(() => {
    (async() => {
      const res = await client.posts.$post({
        form: {
          title: 'Hello',
          body: 'Hono is a cool project',
        },
      })
      const data = await res.json()
      setMsg(data.message)
    })();
  })

  return (
    <h1>{msg}</h1>
  )
}

export default App
