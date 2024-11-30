
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash , FaGoogle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {

    const { loginUser } = useContext(AuthContext)
   
    const [showPassword , setShowPassword] = useState(false)
   
    const handleLogIn =(e)=>{
        e.preventDefault()

        const form = new FormData(e.target)

        const email = form.get("email")
        const password = form.get("password")

       
      

        loginUser(email,password)
        .then(result=>{
           
           console.log(result.user)
            
           Swal.fire(`login successfully!`);

        //    update last log in time 
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`http://localhost:5001/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('sign in info updated in db', data)
                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    // const handleGoogleSignIn=()=>{
    //     signInWithGoogle()
    //     .then(result => {
    //         const user = result.user
    //         setUser(user)
            
    //         toast.success(`Congratulation! ${user.displayName} Login Successful`)
    //     })
    //     .catch((err) => {
    //        console.log(err)
          
    //       });
    // }

    return (
        <div>
             <div>
                <h2 className="text-4xl my-10 text-center text-green-600  font-semibold animate__slideInLeft animate__animated">Login your account</h2>
                <form onSubmit={handleLogIn}  className=" md:w-3/4 lg:w-1/3 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-600">Email address</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-green-600">Password</span>
                        </label>
                        <input type={showPassword?"text":"password"} required name="password" placeholder="Password" className="input input-bordered" />

                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-5 top-[52px] text-xl text-green-600'>
                        {
                            showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                        }
                    </span> 
                     
                        <label className="label">
                            < Link  className="label-text-alt link link-hover text-green-600">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">Login</button>
                    </div>
                </form>

             
               <div className='md:w-3/4 lg:w-1/3 mx-auto mt-5'>
               <button
                // onClick={handleGoogleSignIn}
                className="w-full btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">
                    <FaGoogle ></FaGoogle>
                    Log In with Google
                </button>
               </div>
               


                <p className="text-center mt-4 textarea-sm">Do not have an account <Link className="text-green-600 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;