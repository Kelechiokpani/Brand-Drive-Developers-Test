'use client'
import { useAuthStore } from '@/stores/authStore';
import Metrics from "@/components/dashboard/Metrics";
import Sidebar from "@/components/layout/Sidebar";
import Sales_Chart from "@/components/dashboard/Sales-Chart";
import Growth_Chart from "@/components/dashboard/Growth-Chart";
import Charts from "@/components/dashboard/Charts";
import DataTable from "@/components/dashboard/Data-Table";
import {Button} from "@/components/ui/button";
import AutoLogoutTimer from "@/components/auth/logout";


const  Dashboard_View =()=> {
    const logout = useAuthStore((state) => state.logout);
    const { user } = useAuthStore();

    return (
        <div className="min-h-screen flex bg-gray-100">
                <Sidebar/>

            <main className="flex-1 p-4 space-y-6 ">
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-2xl font-bold">Welcome</h1>
                        <div>   {user?.email ? <span>{user?.email}</span> : <span>{user?.fullName}</span>}</div>
                        <AutoLogoutTimer/>

                    </div>

                    <Button onClick={logout} className="bg-[#1a4293] cursor-pointer text-white">Logout</Button>



                </div>


                <Metrics/>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Growth_Chart/>
                    <Sales_Chart/>
                </div>

                <Charts/>



                    <DataTable/>
            </main>
        </div>
);
}


export default Dashboard_View