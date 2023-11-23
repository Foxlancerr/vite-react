import React from 'react';
import { useParams } from 'react-router-dom';

const EachJeanDetails = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center h-[50vh]">
      <h1 className=" text-slate-400 text-3xl font-bold">
        This is a Jean Details Page which have the ID is: {id}
      </h1>
    </div>
  );
}

export default EachJeanDetails;
