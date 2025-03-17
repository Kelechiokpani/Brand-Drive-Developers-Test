'use client'
import SignupForm from "@/components/auth/signup";

export default function Home() {
  return (
    <div className=' bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('/assets/background.jpg')" }}>
      <SignupForm/>
    </div>
  );
}
