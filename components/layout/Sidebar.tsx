'use client'
import { Home, BookOpen, Settings, LifeBuoy } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Dashboard", icon: Home, href: "#", active: true },
    { name: "Report", icon: BookOpen, href: "#" },
];

const Sidebar =()=> {
    return (
        <aside className="w-64 min-h-screen bg-white border-r hidden md:block">
            <div className="p-6 font-bold text-xl">Brand - Drive</div>
            <nav className="space-y-2 px-4 text-sm">
                {navItems.map(({ name, icon: Icon, href, active }, idx) => (
                    <a key={idx} href={href} className={cn(
                        "flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100",
                        active && "bg-blue-100 text-blue-700"
                    )}>
                        <Icon className="w-5 h-5 text-[#1a4293]" />
                        <span>{name}</span>
                    </a>
                ))}
            </nav>
            <div className="mt-auto p-4 space-y-2 text-sm">
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"><LifeBuoy className="text-[#1a4293]"/> <span>Support</span></a>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"><Settings className="text-[#1a4293]" /> <span>Settings</span></a>
            </div>
        </aside>
    );
}


export default Sidebar