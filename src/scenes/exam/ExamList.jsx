import {
  Box,
  useTheme,
  Tabs,
  Tab,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import AddCircle from "@mui/icons-material/AddCircle";
import { Form, Formik } from "formik";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExamListActions from "./ExamListActions";

const initialValues = {
  examName: "",
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ mt: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ExamList = ({ setSelectedLink, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    setSelectedLink(link);
  });

  const handleFormSubmit = (formValues, { resetForm }) => {
    console.log(formValues);
    console.log(dob);
    resetForm();
    setDob(dayjs(""));
  };

  const [dob, setDob] = useState(dayjs(""));

  const [Tabvalue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Exam",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "actions",
      headerName: "",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => <ExamListActions {...{ params }} />,
    },
  ];
  return (
    <Box m="20px" width="70%">
      <Header title="Manage All the Exam" subtitle="List of all the exams" />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={Tabvalue}
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: {
              //   backgroundColor: "#D97D54",
              backgroundColor: `${colors.blueAccent[700]}`,
            },
          }}
        >
          <Tab label="Exam List" {...a11yProps(0)} />
          <Tab
            {...a11yProps(1)}
            label="Add Exam"
            icon={<AddCircle />}
            iconPosition="start"
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={Tabvalue} index={0}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={mockDataInvoices}
            slots={{ toolbar: GridToolbar }}
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={Tabvalue} index={1}>
        <Typography variant="h4" color={colors.grey[100]} sx={{ mb: "5px" }}>
          Create New Exam
        </Typography>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
          {(props) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column"
                gap="19px"
                width="400px"
              >
                <TextField
                  autoFocus
                  margin="normal"
                  variant="filled"
                  type="text"
                  label="Exam Name"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.examName}
                  name="examName"
                  required
                  inputMode={{ minLength: 5 }}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["day", "month", "year"]}
                    format="DD/MM/YYYY"
                    variant="filled"
                    label="Date of Birth"
                    onBlur={props.handleBlur}
                    onChange={(newValue) => {
                      console.log(newValue);
                      setDob(newValue);
                    }}
                    value={dob}
                    name="dob"
                    slotProps={{
                      textField: {
                        required: true,
                      },
                    }}
                  />
                </LocalizationProvider>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Exam
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </CustomTabPanel>
    </Box>
  );
};

export default ExamList;
