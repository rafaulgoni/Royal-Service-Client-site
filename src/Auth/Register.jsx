import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
// import 'animate.css';
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../Providers/AuthProvider';
// import { Helmet } from 'react-helmet-async';

const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState("")

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword);

        if (password.length < 6) {
            setError('password must be 6 characters')
            return
        }
        if (password !== confirmPassword) {
            setError("password didn't match")
            return
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{2,}$/.test(password)) {
            setError('password must use in one uppercase and lowercase')
            return
        }
        setError('')

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile(name, photo)
                    .then(() => {
                        e.target.reset()
                        toast.success('Successfully create user!')
                        navigate('/')
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            {/* <Helmet>
                <title>Luxe Havens | Register</title>
            </Helmet> */}
            <div className="hero bg-base-200 container mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center">
                        <img src={'https://i.ibb.co/p6q5GD1/college-voting.png'} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm bg-base-100 animate__animated animate__backInUp">
                        <form onSubmit={handleRegister} className="card-body">
                            <h1 className="text-4xl font-bold animate__animated animate__backInLeft">Create an account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <samp className="absolute top-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </samp>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>

                                <div className="relative">
                                    <input type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <samp className="absolute top-4 right-3" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {
                                            showConfirmPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </samp>
                                </div>
                                {
                                    error && <small className="text-red-800">{error}</small>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#F9A51A] font-bold">Register</button>
                            </div>
                        </form>
                        <div className="text-center p-3">
                            <p>Already have an account? <Link to='/login'><u className="font-bold text-[#F9A51A]">Login</u></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;