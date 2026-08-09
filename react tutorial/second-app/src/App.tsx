import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentsCard from '../../my-first-app/src/components/studentsCard';
import { student } from '../../my-first-app/src/App';
import UserDetails from './userDetails'
import User from './user'
import MyForm from './myForm'

type Cat = {
  id: string,
  name: string
}

type Student =
  {
    id: number,
    name: string,
    cgpa: number
  }
function App() {

  const isAdmin: boolean = true;
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Tom");

  useEffect(() => {
    console.log("page loaded")
  }, []);

  useEffect(() => {
    console.log("button state change")
  }, [count]);





  const cats: Cat[] = [
    {
      id: "1",
      name: "cat 1"
    },

    {
      id: "2",
      name: "cat 2"
    },
    {
      id: "3",
      name: "cat 3"
    }

  ];

  const students: Student[] = [
    {
      id: 1,
      name: "Mr. Meow",
      cgpa: 3.14
    },
    {
      id: 2,
      name: "Mr. Tom",
      cgpa: 3.99
    }

  ]

  return (
    <>
      {
        isAdmin ? (<p> Welcome admin</p>) : (<p> Welcome User</p>)
      }

      {
        isAdmin && <button> Delete User</button>
      }

      {
        cats.map((cat) => {
          return <p key={cat.id}> {cat.name}</p>

        })
      }

      {
        students.map((student) => {
          return <div key={student.id}>
            <p>{student.name}</p>
            <p>{student.cgpa}</p>
          </div>

        })


      }

      <button onClick={() => { setCount(count + 1) }}> Click me {count}</button>

      <p> {name} </p>
      <button onClick={() => { setName("Moew") }}> CLick to change Name</button>

      <UserDetails></UserDetails>

      <div className='px-5 py-5 mx-5 my-5'></div>

      <User></User>
      <MyForm></MyForm>
    </>
  )
}

export default App
