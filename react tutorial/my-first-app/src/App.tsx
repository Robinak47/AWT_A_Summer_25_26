import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import SimpleLayout from "./components/simpleLayout";
import Box from "./components/box";
import StudentsCard from "./components/studentsCard";



export type student = {
  id: string,
  name: string,
  cgpa: number
}
const stu1 = {
  id: "123",
  name: "meow",
  cgpa: 3.1415
}
function App() {


  return <>
    <Header></Header>
    <h1>
      Hello world
    </h1>
    <Box color={{ color: "magenta" }} />
    <Footer></Footer>
    <StudentsCard
      stu={{
        id: "123",
        name: "meow",
        cgpa: 3.14
      }}
    />



    <SimpleLayout></SimpleLayout>


  </>;

}

export default App;
