import { useEffect } from "react"
import { getRequest } from './../../utils/httprequests';
import {  useNavigate, useParams } from 'react-router-dom';
const FakeUsers = () => {
const {token} = useParams();
const navigate = useNavigate()
useEffect(() => {
  console.log(token)
  getRequest('protect').then(res => 
    {if(!res.auth || !res.token || token != res.token) {navigate('/login')}}).catch((err)=>console.error(err))
}, [navigate, token])

  return (
    <div>FakeUsers</div>
  )
}

export default FakeUsers