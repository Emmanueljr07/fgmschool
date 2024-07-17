import {
  Box,
  useTheme,
  IconButton,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircle from "@mui/icons-material/AddCircle";

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

const ExamList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [Tabvalue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
      <Header title="Manage All the Exam" subtitle="List of all the exams" />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={Tabvalue} onChange={handleTabChange}>
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
      </CustomTabPanel>
    </Box>
  );
};

export default ExamList;
