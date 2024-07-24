import React, { useEffect } from "react";

const Notice = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  });
  return <div>Notice</div>;
};

export default Notice;
