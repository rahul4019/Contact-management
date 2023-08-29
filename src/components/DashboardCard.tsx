import React from 'react';

interface DashboardCardProps {
  title: string;
  numbers: number;
}

// function to provide color based on provided title
const color = (title: string): string => {
  if (title === 'total cases') {
    return 'text-yellow-500';
  } else if (title === 'deaths') {
    return 'text-red-500';
  } else if (title === 'active') {
    return 'text-blue-500';
  } else {
    return 'text-green-500';
  }
};

const DashboardCard: React.FC<DashboardCardProps> = ({ title, numbers }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-md transition-all ease-in-out duration-300 delay-150 p-4 gap-4 hover:scale-110 hover:cursor-pointer">
      <div className="text-xl font-semibold capitalize">{title}</div>
      <div className={`text-4xl  md:text-2xl  font-semibold ${color(title)}`}>
        {numbers}
      </div>
    </div>
  );
};

export default DashboardCard;
