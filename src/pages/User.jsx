import styled from "styled-components";
import Bang from "../components/Bang";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import "../App.css";
import { format } from "timeago.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile, getUserById } from "../redux/apiCalls";

const Container = styled.div``;

const Wrapper = styled.div``;

const User = () => {
  var checkError;
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const userId = user._id;

  useEffect(() => {
    getUserById(userId,dispatch);
  }, [dispatch]);

  // edit
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!file) {
      checkError = true;
      showToast(checkError);
    }else{
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        checkError = true;
        showToast(checkError);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const profile = { ...inputs, avata: downloadURL };
          console.log(userId);
          console.log(profile);
          updateProfile(userId, profile, dispatch)
            .catch((e) => {
              if (e.code === "ERR_BAD_RESPONSE") {
                checkError = true;
              } else {
                checkError = false;
              }
            })
            .finally(() => {
              showToast(checkError);
              // window.location.reload();
            });
        });
      }
    )};
  };

  const showToast = (checkError) => {
    if (checkError) {
      toast.error("Thất bại", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (!checkError) {
      toast.success("Thành công", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Container>
      <Navbar />
      <Bang />
      <Wrapper>
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Thông tin cá nhân</h1>
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img src={user.profile.avata} alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{user.username}</span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Chi tiết tài khoản</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.username}</span>
                </div>
                <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {format(user.createdAt)}
                  </span>
                </div>
                <span className="userShowTitle">Chi tiết liên hệ</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user.profile.phone}
                  </span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">{user.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {user.profile.address}
                  </span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder={user.profile.fullName}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      name="phone"
                      type="phone"
                      placeholder={user.profile.phone}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      name="address"
                      type="text"
                      placeholder={user.profile.address}
                      onChange={handleChange}
                      className="userUpdateInput"
                    />
                  </div>
                  {/* <select name="sex" className="userUpdateItem">
                    <option name="sex" value="Giới tính" onChange={handleChange} selected>
                      {user.profile.sex}
                    </option>
                    <option name="sex" value="Nam"  onChange={handleChange}>Nam</option>
                    <option name="sex" value="Nữ" onChange={handleChange}>Nữ</option>
                    <option name="sex" value="Khác" onChange={handleChange}>Khác</option>
                  </select> */}
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src={user.profile.avata}
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                  <button onClick={handleClick} className="userUpdateButton">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default User;
