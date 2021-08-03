import './user.css';
import {Link} from "react-router-dom";

const user = ({id, name, uname, cnumber, password, callback})=>{
    return (
        <>
        <div className = 'std'>
            
        <table>
            <tr>
                <td>
                    <p>Name: {name}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>User Name: {uname}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>Contact Number: {cnumber}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p>Password: {password}</p>
                </td>
            </tr>
            
            <Link to= {`/edit/${id}`}> Edit |</Link>
            <button onClick={()=>callback(id)}>Delete</button> 
            
        

        </table> 
            
        </div>

        

        </>
    );
}

export default user;