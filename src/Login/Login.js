import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import useTitle from '../hooks/useTitle';


const Login = () => {
	useTitle('login');

    const { userLogin, googleSignIn, loading } = useContext(AuthContext);
        const navigate = useNavigate();
		const location = useLocation();
		const path = location.state?.path?.pathname || '/';
	
	
    if (loading) {
			return <progress className='progress progress-error w-56'></progress>;
		}
	
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userLogin(email, password)
            .then(result => {
				const user = result.user;
				

			if (user.email) {
				const currentUser = {
					email: user.email,
				};
				console.log(currentUser);

				fetch('https://assignment11-server-side2.vercel.app/jwt', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(currentUser),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						localStorage.setItem('spa-token', data.token);
						navigate(path, { relative: true });
					});
			}

                // navigate(`${path}`);
                form.reset()
				toast.success('Successfully User Log In');
            })
        .catch(err => console.error(err))
    }
    const handleGoogleSignIn = () => {
			googleSignIn()
				.then((result) =>
				{
				const user = result.user;
				

			if (user.email) {
				const currentUser = {
					email: user.email,
				};

				fetch('https://assignment11-server-side2.vercel.app/jwt', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(currentUser),
				})
					.then((res) => res.json())
					.then((data) => {
						localStorage.setItem('spa-token', data.token);
					});
					navigate(path, { relative: true });
			}

                // navigate(`${from}`);
				toast.success('Successfully User Log In');
            })
        .catch(err => console.error(err))
				
				
				
		
	};
	
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
								<Link className='underline hover:text-pink-500' to='/signup'>
									 Sign Up
								</Link>
							</p>
							<button onClick={handleGoogleSignIn} className='btn btn-warning mb-2'>
								<span className='text-2xl'>
									<FcGoogle></FcGoogle>
								</span>
								<span className='px-2'>Google Sign In</span>
							</button>
							{/* <button onClick={githubSignIn} className='btn btn-warning'>
								<span className='text-2xl'>
									<BsGithub></BsGithub>
								</span>
								<span className='px-2'>Github Sign In</span>
							</button> */}
						</div>
					</form>
				</div>
			</div>
		);
};

export default Login;