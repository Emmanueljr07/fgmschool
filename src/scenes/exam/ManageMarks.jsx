import { Box, useTheme, IconButton, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { mockDataInvoices } from "../../data/mockData";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DataTable from "react-data-table-component";
import CloseIcon from "@mui/icons-material/Close";
import ExamMarkActions from "./ExamMarkActions";

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

const ManageMarks = ({ setSelectedLink, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    setSelectedLink(link);
  });

  const [examValue, setExamValue] = useState(ExamOptions[0]);
  const [inputExamValue, setInputExamValue] = useState("");

  const [ClassValue, setClassValue] = useState(ClassOptions[0]);
  const [inputClassValue, setInputClassValue] = useState("");

  const [SubjectValue, setSubjectValue] = useState(SubjectOptions[0]);
  const [inputSubjectValue, setInputSubjectValue] = useState("");

  // eslint-disable-next-line no-mixed-operators
  const [tabledata, setTabledata] = useState(mockDataInvoices);

  const [cancelFilter, setCancelFilter] = useState(false);

  const FilterTable = (e) => {
    const newData = mockDataInvoices.filter((row) => {
      return (
        row.date.toLowerCase().includes(examValue.toLowerCase()) &&
        row.phone.toLowerCase().includes(ClassValue.toLowerCase()) &&
        row.email.toLowerCase().includes(SubjectValue.toLowerCase())
        // row.date === examValue &&
        // row.phone === ClassValue &&
        // row.email === SubjectValue
      );
    });
    setTabledata(newData);
    setCancelFilter(true);
  };

  const closeFilter = (e) => {
    setTabledata(mockDataInvoices);
    setCancelFilter(false);
  };

  const columns = [
    { selector: (row) => row.id, name: "ID", sortable: true },
    { selector: (row) => row.name, name: "Students", sortable: true },
    { selector: (row) => row.phone, name: "Class", sortable: true },
    { selector: (row) => row.email, name: "Subjects", sortable: true },
    {
      selector: (row) => row.cost,
      name: "Marks Obtained (Out of 20)",
      sortable: true,
    },
    { selector: (row) => row.date, name: "Exam", sortable: true },
    {
      key: "action",
      text: "Actions",
      sortable: false,
      cell: (row) => <ExamMarkActions {...{ row }} />,
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
          onClick={FilterTable}
        >
          Search
        </Button>{" "}
        {cancelFilter ? (
          <IconButton onClick={closeFilter}>
            <CloseIcon sx={{ fontSize: 40 }} />
          </IconButton>
        ) : null}
      </Box>
      <div style={{ height: 500, width: "100%" }}>
        <Box
          sx={{
            ".rdt_Table": {
              backgroundColor: "transparent",
              borderRadius: "10px",
              color: colors.grey[200],
            },
            ".rdt_TableHeader": {
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[200],
            },
            ".rdt_TableRow": {
              backgroundColor: "transparent",
              color: colors.grey[200],
            },
            ".rdt_TableCol": {
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[200],
            },
            ".rdt_Table .rdt_TableRow:hover": {
              backgroundColor: colors.grey[700],
            },
            rdt_TableFooter: {
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[200],
            },
          }}
        >
          <DataTable
            columns={columns}
            data={tabledata}
            fixedHeader
            pagination
            // actions={<Button> Export Pdf</Button>}
          ></DataTable>
        </Box>
      </div>
    </Box>
  );
};

export default ManageMarks;
