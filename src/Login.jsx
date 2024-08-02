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
import fgmlogo from "./assets/FGM LOGO.jpg";
import { red } from "@mui/material/colors";
import { login } from "./actions/user";
import { useValue } from "./context/ContextProvider";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { dispatch } = useValue();
  const handleFormSubmit = (formValues, { resetForm }) => {
    const email = formValues.email;
    const password = formValues.password;
    // send login request
    const done = login({ email, password }, dispatch);
    // resetForm();
    return done;
  };

  const cred = red[500];

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
          mt: "70px",
          justifyContent: "center",
          display: "flex",
          width: 400,
          backgroundColor: cred,
          flexDirection: "column",
          borderRadius: "5px",
          gap: "9px",
        }}
      >
        <Box
          component="img"
          sx={{
            m: 2,
            height: 100,
            width: 100,
            maxHeight: { xs: 100, md: 130 },
            maxWidth: { xs: 100, md: 140 },
          }}
          src={fgmlogo}
          alt=""
        />
        <Typography
          variant="h4"
          align="center"
          sx={{
            mt: "5px",
            width: "100%",
            alignItems: "center",
            color: "whitesmoke",
            fontFamily: "revert",
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
                  variant="outlined"
                  type="email"
                  label="Email"
                  fullWidth
                  focused={{}}
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.email}
                  name="email"
                  required
                  // color="primary"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#000",
                      fontFamily: "sans-serif",

                      "& .MuiOutlinedInput-notchedOutline": {
                        border: " 1px solid white",
                      },
                      "& .Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "5px solid white",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ccc",
                        },
                      },
                    },
                    "& .MuiInputLabel-outlined": {
                      color: "black",
                      "&.Mui-focused": {
                        color: "black",
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.password}
                  name="password"
                  inputProps={{ minLength: 5 }}
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "#000",
                      fontFamily: "sans-serif",

                      "& .MuiOutlinedInput-notchedOutline": {
                        border: " 1px solid white",
                      },
                      "& .Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "5px solid primary",
                        },
                      },
                      "&:hover:not(.Mui-focused)": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ccc",
                        },
                      },
                    },
                    "& .MuiInputLabel-outlined": {
                      color: "black",
                      "&.Mui-focused": {
                        color: "black",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{ color: "whitesmoke" }}
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
                sx={{
                  mt: "30px",
                  mr: "30px",
                  mb: "20px",
                  ml: 25,
                }}
              >
                <Button
                  sx={{ p: 1, pr: 3, backgroundColor: "black" }}
                  type="submit"
                  variant="contained"
                  endIcon={<Send />}
                >
                  Login
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box>
          <Button
            sx={{
              color: "whitesmoke",
              mr: 20,
            }}
          >
            Forgot Password?
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
