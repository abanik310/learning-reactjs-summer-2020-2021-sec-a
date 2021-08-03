import './user.css';
import {Link} from "react-router-dom";

const user = ({id, name, dept, callback})=>{
    return (
        <>
        <div className = 'std'>
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Dept: {dept}</p>
            
            <Link to= {`/edit/${id}`}> Edit |</Link>
            <button onClick={()=>callback(id)}>Delete</button> 
            
        </div>

        

        </>
    );
}

export default user;