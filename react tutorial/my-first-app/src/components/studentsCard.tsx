import type { student } from "../App";




function StudentsCard(props: { stu: student }) {
    return (
        <div>
            <p>Name: {props.stu.name}</p>
            <p>Id:{props.stu.id}</p>
            <p>Cgpa:{props.stu.cgpa}</p>
        </div>
    );
}

export default StudentsCard;