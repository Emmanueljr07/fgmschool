import { Box, useTheme, Typography, IconButton, Select } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageMarks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => <Typography>${params.row.cost}</Typography>,
    },
    { field: "date", headerName: "Date", flex: 1 },
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
        <Select value={"exam"} label=" Select Exam" fullWidth variant="filled">
          <option value="term1">Term 1</option>
          <option value="term2">Term 2</option>
          <option value="term3">Term 3</option>
        </Select>
        <Select label=" Select Class" fullWidth variant="filled">
          <option value="term1">Term 1</option>
          <option value="term2">Term 2</option>
          <option value="term3">Term 3</option>
        </Select>
        <Select label=" Select Subject" fullWidth variant="filled">
          <option value="term1">Term 1</option>
          <option value="term2">Term 2</option>
          <option value="term3">Term 3</option>
        </Select>
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          //   {...data}
          columns={columns}
          rows={mockDataInvoices}
          slots={{ toolbar: GridToolbar }}
        />
      </div>
    </Box>
  );
};

export default ManageMarks;
