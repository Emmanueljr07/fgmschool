import { Delete, Edit, Preview } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";

const StudentActions = ({ params }) => {
  return (
    <Box>
      <Tooltip title="View student details">
        <IconButton onClick={() => {}}>
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this row">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this row">
        <IconButton onClick={() => {}}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default StudentActions;
