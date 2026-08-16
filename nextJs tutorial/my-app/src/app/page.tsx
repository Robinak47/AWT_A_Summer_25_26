"use client"

import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

interface TODOS {
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean

}
export default function Home() {

  const [todos, setTodos] = useState<TODOS>([])

  useEffect(() => {

    const getTodos = async () => {

      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data);
        console.log("data found");
      }
      catch {
        console.log("exception")
      }




    }

    getTodos();
  }, [])
  return (

    <>
      <h1> Hello</h1>
      <button onClick={() => { alert("say meow") }}>click me</button>

      <div>Todos List

        {
          todos.map((todo: TODOS) =>
          (<div key={todo.id} className=" bg-amber-200 border-2 border-cyan-500 text-black">
            <p>{todo.userId}</p>
            <p>{todo.title}</p>
            <p>{(todo.completed) ? "completed" : "not completed"}</p>
          </div>)
          )
        }
      </div>

    </>
  );
}
