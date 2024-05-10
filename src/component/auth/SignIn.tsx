import React, { Dispatch, SetStateAction, useState } from "react";
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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import defaultImage from "../../assets/defaultImage.svg";
import "./signIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PostSignIn } from "../../redux/auth/authSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

export interface IsignInData {
  email: string;
  password: string;
}

const SignIn: React.FC<{ setSignUp: Dispatch<SetStateAction<boolean>> }> = ({
  setSignUp,
}) => {
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [singnInDetails, setSigninDetails] = useState<IsignInData>({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    const data: any = await dispatch(
      PostSignIn({
        email: singnInDetails.email,
        password: singnInDetails.password,
      })
    );
    if (data) {
      localStorage.setItem("token", data.payload.data.access_token);
    }

    navigate("/");
    setSigninDetails({ email: "", password: "" });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={() => {}} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={singnInDetails?.email}
              onChange={(e) =>
                setSigninDetails({ ...singnInDetails, email: e.target.value })
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={singnInDetails.password}
              onChange={(e) =>
                setSigninDetails({
                  ...singnInDetails,
                  password: e.target.value,
                })
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSignIn()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item onClick={() => setSignUp(true)}>
                <Typography className="link">
                  Don't have an account? Sign Up
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
