import React from "react";

const CheckProjectReportCard = ({ card }) => {
  const { title, description, id, supervisorInitial, selectedTopic } = card;
  return (
    <div className="card w-96 bg-slate-500 shadow-xl mb-8">
      <div className="card-body  text-white">
        <h2 className="card-title">Name: {title}</h2>
        <p>Id: {id}</p>
        <p>supervisorInitial: {supervisorInitial}</p>
        <p>selectedTopic: {selectedTopic}</p>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See Details</button>
          <button className="btn btn-warning">Download File</button>
        </div>
      </div>
    </div>
  );
};

export default CheckProjectReportCard;
