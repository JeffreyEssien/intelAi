"use client"

import React, { useState } from 'react';

const TableHeader = () => (
    <thead className="bg-[#1B1B1B] text-[#898989] text-[12px] uppercase">
        <tr>
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Monitored Groups</th>
            <th className="py-2 px-4">Platform</th>
            <th className="py-2 px-4">Query</th>
            <th className="py-2 px-4">Time</th>
            <th className="py-2 px-4">Action</th>
        </tr>
    </thead>
);

type TableRowProps = {
    index: number;
    username: string;
    platform: string;
    query: string;
    time: string;
    isResolved: boolean;
    onResolve: () => void;
    viewMode: string;
};

const TableRow: React.FC<TableRowProps> = ({ index, username, platform, query, time, isResolved, onResolve, viewMode }) => (
    <tr className={`text-white border-b border-[#131313] text-center ${index % 2 === 0 ? 'bg-[#0A0908]' : 'bg-[#1D1D1D]'}`}>
        <td className="py-2 px-4 text-center text-[#3D3D3D]">{index + 1}</td>
        <td className="py-2 px-4">{username}</td>
        <td className="py-2 px-4">{platform}</td>
        <td className="py-2 px-4 text-left w-[30%]">{query}</td>
        <td className="px-4">{time}</td>
        <td className="py-2 px-4 text-center">
            {isResolved ? (
                <span className="text-[#03FFA3]">Resolved</span>
            ) : (
                viewMode !== 'resolved' && (
                    <button onClick={onResolve} className="bg-[#03FFA3] text-black px-3 py-1 rounded-full">Sort ↗</button>
                )
            )}
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
    const [resolvedRows, setResolvedRows] = useState<number[]>([]);
    const [viewMode, setViewMode] = useState<'all' | 'resolved' | 'unresolved'>('unresolved');

    const handleResolve = (id: number) => {
        setResolvedRows([...resolvedRows, id]);
    };

    const filteredData = tableData.filter(row => {
        if (viewMode === 'all') return true;
        if (viewMode === 'resolved') return resolvedRows.includes(row.id);
        if (viewMode === 'unresolved') return !resolvedRows.includes(row.id);
        return true;
    });

    return(
        <div className="w-full h-auto pb-10 pr-10 bg-[#131313] my-5">
            <div className='flex flex-row gap-3 w-1/3 mt-8 border border-[#1C1C1C] rounded-[24px] mb-5'>
                <button 
                    onClick={() => setViewMode('unresolved')}
                    className={`bg-[#161616] text-[14px] rounded-[24px] px-2 py-2 w-1/3 font-semibold ${viewMode === 'unresolved' ? 'text-black bg-white' : 'text-[#666666] hover:text-black hover:bg-white'}`}
                >
                    Unresolved
                </button>
                <button 
                    onClick={() => setViewMode('resolved')}
                    className={`bg-[#161616] text-[14px] rounded-[24px] px-2 py-2 w-1/3 font-semibold ${viewMode === 'resolved' ? 'text-black bg-white' : 'text-[#666666] hover:text-black hover:bg-white'}`}
                >
                    Resolved
                </button>
                <button 
                    onClick={() => setViewMode('all')}
                    className={`bg-[#161616] text-[14px] rounded-[24px] px-2 py-2 w-1/3 font-semibold ${viewMode === 'all' ? 'text-black bg-white' : 'text-[#666666] hover:text-black hover:bg-white'}`}
                >
                    All
                </button>
            </div>
            <div className="bg-black rounded-lg overflow-hidden">
                <table className="w-full table-auto">
                    <TableHeader />
                    <tbody>
                        {filteredData.map((row, index) => (
                            <TableRow
                                key={row.id}
                                index={index}
                                username={row.username}
                                platform={row.platform}
                                query={row.query}
                                time={row.time}
                                isResolved={resolvedRows.includes(row.id)}
                                onResolve={() => handleResolve(row.id)}
                                viewMode={viewMode}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
