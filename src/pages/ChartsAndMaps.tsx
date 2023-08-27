import React from 'react';
import { useQuery } from '@tanstack/react-query';

import LineChart from '../components/LineChart';

const ChartsAndMaps = () => {
  const getChartData = async () => {
    const data = await fetch(
      'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
    );
    return await data.json();
  };
  const { data, status, isFetching } = useQuery({
    queryKey: ['chartData'],
    queryFn: getChartData,
  });

  if (isFetching) {
    return (
      <>
        <h1 className="text-4xl font-bold text-red-400">Loading...</h1>
      </>
    );
  }

  return (
    <div className="mt-20 py-20 flex border-box flex-1 flex-col w-full items-center ">
      {data && <LineChart covidData={data} />}
    </div>
  );
};

export default ChartsAndMaps;
