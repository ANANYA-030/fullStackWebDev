
import {useState} from 'react'

let globalID = 0

function App() {
  const [todos, setTodos] = useState([])
  const [task,setTask] = useState("")

  function createTodo(event){
    event.preventDefault()

    setTodos(oldTodos=>{
      setTask('')
      return [...oldTodos, {todo : task , id: globalID++}]
    })
  }
  
  function deleteItem(itemID){
    setTodos(oldTodos => oldTodos.filter(item => item.id!== itemID))
  }

  return (
    <div className="App">
      <h1>Best To Do App Ever</h1>

      <form onSubmit={createTodo}>
      <input type="text" value={task} onChange={e=>{
        setTask(e.target.value)
      }}/>
      <button type="submit">Create Todo</button>

      <ul>
        {todos.map( (item) =>{
          return <div key={item.id}>
          <li>{item.todo}</li>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        })}
      </ul>
      </form>

    </div>
  );
}

export default App;
