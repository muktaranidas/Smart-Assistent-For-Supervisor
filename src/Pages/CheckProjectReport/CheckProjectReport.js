import React from "react";
import CheckProjectReportCard from "./CheckProjectReportCard";

const CheckProjectReport = () => {
  const checkProposalCards = [
    {
      _id: "1",
      title: "Smart Assistant For Supervisor",
      id: "191-35-2733",
      selectedTopic: "Project",
      supervisorInitial: "MKS",
      description:
        "If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose",
    },
    {
      _id: "2",
      title: "Booking Club",
      id: "191",
      selectedTopic: "Thesis",
      supervisorInitial: "MKS",
      description:
        "If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose",
    },
    {
      _id: "3",
      title: "AirCNC",
      id: "19155",
      selectedTopic: "Intern",
      supervisorInitial: "MKS",
      description:
        "If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose",
    },
    {
      _id: "4",
      title: "Doctors Portal",
      id: "1912733",
      selectedTopic: "Thesis",
      supervisorInitial: "MKS",
      description:
        "If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose",
    },
    {
      _id: "5",
      title: "Ema JohnS",
      id: "19133",
      selectedTopic: "Project",
      supervisorInitial: "MKS",
      description:
        "If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose",
    },
    {
      _id: "6",
      title: "Genius Card",
      id: "191733",
      selectedTopic: "Intern",
      supervisorInitial: "MKS",
      description:
        "If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-8">
      {checkProposalCards.length > 0 &&
        checkProposalCards?.map((card) => (
          <CheckProjectReportCard
            key={card._id}
            card={card}
          ></CheckProjectReportCard>
        ))}
    </div>
  );
};

export default CheckProjectReport;
