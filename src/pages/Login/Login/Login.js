import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault()
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
        })
        .then(error =>console.log(error))


    }
   

    
    return (
        <div className="hero w-full  my-20">
            <div className="hero-content  grid  md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/5">
                    
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-16">
                <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                           <input className="btn btn-primary"  type="submit" value="Login" />
                            
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car? <Link className='text-orange-600 font-bold' to='/signup'>Sing Up</Link> </p>
                </div>
            </div>
        </div>

    )
};

export default Login;