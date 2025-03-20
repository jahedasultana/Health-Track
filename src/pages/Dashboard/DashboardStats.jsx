import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", users: 400 },
    { name: "Feb", users: 600 },
    { name: "Mar", users: 800 },
    { name: "Apr", users: 1200 },
    { name: "May", users: 1500 },
    { name: "Jun", users: 1800 }
];

const DashboardStats = () => {
    return (
        <div className="w-full p-4 space-y-6">
            <div className="p-4 text-center bg-secondary/50 border rounded-lg shadow-md">
                <h2 className="text-xl font-bold">Total Users</h2>
                <p className="text-3xl font-semibold">1,800</p>
            </div>
            
            <div className="p-4 border rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">User Growth Chart</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DashboardStats;
