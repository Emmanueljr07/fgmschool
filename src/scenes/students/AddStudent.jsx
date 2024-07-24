import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../Components/Header";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  class: "",
  gender: "",
  parentName: "",
  contact: "",
  address: "",
};

const phoneRegExp =
  /^((\+[1-9]{1-4}[ -]?|)(\([0-9]{2-3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const studentSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  class: yup.string().required("required"),
  gender: yup.string().oneOf(["male", "female"]).required("Required"),
  parentName: yup.string().required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.string().required("required"),
});

const AddStudent = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (formValues, { resetForm }) => {
    console.log(formValues);
    console.log(dob);
    resetForm();
    setDob(dayjs(""));
  };

  const [dob, setDob] = useState(dayjs(""));

  return (
    <Box m="20px" width="100%">
      <Header title={"Addmission Form"} />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={studentSchema}
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
                label="Class"
                name="class"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.class}
                error={!!props.touched.class && !!props.errors.class}
                helperText={props.touched.class && props.errors.class}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="form1">Form 1</MenuItem>
                <MenuItem value="form2">Form 2</MenuItem>
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

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disableFuture
                  views={["day", "month", "year"]}
                  sx={{ gridColumn: "span 4" }}
                  fullWidth
                  format="DD/MM/YYYY"
                  variant="filled"
                  label="Date of Birth"
                  onBlur={props.handleBlur}
                  onChange={(newValue) => {
                    console.log(newValue);
                    setDob(newValue);
                  }}
                  value={dob}
                  name="dob"
                  slotProps={{
                    textField: {
                      helperText: props.touched.dob && props.errors.dob,
                      error: !!props.touched.dob && !!props.errors.dob,
                    },
                  }}
                />
              </LocalizationProvider>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Parent Name"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.parentName}
                name="parentName"
                error={!!props.touched.parentName && !!props.errors.parentName}
                helperText={props.touched.parentName && props.errors.parentName}
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
                Create New Student
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddStudent;
