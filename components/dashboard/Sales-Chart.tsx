'use client'
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const salesData = [
    { month: 'Jan', sales: 0 },
    { month: 'Feb', sales: 20 },
    { month: 'Mar', sales: 60 },
    { month: 'Apr', sales: 130 },
    { month: 'May', sales: 250 },
    { month: 'Jun', sales: 500 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


const Sales_Chart = ()=>{
    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="font-bold mb-2">User Sales Trend</h2>
            <ResponsiveContainer width="100%" height={250} className="mt-24">
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="sales" stroke="#8884d8"/>
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}


export default Sales_Chart