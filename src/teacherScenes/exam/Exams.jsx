import { React, useEffect } from "react";

const Exams = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  });
  return <div>Exams</div>;
};

export default Exams;
