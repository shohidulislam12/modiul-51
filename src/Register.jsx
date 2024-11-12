import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Register = () => {
    const navigate=useNavigate()
    const {creatuser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        console.log('Register done');
        const email=e.target.email.value
        const password=e.target.password.value
        const name=e.target.name.value
        console.log(email);
        console.log(password);
        console.log(name);
        creatuser(email, password)
        .then((result) => {
           console.log(result);
           e.target.reset()
           navigate('/')
          })
          .catch((error) => {
 
            
            console.log(error.message);
           
            
          });
}

    return (
        <div className="w-1/2 mx-auto">
        <div className="text-center lg:text-left">
<h1 className="text-5xl font-bold">Register now!</h1>

</div>
     <form onSubmit={handleRegister} className="card-body">
<div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input name='name' type="text" placeholder="name" className="input input-bordered" required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input name='email' type="email" placeholder="email" className="input input-bordered" required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input name='password' type="password" placeholder="password" className="input input-bordered" required />
  <label className="label">
    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
  </label>
</div>
<div className="form-control mt-6">
  <button className="btn btn-primary">Register</button>
</div>
</form>
<p>Already have an account? plese <Link className="text-green-600" to="/login">Login</Link></p>
<p className="btn btn-ghost">google</p>
</div>
    );
};

export default Register;