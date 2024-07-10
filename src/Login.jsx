import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Send, Visibility, VisibilityOff } from "@mui/icons-material";
import { Form, Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleFormSubmit = (formValues, { resetForm }) => {
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
    <Box
      sx={{
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
        margin: "auto",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          margin: "auto",
          mt: "50px",
          justifyContent: "center",
          display: "flex",
          width: "350px",
          background: "skyblue",
          flexDirection: "column",
          borderRadius: "5px",
          gap: "9px",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            mt: "20px",
            width: "100%",
            alignItems: "center",
            color: "whitesmoke",
          }}
        >
          Login
        </Typography>
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
          {(props) => (
            <Form>
              <Box
                sx={{
                  m: "20px",
                  gap: "20px",
                  display: "flex",
                  pl: "20px",
                  pr: "20px",
                  flexDirection: "column",
                }}
              >
                <TextField
                  autoFocus
                  variant="standard"
                  type="email"
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
              </Box>
              <Box
                display="flex"
                justifyContent="end"
                mt="20px"
                sx={{ mt: "30px", mr: "30px", mb: "20px" }}
              >
                <Button type="submit" variant="contained" endIcon={<Send />}>
                  Login
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box>
          <Button>Forgot Password?</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
