import { Box, useTheme, IconButton, Button } from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ExamOptions = [
  "First Sequence",
  "Second Sequence",
  "Third Sequence",
  "Fourth Sequence",
  "Fifth Sequence",
  "Sixth Sequence",
];
const ClassOptions = [
  "Form 1",
  "Form 2",
  "Form 3",
  "Form 4",
  "Form 5",
  "LowerSixth",
  "UpperSixth",
];
const SubjectOptions = [
  "Mathematics",
  "English",
  "Social Studies",
  "Civics",
  "Biology",
  "Chemistry",
];

const ManageMarks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [examValue, setExamValue] = useState(ExamOptions[0]);
  const [inputExamValue, setInputExamValue] = useState("");

  const [ClassValue, setClassValue] = useState(ClassOptions[0]);
  const [inputClassValue, setInputClassValue] = useState("");

  const [SubjectValue, setSubjectValue] = useState(ClassOptions[0]);
  const [inputSubjectValue, setInputSubjectValue] = useState("");

  const onEditButtonClick = (e, row) => {
    e.stopPropagation();
    console.log(row);
    //do whatever you want with the row
  };
  const onDeleteButtonClick = (e, row) => {
    e.stopPropagation();
    console.log(row.id);
    //do whatever you want with the row
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Students",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Class", flex: 1 },
    { field: "email", headerName: "Subjects", flex: 1 },
    {
      field: "cost",
      headerName: "Marks Obtained(Out of 100)",
      flex: 1,
    },
    { field: "date", headerName: "Exam", flex: 1 },
    {
      field: "actions",
      headerName: "",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={(e) => onEditButtonClick(e, params.row)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={(e) => onDeleteButtonClick(e, params.row)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Manage Marks" subtitle="List of student exam marks" />
      <Box sx={{ mb: "50px", gap: "19px", display: "flex" }}>
        <Autocomplete
          value={examValue}
          onChange={(event, newValue) => {
            setExamValue(newValue);
          }}
          inputValue={inputExamValue}
          onInputChange={(event, newInputValue) => {
            setInputExamValue(newInputValue);
          }}
          id="exam-list"
          options={ExamOptions}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Exam" />
          )}
        />
        <Autocomplete
          value={ClassValue}
          onChange={(event, newValue) => {
            setClassValue(newValue);
          }}
          inputValue={inputClassValue}
          onInputChange={(event, newInputValue) => {
            setInputClassValue(newInputValue);
          }}
          id="class-list"
          options={ClassOptions}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Class" />
          )}
        />
        <Autocomplete
          value={SubjectValue}
          onChange={(event, newValue) => {
            setSubjectValue(newValue);
          }}
          inputValue={inputSubjectValue}
          onInputChange={(event, newInputValue) => {
            setInputSubjectValue(newInputValue);
          }}
          id="subject-list"
          options={SubjectOptions}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Subject" />
          )}
        />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[200],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          Search
        </Button>
      </Box>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={mockDataInvoices}
          slots={{ toolbar: GridToolbar }}
        />
      </div>
    </Box>
  );
};

export default ManageMarks;
