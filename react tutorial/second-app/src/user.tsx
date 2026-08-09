import { useState, useEffect } from "react"
import axios from "axios"
import './App.css'


interface User {
    id: number,
    name: string,
    username: string
}
export default function User() {
    const [user, setUser] = useState<User>({})

    useEffect(() => {

        const userId = 1;
        const getUser = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUser(response.data);
        }

        getUser()
    }, [])
    return (
        <>
            <div key={user.id} className="bg-emerald-300">
                <p>
                    {user.name}
                </p>

                <p>
                    {user.username}
                </p>
            </div>
        </>
    )
}