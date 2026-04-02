import axios from 'axios'

export async function register({username , email , password}){
  try {

     const response = await axios.post('http://localhost:3000/api/auth/register',{
    username , email , password
   },{withCredentials : true})

  return  response.data
    
  } catch (error) {
    console.error(error)
  }
}

export async function Login({ email, password}){
   try {

     const response = await axios.post('/http://localhost:3000/api/auth/login',{
        email , password
    },{withCredentials: true})

    return response.data
    
   } catch (error) {

    console.error(error)
    
   }
}

export async function Logout(){
   try {
     const response = await axios.get('http://localhost:3000/api/auth/logout',{
        withCredentials :true
    })

    return response.data

   } catch (error) {
    console.error(error)
   }
}

export async function getMe(){
    try {
        const response = await axios.get('http://localhost:3000/api/auth/get-me',{
        withCredentials : true
    })

    return response.data
    } catch (error) {
        console.error(error)
        
    }
}

