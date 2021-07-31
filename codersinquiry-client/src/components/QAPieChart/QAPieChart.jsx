import React from 'react';
import './QAPieChart.css';
import { PieChart, Pie, Sector, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Questions', value: 142 },
    { name: 'Answers', value: 300 },
    { name: 'Articles', value: 26 },
    { name: 'Users', value: 566 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const QAPieChart = () => {
    return (
        <div className='qaPieChart'>
            <PieChart width={325} height={325} align='center' className='qaPieChart__chart'>
                <Pie data={data01} cx='50%' cy='50%' outerRadius={100} fill='#8884d8' label>
                    {data01.map((entry, index) => (
                        <Cell fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend align='center' />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default QAPieChart;
