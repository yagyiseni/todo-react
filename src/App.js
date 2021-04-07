import React, { useState, useEffect } from "react";
import './App.css';
//importing components
import Form from "./components/formfront";
import TodoList from "./components/TodoList";


function App() {
   
    //states
    const [inputText, setInputText]=useState("");
    const [todos,setTodos]=useState([]);
    const [status, setStatus]= useState("all");
    const [filteredTodos, setFilteredTodos]= useState([]);
    
    //use effect
     useEffect(()=>{
        filterHandler();
    }, [todos,status]);//empty array menas that the useeffect function only runs once when the components are first rendered
    
    //functions and events
    const filterHandler = () => {
        switch(status){
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    return ( < div className = "App" >
       <header>
        <h1>To Do List</h1>
    </header>
    <Form  
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}
    setStatus={setStatus} 
   
    />
    <TodoList  
    filteredTodos={filteredTodos} 
    setTodos={setTodos} 
    todos={todos}
    /> 
    </div >
    );
}

export default App;