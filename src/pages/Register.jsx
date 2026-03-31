import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
email:"",
password:"",
role:"student"
});

function handleChange(e){

setForm({
...form,
[e.target.name]:e.target.value
});

}

function handleRegister(e){

e.preventDefault();

const users = JSON.parse(localStorage.getItem("users")) || [];

const userExists = users.find(u => u.email === form.email);

if(userExists){

alert("User already exists");
return;

}

users.push(form);

localStorage.setItem("users",JSON.stringify(users));

alert("Registration successful");

navigate("/login");

}

return(

<div className="login-page">

<div className="login-brand">
<h1>LMS Portal</h1>
<p>Create your account</p>
</div>

<form className="login-modal" onSubmit={handleRegister}>

<h2>Register</h2>

<input
type="text"
name="name"
placeholder="Full Name"
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email Address"
onChange={handleChange}
required
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
required
/>

<select name="role" onChange={handleChange}>

<option value="student">Student</option>
<option value="admin">Admin</option>

</select>

<button className="btn-primary">
Register
</button>

<p style={{textAlign:"center"}}>

Already have an account?

<span
style={{color:"#2563eb",cursor:"pointer"}}
onClick={()=>navigate("/login")}
>
 Login
</span>

</p>

</form>

</div>

)

}

export default Register;