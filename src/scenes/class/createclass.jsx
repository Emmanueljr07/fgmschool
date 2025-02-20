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
  Box,
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
    <Box sx={{}}>
      <Dialog
        open={openDialog}
        onClose={closeDialog}
        fullWidth={true}
        maxWidth={"xs"}
      >
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
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                  sx={{ m: "20px" }}
                >
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

export default CreateClass;
