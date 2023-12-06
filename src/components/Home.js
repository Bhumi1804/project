import React,{useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Home.css";

function Home()
{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    function handleSubmit(event)
    {
        event.preventDefault();
    }
    return(
        <div className="login">
<form onSubmit={handleSubmit}>
    <table>
        <tr>
            <label>Name:</label>
            <input type="text" placeholder="Enter you name" />
        </tr>
        <tr>
            <label>Email:</label>
            <input type="email" placeholder="Enter the mail" onChange={e => setEmail(e.target.value)}/>
        </tr>
        <tr>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
        </tr>
        <tr>
            <label>RE-type Password</label>
            <input type="password" placeholder="Re-type the password" />
        </tr>
        <tr>
            <td></td>
            <td><button>Submit</button></td>
            <td><button>Reset</button></td>
        </tr>
    </table>
</form>
        </div>
    )
    
}
export default Home;
