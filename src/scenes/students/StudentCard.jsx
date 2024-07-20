import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useValue } from "../../context/ContextProvider";
import { Close } from "@mui/icons-material";

const StudentCard = () => {
  const {
    state: { viewStudent },
    dispatch,
  } = useValue();

  const closeDialog = () => {
    dispatch({ type: "VIEW_STUDENT", payload: null });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Dialog
        fullScreen={true}
        maxWidth={"xs"}
        open={Boolean(viewStudent)}
        onClose={closeDialog}
      >
        <DialogTitle>
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "red",
            }}
            onClick={closeDialog}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <Box>
          <Typography variant="h4">Student Details</Typography>
        </Box>
        <Box sx={{ gap: 15 }}>
          <Typography variant="h5">ID: {viewStudent?.id ?? ""}</Typography>
          <Typography variant="h5" fontWeight="bold">
            Name: {viewStudent?.name ?? ""}
          </Typography>
          {/* <Typography>Age: {age ?? ""}</Typography>
          <Typography>Gender: {gender ?? ""}</Typography>
          <Typography>Class: {studentClass ?? ""}</Typography> */}
        </Box>
        <Box>
          <table>
            <tr>
              <th>Subject</th>
              <th>Exam</th>
              <th>Score</th>
            </tr>
            <tr>
              <td>{viewStudent?.subjects}</td>
              <td>{viewStudent?.exam}</td>
              <td>{viewStudent?.score}</td>
            </tr>
            {/* <tr>
                <td>{subjects[0]}</td>
                <td>{exam}</td>
                <td>{score}</td>
            </tr>
            <tr>
                <td>{subjects[1]}</td>
                <td>{exam}</td>
                <td>{score}</td>
            </tr> */}
          </table>
        </Box>
      </Dialog>
    </Box>
  );
};

export default StudentCard;
