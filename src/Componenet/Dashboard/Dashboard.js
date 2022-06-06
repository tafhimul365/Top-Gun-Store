import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar, Pie, PieChart, AreaChart, Area } from 'recharts';
import data from '../../data.json'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-20 wrapper'>
            <div>

                <LineChart width={500} height={400} data={data}>
                    <Line dataKey={"revenue"}></Line>
                    <XAxis dataKey={"month"} />
                    <YAxis />
                </LineChart>
                <h1 className='text-3xl text-red-900 font-bold p-5'>Line Chart Example</h1>
            </div>

            <div>

                <BarChart width={500} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={"income"} fill="#8884d8" />
                    <Bar dataKey={"sell"} fill="#82ca9d" />
                </BarChart>
                <h1 className='text-3xl text-red-900 font-bold p-5'>Bar Chart Example</h1>
            </div>

            <div>

                <PieChart width={500} height={400}>
                    <Pie data={data} dataKey={"sell"} nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
                    <Pie data={data} dataKey={"revenue"} nameKey="name" cx="50%" cy="50%" innerRadius={100} outerRadius={130} fill="#82ca9d" label />
                </PieChart>
                <h1 className='text-3xl text-red-900 font-bold p-5'>Pie Chart Example</h1>
            </div>
            <div>

                <AreaChart width={600} height={400} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey={"month"} />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey={"sell"} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey={"income"} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
                <h1 className='text-3xl text-red-900 font-bold p-5'>Area Chart Example</h1>
            </div>
        </div >
    );
};

export default Dashboard;