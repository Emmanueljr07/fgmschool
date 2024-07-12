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
} from "@mui/material";
import React from "react";
import { Form, Formik } from "formik";
import { Send } from "@mui/icons-material";
import { useValue } from "../../context/ContextProvider";

const initialValues = {
  name: "",
};

const CreateClass = () => {
  const {
    state: { openCreateClass },
    dispatch,
  } = useValue();

  const closeDialog = () => {
    dispatch({ type: "CLOSE_CREATE_CLASS" });
  };

  const handleSubmit = (formValues, { resetForm }) => {
    console.log(formValues);

    resetForm();
  };

  return (
    <Dialog open={openCreateClass} onClose={closeDialog}>
      <DialogTitle>
        Create New Class
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
              <DialogContentText>Enter the Name</DialogContentText>
              <TextField
                autoFocus
                margin="normal"
                variant="standard"
                type="text"
                label="Name"
                fullWidth
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.name}
                name="name"
                required
                inputMode={{ minLength: 3 }}
              />
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
  );
};

export default CreateClass;
