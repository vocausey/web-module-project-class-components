import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const todos = [
  {
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todos
  }
  
}
toggleItem = (id) => {
  const newList = this.state.todos.map(item => {
    if(item.id === id){
      return {
        ...item,
        completed: !item.completed
      }
    }else{
      return(item)
    }
  });
  this.setState({
    todo: newList
  })
};
addItem =(title) =>{
  const newItem = {
    task:title,
    id: this.state.todos.length,
    completed: false
  }
  console.log(newItem)
  this.setState({
    todos:[...this.state.todos, newItem]
  })
}

clearItem = (e) =>{
e.preventDefault();
const newList = this.state.todos.filter(item =>{
  return(item.completed === false)
})

this.setState({todos: newList})
}


  render() {
    return (
      <div className = "App">
          <div className = "header">
            <h2>Welcome to your Todo App!</h2>
            <TodoForm addItem= {this.addItem} clearItem = {this.clearItem}/>,
            <TodoList clearItem={this.clearItem} toggleItem={this.toggleItem} todos={this.state.todos}/>
            
           
          </div>
      </div>
    );
  }
}

export default App;
