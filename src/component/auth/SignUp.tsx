import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//   import axios from "axios";
import { useNavigate } from "react-router-dom";
//   import { toast } from "sonner";
import "./signIn.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { PostSignUp } from "../../redux/auth/authSlice";

export interface ISignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
const SignUp: React.FC<{ setSignUp: Dispatch<SetStateAction<boolean>> }> = ({
  setSignUp,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [SignupData, setSignupData] = useState<ISignupData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSignUp = async () => {
    dispatch(
      PostSignUp({
        email: SignupData.email,
        password: SignupData.password,
        firstName: SignupData.firstName,
        lastName: SignupData.lastName,
      })
    );
    setSignupData({ email: "", password: "", firstName: "", lastName: "" });
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs" className="second-conatiner">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={SignupData?.firstName}
                onChange={(e) =>
                  setSignupData({ ...SignupData, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={SignupData?.lastName}
                onChange={(e) =>
                  setSignupData({ ...SignupData, lastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={SignupData?.email}
                onChange={(e) =>
                  setSignupData({ ...SignupData, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={SignupData?.password}
                onChange={(e) =>
                  setSignupData({ ...SignupData, password: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSignUp()}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item onClick={() => setSignUp(false)}>
              <Typography className="link">
                Already have an account? Sign in
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
