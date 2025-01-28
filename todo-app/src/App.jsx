import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/Todoinput"
import { TodoList } from "./components/TodoList"


function App() {

  return (
    <>
      <Header />   
      <Tabs />
      <TodoList />
      <TodoInput />
    </>

)
}

export default App
