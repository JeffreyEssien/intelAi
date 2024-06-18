"use client"


import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CommunityEscalationReports() {
  const data = [
    { name: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Thur', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className='w-full my-5'>
      <div className='w-full h-auto bg-[#181818] flex flex-col py-2 rounded-[20px] px-6'>
        <div className='text-[#969696] flex flex-row items-center justify-between my-2'>
          <p className=''>% Escallation reports</p>
          <div className='w-auto flex flex-row items-center gap-3 mr-10'>
            <div className='flex flex-row items-center gap-1'>
              <div className='w-[8px] h-[8px] rounded-full bg-[#0EA5E9]'></div>
              <p className='text-[#969696]'>Discord</p>
            </div>

            <div className='flex flex-row items-center gap-1'>
              <div className='w-[8px] h-[8px] rounded-full bg-[#2DB253]'></div>
              <p className='text-[#969696]'>Twitter</p>
            </div>

            <div className='flex flex-row items-center gap-1'>
              <div className='w-[8px] h-[8px] rounded-full bg-[#6043A3]'></div>
              <p className='text-[#969696]'>Telegram</p>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-between'>
          <div className='w-[25%]'>
            <p className='text-[40px] mt-5 mb-2'>40</p>
            <p className='text-[#969696] text-[14px]'>Total escallations across all platforms</p>
          </div>
          <ResponsiveContainer width="75%" height={200} className="bg-[#1C1C1C]">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#0EA5E9" />
              <Bar dataKey="uv" stackId="a" fill="#2DB253" />
              <Bar dataKey="amt" stackId="a" fill="#6043A3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}