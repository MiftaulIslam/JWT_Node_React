import { useState } from "react";
import {Link} from "react-router-dom"
import { validateEmail } from "../../utils/validation";
const ForgotPassword = () => {
    
    const [formData, setFormData] = useState({ email: '' });
    const [errors, setErrors] = useState({ email: '' });
    const [touched, setTouched] = useState({ email: false });
  
  const handleChange=(e)=>{
     setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleBlur=(e) =>{
      const { name } = e.target;
      setTouched({ ...touched, [name]: true });
  
      if (name === 'email') {
        setErrors({ ...errors, email: validateEmail(formData.email) });
      }
  }
  const handleSubmit= (e)=>{
  e.preventDefault()
  
  const emailError = validateEmail(formData.email)
  setErrors({email:emailError})
  if(!emailError){
  console.log(formData)}
  }
  
  return (
    <>
<div className=" flex h-[100vh] justify-center items-center ">
<div className="form_group rounded-lg shadow-md overflow-hidden m-auto flex flex-col flex-wrap justify-center items-center w-[550px] py-4 bg-[#FF416C] bg-gradient-to-r from-red-500 to-pink-500">
      <div className="overlay flex flex-col justify-center items-center text-center text-[#FFFFFF] h-[380px]  w-4/5 gap-2 px-2">
            <form onSubmit={handleSubmit} action="#" className="flex gap-3 items-center justify-center flex-col px-4 h-full w-full text-center">
                <h1>Forgot Password</h1>
                
                {/* <!-- Email field --> */}
                <input type="text" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className="w-full color-dark inline-block anchor  text-[#000] text-sm py-3 px-7 rounded bg-opacity-0 border-2 border-[#FFFFFF]" placeholder="Email" />
                {errors.email && <span className="text-[#FFFFFF] text-sm">{errors.email}</span>}
                <button type="submit" className='text-[#FFFFFF] uppercase font-bold inline-block text-sm py-3 px-11 rounded-2xl bg-opacity-0 border-2 border-[#FFFFFF]'>Reset Password</button>
            </form>
		</div>
        
        <span className="text-[#FFF]">Remember the pass? return to the  <Link className="font-bold text-[#fff] text-sm bg-transparent underline" to="/login">Login</Link> page</span>
      </div>
    </div>
    </>

  )
}

export default ForgotPassword