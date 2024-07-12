import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import React from "react";
import { Form, Formik } from "formik";
import { Send } from "@mui/icons-material";
import { useValue } from "../../context/ContextProvider";

const initialValues = {
  subject: "",
  class: "",
};

const AddSubject = () => {
  const {
    state: { openDialog },
    dispatch,
  } = useValue();

  const closeDialog = () => {
    dispatch({ type: "CLOSE_DIALOG" });
  };

  const handleSubmit = (formValues, { resetForm }) => {
    console.log(formValues);

    resetForm();
  };

  return (
    <Box>
      <Dialog
        open={openDialog}
        onClose={closeDialog}
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogTitle>
          Add New Subject
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
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          {(props) => (
            <Form>
              <DialogContent>
                <DialogContentText>
                  Please fill in subject details below:
                </DialogContentText>
                <TextField
                  margin="normal"
                  variant="standard"
                  type="text"
                  label="Enter the Subject"
                  fullWidth
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.subject}
                  name="subject"
                  required
                  //   inputMode={{minLength:2}}
                  sx={{}}
                />
                <TextField
                  margin="normal"
                  variant="standard"
                  select
                  label="Select class"
                  fullWidth
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.class}
                  name="class"
                  required
                  sx={{}}
                >
                  <MenuItem value="1">Form 1</MenuItem>
                  <MenuItem value="2">Form 2</MenuItem>
                </TextField>
              </DialogContent>
              <DialogActions>
                <Button type="submit" variant="contained" endIcon={<Send />}>
                  Submit
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </Box>
  );
};

export default AddSubject;
