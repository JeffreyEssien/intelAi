"use client"

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  x: number;
  y: number;
}

const createWavyData = (count: number, frequency: number, amplitude: number, phase: number): DataPoint[] => {
  const data: DataPoint[] = [];

  for (let i = 0; i < count; i++) {
    const x = i;
    const y = Math.sin((frequency * Math.PI * x) / 180 + phase) * amplitude;
    data.push({ x, y });
  }

  return data;
};

export default function CommunityIntelAiActivity() {
  const data = createWavyData(12, 30, 5, 0); // Adjust parameters as needed

  return (
    <div className='flex flex-row items-center w-full justify-between gap-3'>
      <div className='bg-[#181818] rounded-2xl px-5 w-full' style={{ border: '3px solid', borderImageSource: 'linear-gradient(85.97deg, #0C1F00 0.39%, #362C4D 39.81%, #03FFA3 62.53%, #222222 77.37%, #222222 93.14%)' }}>
        <h2 className="text-[#969696] mb-5 mt-3">Intel AI Activity</h2>
        <div className="w-full" style={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0.39%" stopColor="#0C1F00" />
                  <stop offset="39.81%" stopColor="#362C4D" />
                  <stop offset="62.53%" stopColor="#03FFA3" />
                  <stop offset="77.37%" stopColor="#222222" />
                  <stop offset="93.14%" stopColor="#222222" />
                </linearGradient>
              </defs>
              
              <Tooltip />
              <Line type="monotone" dataKey="y" stroke="url(#colorUv)" strokeWidth={3} dot={false} />
             
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}