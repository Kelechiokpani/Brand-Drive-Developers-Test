"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    { name: "Jan", growth: 10,  },
    { name: "Feb", growth: 30,  },
    { name: "Mar", growth: 25, },
    { name: "Apr", growth: 20,  },
    { name: "May", growth: 15, },
    { name: "Jun", growth: 35,  },
    { name: "Jul", growth: 28, },
    { name: "Aug", growth: 30,  },
    { name: "Sep", growth: 27,  },
    { name: "Oct", growth: 32,  },
    { name: "Nov", growth: 38,  },
    { name: "Dec", growth: 25,  },
];

const Growth_Chart =()=> {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="font-bold mb-4">User Growth</h2>
            <ResponsiveContainer width="100%" height={380}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="growth" stackId="a" fill="#1a4293" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


export default Growth_Chart