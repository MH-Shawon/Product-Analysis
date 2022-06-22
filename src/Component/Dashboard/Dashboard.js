import React from 'react';
import './DashBoard.css'
import { Legend, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

const DashBoard = () => {

    const data01 = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];

      const data = [
        {
          "subject": "Math",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "Chinese",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "English",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Geography",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "History",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ];

    return (        
        <div className='chart'>
            <h2>Chart-View</h2>
            <div className='chartWrapper'>
            <div>
                <h4>Pie-chart</h4>
            <PieChart width={730} height={270}>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label></Pie>
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