
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Signup = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            
        })
        .catch(err =>console.error(err))
    }
    return (
        <div className="hero w-full  my-20">
            <div className="hero-content  grid  md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left w-3/5">
                    
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-16">
                <h1 className="text-5xl font-bold text-center">Sing Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered"required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                           <input className="btn btn-primary"  type="submit" value="Sing Up" />
                            
                        </div>
                    </form>
                    <p className='text-center'>All Ready Have A Account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>

    );
};

export default Signup;