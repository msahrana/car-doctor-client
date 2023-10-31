import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../public/assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';

const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error=> console.error(error))
    }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signIn(email, password)
        .then(result => {
            console.log(result.user)
            const users = {email}
            axios.post('http://localhost:5000/jwt', users, {withCredentials: true})
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    navigate(location?.state ? location?.state : '/')
                }
            })
            .catch()
        })
        .catch(error=> console.error(error))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-1/2 mr-12">
                <img src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl text-center text-[#FF3811] font-bold">Login Now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email" name='email'
                            placeholder="Email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password" name='password'
                            placeholder="Password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-secondary bg-[#FF3811]" type="submit" value="Login" />
                    </div>
                    <p className='text-center'>Or, Sign In with</p>
                    <button onClick={handleGoogleLogin} type='button' className='btn btn-circle text-xl mx-auto text-[#FF3811]'>G</button>
                    <p className='my-4 text-center'>New to Car Doctor? <Link className='text-[#FF3811] font-bold' to='/register'>Sign Up</Link></p>
                </form>
            </div>
      </div>
    </div>
  );
};

export default Login;
