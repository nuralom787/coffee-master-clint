import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { use } from 'react';

const Signin = () => {
    const { user, signinUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignin = e => {
        e.preventDefault();

        // Get Data.
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");


        // Signin Function.
        signinUser(email, password)
            .then(result => {
                const userData = { email, lastSignIn: result.user?.metadata?.lastSignInTime };

                fetch(`https://coffee-store-server-jade-six.vercel.app/users`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })

                console.log(result.user);
                // navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error);
            })
    };



    return (
        <div className='bg-gray-300 font-poppins'>
            <div className='py-32'>
                <form onSubmit={handleSignin} className="card-body bg-white p-10 w-full md:w-2/5 mx-auto">
                    <h1 className='font-semibold text-4xl text-[#403F3F] mb-5 pb-5 border-b border-gray-300 text-center'>Signin Your Account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl text-[#403F3F]">Email address</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email address" className="bg-gray-300 p-4 outline-none rounded-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl text-[#403F3F]">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="bg-gray-300 p-4 outline-none rounded-md" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline font-semibold text-xl" type="submit" value="Signin" />
                    </div>
                    <div className='text-center my-6'>
                        <p className='font-semibold text-base text-[#706F6F]'>Don't Have An Account ?  <Link to="/signup" className='text-[#F75B5F]'>SignUp</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;