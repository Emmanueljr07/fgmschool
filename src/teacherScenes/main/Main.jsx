import { People, Subject } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import StatBox from "../../Components/StatBox";

const Main = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  });
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "grid" },
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: "minmax(100px, auto)",
        gap: 3,
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <StatBox
        title="My Subjects"
        amount="5"
        icon={<Subject sx={{ height: 50, width: 100, opacity: 0.3, mr: 1 }} />}
      />
      <StatBox
        title="My Students"
        amount="40"
        icon={<People sx={{ height: 50, width: 100, opacity: 0.3, mr: 1 }} />}
      />
    </Box>
  );
};

export default Main;
