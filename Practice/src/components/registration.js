
const registration = ({id, name, dept, callback})=>{
    return (
        <>
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

        </>
    );
}

export default user;