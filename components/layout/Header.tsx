'use client'
import { Bell, UserCircle } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full flex justify-between items-center p-4 bg-white shadow-sm">
            <h1 className="text-xl font-bold">Overview</h1>
            <div className="flex items-center gap-4">
                <Bell className="w-6 h-6" />
                <UserCircle className="w-8 h-8" />
            </div>
        </header>
    );
}
