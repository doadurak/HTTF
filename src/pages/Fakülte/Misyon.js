import React from "react";
import generalInfo from "../../content/Fakülte/generalInfo.js";

const Misyon = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{generalInfo.mission.title}</h1>
      <p>{generalInfo.mission.content}</p>
    </div>
  );
};

export default Misyon;
