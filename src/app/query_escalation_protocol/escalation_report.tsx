import React from 'react';
import EscalationTable from './escalation_table';
import QuerySortingPortal from './query_sorting_portal';

interface StatCardProps {
    title: string;
    count: number;
    percentage: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, count, percentage }) => {
    return (
        <div className="flex flex-col w-1/4 bg-[#181818] rounded-[20px] p-4 mr-5">
            <p className="text-[12px] mb-4">{title}</p>
            <p className="text-[40px]">{count}</p>
            <button className="bg-[#03FFA31C] w-1/4 py-[1px] text-[#76CA43] text-[10px] flex items-center justify-center rounded-[4px] gap-1 mb-2">
                <p>{percentage}</p>
                <svg width="10" height="10" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.24998 1.00316C6.25173 0.865104 6.14122 0.751768 6.00316 0.75002L3.75334 0.721541C3.61528 0.719794 3.50195 0.830297 3.5002 0.968357C3.49845 1.10642 3.60896 1.21975 3.74702 1.2215L5.74686 1.24682L5.72154 3.24666C5.71979 3.38472 5.8303 3.49805 5.96836 3.4998C6.10642 3.50155 6.21975 3.39104 6.2215 3.25298L6.24998 1.00316ZM0.894031 3.32643L1.56387 3.63992L1.77581 3.18706L1.10597 2.87357L0.894031 3.32643ZM4.08832 3.21305L6.17453 1.179L5.82548 0.821L3.73927 2.85505L4.08832 3.21305ZM1.56387 3.63992C2.41218 4.03693 3.41771 3.8669 4.08832 3.21305L3.73927 2.85505C3.21768 3.3636 2.43561 3.49584 1.77581 3.18706L1.56387 3.63992Z" fill="#76CA43" />
                </svg>
            </button>
        </div>
    );
};

const escalationData = [
    {
        title: 'Total Escallations',
        count: 40,
        percentage: '5%',
    },
    {
        title: 'Successfully Sorted',
        count: 20,
        percentage: '5%',
    },
    {
        title: 'Discord',
        count: 8,
        percentage: '5%',
    },
    {
        title: 'Telegram',
        count: 10,
        percentage: '5%',
    },
];

export default function EscalationReport() {
    return (
        <div className='flex flex-row w-full'>
            <div className="w-full min-h-screen h-auto bg-[#131313] rounded-t-[24px] pt-10 pl-14  flex flex-col">
                <button className="bg-[#1B1B1B] rounded-[25px] py-1 text-[14px] w-[150px]">Escallation Report</button>

                <div className="lg:w-5/6 w-full grid-cols-2 lg:flex lg:flex-row mt-10">
                    {escalationData.map((data, index) => (
                        <StatCard
                            key={index}
                            title={data.title}
                            count={data.count}
                            percentage={data.percentage}
                        />
                    ))}
                </div>

                <EscalationTable />

                <div className='w-full flex justify-end pr-10'>
                    <div className='bg-[#0D0D0D] flex flex-row items-center px-4 mb-10 w-1/2 justify-between'>
                        <button className='flex flex-row items-center justify-center gap-2 bg-[#0D0D0D] py-2 border-r border-[#131313]'>
                            <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8337 6.99935H1.16699M1.16699 6.99935L7.00033 12.8327M1.16699 6.99935L7.00033 1.16602" stroke="#FDFEFF" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span>
                            Previous</button>
                        <button className='border-[#131313] px-4 border-r py-4'>1</button>
                        <button className='border-[#131313] px-4 border-r py-4'>2</button>
                        <button className='border-[#131313] px-4 border-r py-4'>3</button>
                        <button className='border-[#131313] px-4 border-r py-4'>...</button>
                        <button className='border-[#131313] px-4 border-r py-4'>8</button>
                        <button className='border-[#131313] px-4 border-r py-4'>9</button>
                        <button className='border-[#131313] px-4 border-r py-4'>10</button>
                        <button className='flex flex-row items-center justify-center gap-2 bg-[#0D0D0D] py-2 border-r border-[#131313]'>Next
                            <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.16699 6.99935H12.8337M12.8337 6.99935L7.00033 1.16602M12.8337 6.99935L7.00033 12.8327" stroke="#FDFEFF" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <QuerySortingPortal />
        </div>
    );
}
