'use client'
import { create } from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    user: { email: string; fullName: string } | null;
    keepLoggedIn: boolean;
    login: (user: any, keep: boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
    let isAuthenticated = false;
    let user = null;
    let keepLoggedIn = false;

    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        const storedKeepLoggedIn = localStorage.getItem('keepLoggedIn');
        isAuthenticated = !!storedUser;
        user = storedUser ? JSON.parse(storedUser) : null;
        keepLoggedIn = storedKeepLoggedIn ? JSON.parse(storedKeepLoggedIn) : false;
    }

    return {
        isAuthenticated,
        user,
        keepLoggedIn,
        login: (user, keep) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('keepLoggedIn', JSON.stringify(keep));
            }
            set({ isAuthenticated: true, user, keepLoggedIn: keep });
        },
        logout: () => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user');
                localStorage.removeItem('keepLoggedIn');
            }
            set({ isAuthenticated: false, user: null, keepLoggedIn: false });
        },
    };
});
