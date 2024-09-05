import App from "./app"

App.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default App
