import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../Components/Header";
import { useEffect } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  password: "",
  contact: "",
  occupation: "",
  address: "",
};

const phoneRegExp =
  /^((\+[1-9]{1-4}[ -]?|)(\([0-9]{2-3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  gender: yup.string().oneOf(["male", "female"]).required("Required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  occupation: yup.string().required("required"),
  address: yup.string().required("required"),
});

const AddParent = ({ setSelectedLink, link }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    setSelectedLink(link);
  });

  const handleFormSubmit = (formValues, { resetForm }) => {
    console.log(formValues);
    resetForm();
  };

  return (
    <Box m="20px">
      <Header title={"Add New Parent"} />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {(props) => (
          <Form>
            <Box
              display={"grid"}
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.firstName}
                name="firstName"
                error={!!props.touched.firstName && !!props.errors.firstName}
                helperText={props.touched.firstName && props.errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.lastName}
                name="lastName"
                error={!!props.touched.lastName && !!props.errors.lastName}
                helperText={props.touched.lastName && props.errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                select
                label="Gender"
                name="gender"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.gender}
                error={!!props.touched.gender && !!props.errors.gender}
                helperText={props.touched.gender && props.errors.gender}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="email"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.email}
                name="email"
                error={!!props.touched.email && !!props.errors.email}
                helperText={props.touched.email && props.errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.password}
                name="password"
                error={!!props.touched.password && !!props.errors.password}
                helperText={props.touched.password && props.errors.password}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.contact}
                name="contact"
                error={!!props.touched.contact && !!props.errors.contact}
                helperText={props.touched.contact && props.errors.contact}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Occupation "
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.occupation}
                name="occupation"
                error={!!props.touched.occupation && !!props.errors.occupation}
                helperText={props.touched.occupation && props.errors.occupation}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.address}
                name="address"
                error={!!props.touched.address && !!props.errors.address}
                helperText={props.touched.address && props.errors.address}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Parent
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddParent;
