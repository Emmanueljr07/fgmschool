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
  MenuItem,
} from "@mui/material";
import React from "react";
import { Form, Formik } from "formik";
import { Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { useValue } from "../../context/ContextProvider";
import { register } from "../../actions/user";

const initialValues = {
  name: "",
  age: null,
  contact: "",
  email: "",
  password: "",
  role: "",
};

const AddMember = () => {
  const {
    state: { currentUser, openDialog },
    dispatch,
  } = useValue();

  const closeDialog = () => {
    dispatch({ type: "CLOSE_DIALOG" });
  };

  const handleSubmit = (formValues, { resetForm }) => {
    const name = formValues.name;
    const age = formValues.age;
    const contact = formValues.contact;
    const email = formValues.email;
    const password = formValues.password;
    const role = formValues.role;
    //sending register request
    register(
      { name, age, contact, email, password, role },
      currentUser,
      dispatch
    );
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <Dialog open={openDialog} onClose={closeDialog}>
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
                margin="normal"
                fullWidth
                variant="standard"
                type={showPassword ? "text" : "password"}
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
                select
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
              >
                <MenuItem value="admin">admin</MenuItem>
                <MenuItem value="editor">editor</MenuItem>
                <MenuItem value="viewer">viewer</MenuItem>
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
  );
};

export default AddMember;
