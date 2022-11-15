import React from "react";
import { Link } from "react-router-dom";

const SubmitProposal = () => {
  const handleSubmitProjectProposal = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const projectTitle = form.projectTitle.value;
    console.log(name, email, projectTitle);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center my-4 font-bold">
          Submit Your Proposal
        </h2>

        <form onSubmit={handleSubmitProjectProposal}>
          <div className="form-control my-2 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control my-2 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Project Proposal Title</span>
            </label>
            <input
              placeholder="Project Proposal Title"
              type="text"
              name="projectTitle"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <input
            className="btn btn-accent my-4 w-full"
            value="submit"
            type="submit"
          />
          <div className="text-red-600 mb-6 font-bold"></div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProposal;
