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
  InputAdornment,
} from "@mui/material";
import React from "react";
import { Form, Formik } from "formik";
import { Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { useValue } from "../../context/ContextProvider";

const initialValues = {
  name: "",
  age: 0,
  contact: "",
  email: "",
  password: "",
  role: "",
};

const AddMember = () => {
  const {
    state: { openAddMember },
    dispatch,
  } = useValue();

  const closeDialog = () => {
    dispatch({ type: "CLOSE_ADD_MEMBER" });
  };

  const handleSubmit = (formValues, { resetForm }) => {
    console.log(formValues);

    resetForm();
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={openAddMember} onClose={closeDialog}>
      <DialogTitle>
        Add Member
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
                Please fill your information in the fields below:
              </DialogContentText>
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
              <TextField
                autoFocus
                margin="normal"
                variant="standard"
                type="number"
                label="Age"
                fullWidth
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.age}
                name="age"
                required
                sx={{}}
              />
              <TextField
                autoFocus
                margin="normal"
                variant="standard"
                type="text"
                label="Contact"
                fullWidth
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.contact}
                name="contact"
                required
                //   inputMode={{minLength:2}}
                sx={{}}
              />
              <TextField
                autoFocus
                margin="normal"
                variant="standard"
                type="text"
                label="Email"
                fullWidth
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.email}
                name="email"
                required
                sx={{}}
              />
              <TextField
                fullWidth
                variant="standard"
                type={showPassword ? "password" : "text"}
                label="Password"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.password}
                name="password"
                inputProps={{ minLength: 5 }}
                required
                sx={{}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClick}
                        onMouseDown={handleMouseDown}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                autoFocus
                margin="normal"
                variant="standard"
                type="text"
                label="Role"
                fullWidth
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.role}
                name="role"
                required
                sx={{}}
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

export default AddMember;
