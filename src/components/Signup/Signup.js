import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {
   const { userCreateSignup, userprofile, loading } = useContext(AuthContext);
if (loading) {
	return <progress className='progress progress-error w-full'></progress>;
}
    const handleCreateUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.profile.value;
        const password = form.password.value;
        console.log(email , password);

       userCreateSignup(email, password)
					.then((result) => {
						const user = result.user;
                        console.log(user);
						updateUserDetails(name, photoURL);
						toast.success('Successfully SignUp!');
                        form.reset()
					})
            .catch((err) => console.error(err));
        	const updateUserDetails = (name, photoURL) => {
					userprofile(name, photoURL)
						.then(() => {
							console.log('Profile Updated');
						})
						.catch((error) => {
							console.error(error);
						});
				};
        
    }
    return (
			<div className='hero bg-gray-300'>
				<div className='hero-content flex-col'>
					<div className='text-center lg:text-left'>
						<h1 className='text-4xl font-bold italic'>Signup now</h1>
					</div>
					<form onSubmit={handleCreateUser} className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300'>
						<div className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									name='name'
									placeholder='name'
									className='input input-bordered'
								/>
							</div>
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
									<span className='label-text'>Photo URL</span>
								</label>
								<input
									type='text'
									name='profile'
									placeholder='PhotoURL'
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
									<Link href='#' className='label-text-alt link link-hover'>
										Forgot password?
									</Link>
								</label>
							</div>
							<div className='form-control mt-2'>
								<button className='btn btn-primary'>Sign Up</button>
							</div>
							<p>
								Already have an account?
								<Link className='underline' to='/login'>
									Login
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		);
};

export default Signup;