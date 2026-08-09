
import "./../App.css";
function Box(props: any) {
    return (
        <div style={{ color: props.color.color }}>
            <p> Student Information</p>
            <span>Student Name: MR. Meow</span>
        </div >
    );
}

export default Box;