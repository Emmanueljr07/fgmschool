import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../Components/Header";
import { useEffect } from "react";

const initialValues = {
  fullName: "",
  class: "",
  subject: "",
  gender: "",
  age: null,
  email: "",
  password: "",
  contact: "",
  address: "",
};

const phoneRegExp =
  /^((\+[1-9]{1-4}[ -]?|)(\([0-9]{2-3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const teacherSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  subject: yup.string().required("required"),
  gender: yup.string().oneOf(["male", "female"]).required("Required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.string().required("required"),
});

const AddTeacher = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (formValues, { resetForm }) => {
    console.log(formValues);
    resetForm();
  };

  return (
    <Box m="20px" width="100%">
      <Header title={"Add New Teacher"} />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={teacherSchema}
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
                label="Full Name"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.fullName}
                name="fullName"
                error={!!props.touched.fullName && !!props.errors.fullName}
                helperText={props.touched.fullName && props.errors.fullName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                select
                label="Select Class"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.class}
                name="class"
                error={!!props.touched.class && !!props.errors.class}
                helperText={props.touched.class && props.errors.class}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="form 1">Mathematics</MenuItem>
                <MenuItem value="form 2">English</MenuItem>
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                select
                label="Select Subject"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.subject}
                name="subject"
                error={!!props.touched.subject && !!props.errors.subject}
                helperText={props.touched.subject && props.errors.subject}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="maths">Mathematics</MenuItem>
                <MenuItem value="eng">English</MenuItem>
              </TextField>

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
                type="number"
                label="Age"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.age}
                name="age"
                error={!!props.touched.age && !!props.errors.age}
                helperText={props.touched.age && props.errors.age}
                sx={{ gridColumn: "span 2" }}
              />
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
                Add New Teacher
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddTeacher;
