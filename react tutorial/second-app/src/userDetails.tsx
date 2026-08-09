import { use, useEffect, useState } from "react";
import axios from "axios";
import './App.css'

interface User {
    id: number,
    name: string,
    username: string
}
export default function UserDetails() {

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const getUsers = async () => {

            try {
                setLoading(true)
                const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
                setLoading(false)
            }
            catch {
                setLoading(false)
                setError(true)

            }

        }

        getUsers();
    }, [])

    {
        if (loading) {
            return (
                <>
                    <p className="bg-yellow-300 font-bold font-black"> Data is loading</p>
                </>
            )
        }

        if (error) {
            return (
                <>
                    <p className="bg-red-500 font-white font-bold"> Error Occured</p>
                </>
            )
        }

        return (
            <>
                {
                    users.map((user) => (
                        <div key={user.id} className="userCard bg-amber-300">
                            <p>{user.name}</p>
                            <p>{user.username}</p>
                        </div>
                    ))
                }
            </>
        )
    }

}