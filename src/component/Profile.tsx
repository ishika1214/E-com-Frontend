import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import profile from "../assets/user.avif";
import "./profile.css";
import { Button, Input, TextField } from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import {
  GetCurrentUser,
  Iuser,
  UpdateUser,
  UploadUserProfilePic,
} from "../redux/user/userSlice";

interface IUserInput {
  firstName: string;
  lastName: string;
  contact: string;
  profilePic: string;
}

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userData = useSelector<RootState, Iuser>(
    (state) => state.userSlice.user
  );

  const [user, setUser] = useState<IUserInput>({
    firstName: "",
    lastName: "",
    contact: "",
    profilePic: "",
  });

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = new FormData();
      file.append("image", event.target.files[0]);
      dispatch(
        UploadUserProfilePic({
          files: file,
        })
      );
    }
  };

  const updateProfile = () => {
    if (userData.id) {
      dispatch(
        UpdateUser({
          firstName: user.firstName,
          contact: user.contact,
          lastName: user.lastName,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(GetCurrentUser());
  }, []);

  useEffect(() => {
    if (userData) {
      setUser({
        firstName: userData.firstName,
        lastName: userData.lastName,
        contact: userData.contact,
        profilePic: userData.profilePic,
      });
    }
  }, [userData]);

  return (
    <div className="profile-container">
      <div>
        <div className="back-button" onClick={() => navigate("/")}>
          <KeyboardBackspaceIcon />
        </div>
        <div className="profile-detail">
          <div className="profile-img">
            <img src={user.profilePic} alt="" className="image-profie" />

            <div style={{ padding: "10px" }}>
              <Button
                variant="outlined"
                component="label"
                className="pic-button"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
                <FileUploadIcon color="primary" />
                upload Image
              </Button>
            </div>
          </div>
          <div style={{ display: "grid" }}>
            <div className="profile-sec">
              <label htmlFor="">First Name</label>
              <input
                id="standard-basic"
                type="text"
                value={user.firstName}
                className="text-feild"
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </div>
            <div className="profile-sec">
              <label htmlFor="">Last Name</label>
              <input
                id="standard-basic"
                type="text"
                value={user.lastName}
                className="text-feild"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
            <div className="profile-sec">
              <label htmlFor="">Contact no</label>
              <input
                id="standard-basic"
                type="text"
                value={user.contact}
                className="text-feild"
                onChange={(e) => setUser({ ...user, contact: e.target.value })}
              />
            </div>
            <div className="profile-sec">
              <label htmlFor="">Email</label>
              <input
                id="standard-basic"
                type="text"
                value={userData?.email}
                className="text-feild"
                // onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
          </div>
          <div className="save-button">
            <Button variant="contained" onClick={updateProfile}>
              Update Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
