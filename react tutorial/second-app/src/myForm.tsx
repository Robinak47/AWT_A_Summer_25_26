import "./App.css"
import { useState } from "react"

export default function MyForm() {

    const [userId, setUserId] = useState("")
    return (
        <>

            <form className="bg-amber-100">
                <label>User Id</label>
                <input className="font-black" type="text" id="userId" name="userId" value={userId} onChange={(e) => {
                    setUserId(e.target.value)
                }} /><br></br><br></br>

                <label>Post Id</label>
                <input type="text" id="postId" name="postId" value="" /><br></br><br></br>

                <label>Title</label>
                <input type="text" id="title" name="title" value="" /><br></br><br></br>

                <label>body</label>
                <input type="text" id="bodyText" name="bodyText" value="" /><br></br><br></br>

                <input type="submit" value="submit"></input>
            </form>
        </>
    )
}