import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

function handleLogin(e){

e.preventDefault();

const users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(
u => u.email === email && u.password === password
);

if(!user){

alert("Invalid credentials");
return;

}

if(user.role === "admin"){
navigate("/admin/dashboard");
}else{
navigate("/student/dashboard");
}

}

return(

<div className="login-page">

<div className="login-brand">
<h1>LMS Portal</h1>
<p>Smart Learning & Assessment Platform</p>
</div>

<form className="login-modal" onSubmit={handleLogin}>

<h2>Welcome...</h2>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button className="btn-primary">
Login
</button>

<p style={{textAlign:"center",marginTop:"10px"}}>

Don't have an account?

<span
style={{color:"#2563eb",cursor:"pointer",fontWeight:"600"}}
onClick={()=>navigate("/register")}
>
 Register
</span>

</p>

</form>

</div>

)

}

export default Login;