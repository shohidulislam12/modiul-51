import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Login = () => {
    const navigate=useNavigate()
    const {signInuser,signInWithGoogle}=useContext(AuthContext)
    const handleLogin=(e)=>{
            e.preventDefault()
            console.log('submit done');
            const email=e.target.email.value
            const password=e.target.password.value
            console.log(email);
            console.log(password);
            signInuser(email, password)
            .then((result) => {
              console.log(result.user);
              e.target.reset()
              navigate('/')
              })
              .catch((error) => {
                console.log(error.message);
              });
    }
    const handlegoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
            navigate('/');
           
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className="w-1/2 mx-auto">
                <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
             <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>if you are new user plese <Link className="text-green-600" to="/register">Register</Link></p>
      <button className="btn btn-ghost" onClick={handlegoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;