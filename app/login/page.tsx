'use client'


import LoginForm from "@/components/auth/login";

const Login = () => {

    return (
        <div className=' bg-cover bg-center min-h-screen' style={{backgroundImage: "url('/assets/background.jpg')"}}>
            <LoginForm/>
        </div>
    )
}


export default Login