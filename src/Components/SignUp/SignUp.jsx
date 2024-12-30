import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);


    const handleSignUp = e => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const photoURL = formData.get("photoURL");
        const email = formData.get("email");
        const password = formData.get("password");

        console.log(name, photoURL, email, password);


        // Call Create User Function.
        createUser(email, password)
            .then(result => {
                // result.user.displayName = name;
                // result.user.photoURL = photoURL;
                console.log(result.user);
                const createdAt = result.user?.metadata?.creationTime;
                const user = { email, createdAt };

                // Store Data In DB.
                fetch("https://coffee-store-server-jade-six.vercel.app/users", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className='bg-gray-300 font-poppins'>
            <div className='py-24'>
                <form onSubmit={handleSignUp} className="card-body bg-white p-10 w-full md:w-3/6 mx-auto rounded-md">
                    <h1 className='font-semibold text-4xl text-[#403F3F] mb-5 pb-5 border-b border-gray-300 text-center'>SignUp Your Account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl text-[#403F3F]">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your full name" className="bg-gray-300 p-4 outline-none rounded-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold text-xl text-[#403F3F]">Photo URL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="Enter your Photo URL" className="bg-gray-300 p-4 outline-none rounded-md" required />
                    </div>
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
                        <label className="label justify-start gap-2 mt-4 text-sm font-semibold">
                            <input type="checkbox" name="trams&condition" id="" />
                            Accept Our Trams & Condition.
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline font-semibold text-xl">SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;