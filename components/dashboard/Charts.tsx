'use client'
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell, } from 'recharts';


const categoryData = [
    { name: 'Electronics', value: 800 },
    { name: 'Clothing', value: 300 },
    { name: 'Furniture', value: 600 },
    { name: 'Groceries', value: 350 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#9333EA'];

const  Charts =()=> {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 shadow-md rounded-lg lg:col-span-2">
                <h2 className="font-bold mb-2">User Category Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={categoryData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                            {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Charts