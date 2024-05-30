import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { validateEmail, validatePassword } from "../../utils/validation";
import { postRequest } from "../../utils/httprequests";
const Signup = () => {
    const navigate = useNavigate()
const [formData, setFormData] = useState({username:'', email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });

const handleChange=(e)=>{
   setFormData({...formData,[e.target.name]:e.target.value})
}
const handleBlur=(e) =>{
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(formData.email) });
    } else if (name === 'password') {
      setErrors({ ...errors, password: validatePassword(formData.password) });
    }
}
const handleSubmit= (e)=>{
e.preventDefault()

const emailError = validateEmail(formData.email)
const passwordError = validatePassword(formData.password)
setErrors({email:emailError, password:passwordError})
if(!emailError && !passwordError && formData.username){


  postRequest('auth/register', formData).then(res => {
  navigate('/login')  
    console.log(res)
  }).catch(err => console.error(err))

console.log(formData)}
}

  return (
    <div className=" flex h-[100vh] justify-center items-center ">
    <div className="form_group bg-[#fff] rounded-lg shadow-md overflow-hidden m-auto flex flex-col sm:flex-row  flex-wrap justify-center items-center w-[768px]">
      <div className="h-[480px] sm:min-w-[50%] max-w-[50%] min-w-[100%] form-container sign-in-container">
        <form className='bg-[#FFFFFF] flex justify-center items-center flex-col px-4 h-full text-center' onSubmit={handleSubmit} action="#">
          <h1>Signup</h1>

          {/* Username field */}
          <input type="text" name="username" value={formData.username} onChange={handleChange}  className='bg-[#eee] border-0 p-3 my-2 outline-0 rounded-md w-full' placeholder="Username" />
          {!formData.username && touched.email &&<span className="text-red-500 text-sm">Username field is required</span>}
          {/* Email field */}
          <input type="text" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className='bg-[#eee] border-0 p-3 my-2 outline-0 rounded-md w-full' placeholder="Email" />
          {errors.email && touched.email &&<span className="text-red-500 text-sm">{errors.email}</span>}
           
          {/* Password field */}
          <input name="password" value={formData.password} onChange={handleChange} onBlur={handleBlur} className='bg-[#eee] border-0 p-3 my-2 outline-0 rounded-md w-full' type="password" placeholder="Password" />
          {errors.password && touched.password && <span className="text-red-500 text-sm">{errors.password}</span>}
           
          <button type="submit" className='rounded-xl font-bold inline-block border-2 border-[#FF4B2B] bg-[#FF4B2B] text-sm text-[#FFFFFF] py-3 px-11 uppercase transition-transform duration-80 ease-in tracking-[1px]'>Signup</button>
        </form>
      </div>
      <div className="overlay-container w-full sm:w-2/4 h-[480px]">
        <div className="overlay flex flex-col justify-center text-center items-center  text-[#FFFFFF] h-full gap-2 px-2 bg-gradient-to-r from-red-500 to-pink-500">
          <h1>Already have an account?</h1>
          <p>To keep connected with us please login with your personal info</p>
          <Link  to="/login" className="anchor text-[#FFFFFF] tracking-[1px] font-bold inline-block text-sm py-3 px-11 rounded-2xl bg-opacity-0 border-2 border-[#FFFFFF]">Login</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup