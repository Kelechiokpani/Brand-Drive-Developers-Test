'use client'
import Dashboard_View from "@/components/dashboard/Dashboard-view";
import {ProtectedRoute} from "@/middleware/middleware";

const Dashboard = () => {

    return (
        <ProtectedRoute>
            <Dashboard_View/>
        </ProtectedRoute>
    )
}


export default Dashboard