

import axios from 'axios';
import Image from "next/image"
import Link from 'next/link';

interface ParamData {

    params: Promise<{ id: string }>;
};

interface TODO {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}




export default async function FindSpecificTask({ params }: ParamData) {

    const { id } = await params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo: TODO = response.data;
    return (
        <>
            <p> Task Id:{id}</p>
            {
                (todo && (<div key={todo.id}>

                    <p>userId: {todo.id}</p>
                    <p>Title: {todo.title}</p>
                    <p>{(todo.completed) ? "completed" : "not completed"}</p>

                </div >))
            }

            <Image src="/apple.webp" alt="Apple Logo" width={300} height={200} quality={5}></Image>
            <a href="../findtask">google me</a>

            <Link href="../findtask"> Find Task</Link>


        </>
    )
}