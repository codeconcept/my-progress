import React from "react";
import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
    const { technos, handleDeleteTechno } = props;
  return (
    <div className="techno-list">
      <h1>All Technos</h1>
      <div>
        {technos.map((techno) => (
          <TechnoItem
            key={techno.technoid}
            techno={techno}
            handleDeleteTechno={handleDeleteTechno}
          />
        ))}
      </div>
    </div>
  );
}
