"use client"

import React from 'react';

const TableHeader = () => (
    <thead className="bg-[#1B1B1B] text-[#898989] text-[12px] uppercase">
        <tr>
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Monitored Groups</th>
            <th className="py-2 px-4">Platform</th>
            <th className="py-2 px-4">Query</th>
            <th className="py-2 px-4">Time</th>
            <th className="py-2 px-4">   </th>
        </tr>
    </thead>
);

const SortButton = () => (
    <button className="bg-[#03FFA3] text-black px-3 py-1 rounded-full">Sort ↗</button>
);

type TableRowProps = {
    index: number;
    username: string;
    platform: string;
    query: string;
    time: string;
};

const TableRow: React.FC<TableRowProps> = ({ index, username, platform, query, time }) => (
    <tr className={`text-white border-b border-[#131313] text-center ${index % 2 === 0 ? 'bg-[#0A0908]' : 'bg-[#1D1D1D]'}`}>
        <td className="py-2 px-4 text-center text-[#3D3D3D]">{index + 1}</td>
        <td className="py-2 px-4">
            {username}
        </td>
        <td  className="py-2 px-4"> {platform}</td>
        <td className="py-2 px-4 text-left w-[30%] ">{query}</td>
        <td className="px-4">{time}</td>
        <td className="py-2 px-4 text-center">
            <SortButton />
        </td>
    </tr>
);

const tableData = [
    { id: 1, username: '@Ann928', platform: 'Discord', query: 'I encountered a bug while using the workspace. Can you help?', time: '10:15 am' },
    { id: 2, username: '@Roger20', platform: 'Twitter', query: 'I\'m having trouble accessing certain features. Can you assist me?', time: '10:15 am' },
    { id: 3, username: '@Ahmad23', platform: 'Discord', query: 'Can we get an update on the project\'s timeline?', time: '10:15 am' },
    { id: 4, username: '@Justin32', platform: 'Twitter', query: 'There seems to be a conflict in our team. Can we discuss this?', time: '10:15 am' },
    { id: 5, username: '@Jordyn10', platform: 'Twitter', query: 'Can you clarify the guidelines for posting in the community?', time: '10:15 am' },
    { id: 6, username: '@Corey111', platform: 'Telegram', query: 'I\'m not sure how to use the new tool that was introduced. Can someone explain?', time: '10:15 am' },
    { id: 7, username: '@Jordyn10', platform: 'Twitter', query: 'I have a suggestion for improving the workspace. Who should I talk to?', time: '10:15 am' },
];

export default function EscalationTable() { 
    return(
    <div className="w-full h-auto pb-10 pr-10 bg-[#131313] mt-10">
        <div className="bg-black rounded-lg overflow-hidden">
            <table className="w-full table-auto">
                <TableHeader />
                <tbody>
                    {tableData.map((row, index) => (
                        <TableRow
                            key={row.id}
                            index={index}
                            username={row.username}
                            platform={row.platform}
                            query={row.query}
                            time={row.time}
                        />
                    ))}
                </tbody>
            </table>
            {/* <div className="bg-[#1B1B1B] text-white py-2 px-4 flex justify-between items-center">
                <button className="bg-gray-700 text-white px-3 py-1 rounded">Previous</button>
                <div>
                    <button className="bg-gray-700 text-white px-2 py-1 rounded mx-1">1</button>
                    <button className="bg-gray-700 text-white px-2 py-1 rounded mx-1">2</button>
                    <button className="bg-gray-700 text-white px-2 py-1 rounded mx-1">3</button>
                    <button className="bg-gray-700 text-white px-2 py-1 rounded mx-1">...</button>
                    <button className="bg-gray-700 text-white px-2 py-1 rounded mx-1">10</button>
                </div>
                <button className="bg-gray-700 text-white px-3 py-1 rounded">Next</button>
            </div> */}
        </div>
    </div>
);
}
