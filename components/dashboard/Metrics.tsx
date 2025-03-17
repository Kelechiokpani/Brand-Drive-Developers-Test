'use client'
import { Card, CardContent } from '@/components/ui/card';

const Metrics =()=> {
    const metrics = [
        { label: 'Total Users', value: '2,340' },
        { label: 'Active Sessions', value: '120' },
        { label: 'Sales Revenue', value: 'N54,200' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((item, index) => (
                <Card key={index} className="p-4 shadow-md bg-white">
                    <CardContent >
                        <p className="text-gray-500 mt-6 mb-6">{item.label}</p>
                        <h2 className="text-2xl font-bold">{item.value}</h2>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default Metrics