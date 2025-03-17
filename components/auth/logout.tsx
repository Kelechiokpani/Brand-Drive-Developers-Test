'use client'
import { useEffect, useState } from "react";
import {useAuthStore} from "@/stores/authStore";

const AutoLogoutTimer = () => {
    const { keepLoggedIn, logout } = useAuthStore();
    const [timeLeft, setTimeLeft] = useState<number>(60); // 60 seconds countdown

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!keepLoggedIn) {
            interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        logout(); // Logout when time reaches zero
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000); // Decrease every second
        }

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [keepLoggedIn, logout]);

    if (keepLoggedIn) return null; // Don't show timer if "Keep me logged in" is checked

    return (
        <p className="fixed mt-3 right-4 bg-gray-200 text-black  px-4 py-2 rounded-lg shadow-lg">
            Auto logout in {timeLeft} second{timeLeft !== 1 ? 's' : ''}
        </p>
    );
};

export default AutoLogoutTimer;



// // hooks/useAutoLogout.ts
// import { useEffect } from 'react';
// import {useAuthStore} from "@/stores/authStore";
//
// export const useAutoLogout = () => {
//     const { keepLoggedIn, logout, isAuthenticated } = useAuthStore();
//
//     useEffect(() => {
//         let timeout: NodeJS.Timeout;
//
//         if (isAuthenticated && !keepLoggedIn) {
//             timeout = setTimeout(() => {
//                 logout();
//                 alert('Session expired. You have been logged out due to inactivity.');
//             }, 60000); // 1 minute
//         }
//
//         return () => clearTimeout(timeout);
//     }, [keepLoggedIn, isAuthenticated, logout]);
// };
