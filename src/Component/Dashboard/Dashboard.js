import React from 'react';
import './DashBoard.css'
import { Legend, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

const DashBoard = () => {

    

      const data =[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (        
        <div className='chart'>
            <h2>Chart-View</h2>
            <div className='chartWrapper'>
            <div>
                <h4>Pie-chart</h4>
            <PieChart width={730} height={270}>
                <Pie data={data} dataKey="month" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
                <Pie data={data} dataKey="sell" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label></Pie>
            </PieChart>
            </div>

            <div>
                <h3>Radar-Chart</h3>
                <RadarChart outerRadius={90} width={730} height={250} data={data}>
                <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
                </RadarChart>
            </div>
            </div>
        </div>
    );
};

export default DashBoard;      