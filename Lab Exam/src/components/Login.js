
import {Link} from "react-router-dom";

const login = ({uname, password, callback})=>{
    return (
        <>
        <h3>Login Page</h3>
        <form>
            <table>
                <tr>
                    <td>User name: <input type="text" name="uname"></input></td>
            </tr>
            <tr>
                    <td>Password: <input type="password" name="password"></input></td><br/><br/><br/>
            </tr>
            <tr><input type="submit" value="Login" /></tr>
            </table>
        </form>

        </>
    );
}

export default login;