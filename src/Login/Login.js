import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';



const Login = () => {


    const { userLogin, googleSignIn } = useContext(AuthContext);
    
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
        .catch(err => console.error(err))
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
        }).catch(err => console.error(err))
    }

   
    return (
			<div className='hero  bg-gray-300'>
				<div className='hero-content flex-col'>
					<div className='text-center lg:text-left'>
						<h1 className='text-4xl font-bold italic'>Login now</h1>
					</div>
					<form
						onSubmit={handleLogin}
						className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300'
					>
						<div className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='email'
									name='email'
									placeholder='email'
									className='input input-bordered'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='password'
									name='password'
									placeholder='password'
									className='input input-bordered'
								/>
								<label className='label'>
									<Link to='' className='label-text-alt link link-hover'>
										Forgot password?
									</Link>
								</label>
							</div>
							<div className='form-control mt-2'>
								<button className='btn'>Login</button>
							</div>
							<p>
								Please Sign Up!!
								<Link className='underline' to='/signup'>
									Sign Up
								</Link>
							</p>
                                <button onClick={handleGoogleSignIn} className='btn btn-warning'>Google</button>
                                <button className='btn'>Google</button>
						</div>
                   
					</form>
				</div>
			</div>
		);
};

export default Login;