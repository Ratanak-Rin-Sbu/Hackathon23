import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  console.log(pageType);
  return (
    <Formik
      // onSubmit={handleFormSubmit}
      // initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      // validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {isRegister ? (
              <>
              <TextField
                label="Username"
                onBlur={handleBlur}
                onChange={handleChange}
                // value={values.username}
                name="username"
                // error={
                //   Boolean(touched.username) && Boolean(errors.username)
                // }
                // helperText={touched.username && errors.username}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                // value={values.email}
                name="email"
                // error={
                //   Boolean(touched.email) && Boolean(errors.email)
                // }
                // helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                // value={values.contact}
                name="contact"
                // error={
                //   Boolean(touched.contact) && Boolean(errors.contact)
                // }
                // helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
            </>
            ) : (
              <>
                <TextField
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  // value={values.email}
                  name="email"
                  // error={Boolean(touched.email) && Boolean(errors.email)}
                  // helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Password"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  // value={values.password}
                  name="password"
                  // error={Boolean(touched.password) && Boolean(errors.password)}
                  // helperText={touched.password && errors.password}
                  sx={{ gridColumn: "span 4" }}
                />
              </>
            )}
          </Box>

          {isInvalidInput && (
            <Typography color="red" fontStyle="italic" marginTop="20px" marginLeft="10px">
              Invalid credentials
            </Typography>
          )}

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "#0A4D68",
                color: "whitesmoke",
                "&:hover": { color: "#0A4D68", backgroundColor: "#AFD3E2" },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;