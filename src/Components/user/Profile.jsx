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
import { updateProfile } from "../../actions/user";

const initialValues = {
  name: "",
  email: "",
};

const Profile = () => {
  const {
    state: { profile, currentUser },
    dispatch,
  } = useValue();

  const handleClose = () => {
    dispatch({ type: "UPDATE_PROFILE", payload: { ...profile, open: false } });
  };

  const handleSubmit = (formValues, { resetForm }, e) => {
    e.preventDefault();
    const name = formValues.name;
    const email = formValues.email;

    updateProfile(currentUser, { name, email }, dispatch);

    console.log(formValues);

    resetForm();
  };

  return (
    <Box>
      <Dialog
        open={profile.open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogTitle>
          Profile
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "red",
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          {(props) => (
            <Form>
              <DialogContent>
                <DialogContentText>
                  You can update your profile by updating these fields:
                </DialogContentText>
                <TextField
                  margin="normal"
                  variant="standard"
                  type="text"
                  label="Enter New name"
                  fullWidth
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.name}
                  name="name"
                  required
                  defaultValue={currentUser?.name}
                />
                <TextField
                  margin="normal"
                  variant="standard"
                  label="Enter New email"
                  fullWidth
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.email}
                  name="email"
                  required
                  defaultValue={currentUser?.email}
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
    </Box>
  );
};

export default Profile;
