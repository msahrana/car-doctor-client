import { Link } from 'react-router-dom';
import login from '../../../public/assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

        
        const {createUser, googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error=> console.error(error))
    }

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password,photoURL)
        createUser(email, password)
        .then(result => {
            console.log(result.user)

            updateProfile(result.user, {
                displayName: name, photoURL: photoURL})
                .then(() => {
                    console.log('Profile updated')})
                .catch((error) => {
                    console.log(error)});

            // updateUser(name, 'https://i.ibb.co/V9m38TG/mr-sayed-rana.jpg')
            // .then(()=>{
            //     setUser((prev)=>{ 
            //         prev.displayName = name;
            //          prev.photoURL = 'https://i.ibb.co/V9m38TG/mr-sayed-rana.jpg';
            //          return {...prev};
            //     })
            // })
            
        })
        // .catch(error=> console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left w-1/2 mr-12">
                <img src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-5xl text-center text-[#FF3811] font-bold">Register Now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text" name='name'
                            placeholder="Your Name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text ">Photo URL</span>
                        </label>
                        <input
                            type="photoURL" name='photoURL'
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>
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
                        <input className="btn btn-secondary bg-[#FF3811]" type="submit" value="SignUp" />
                    </div>
                    <p className='text-center'>Or, Sign Up with</p>
                    <button onClick={handleGoogleLogin} type='button' className='btn btn-circle mx-auto text-xl text-[#FF3811]'>G</button>
                    <p className='my-4 text-center'>Already have an account? <Link className='text-[#FF3811] font-bold' to='/login'>Login</Link></p>
                </form>
            </div>
      </div>
    </div>
    );
};

export default Register;