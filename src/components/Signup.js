import React from "react";
import Axios from "axios";
import { normalAlert } from "./Swal";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Signup({ isOpen, toggle }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [refferal, setRefferal] = React.useState("");

  const handleSignup = () => {
    if (email === "" || password === "" || firstName === "" || lastName === "") {
      normalAlert("Vui lòng nhập thông tin để đăng ký!", "warning");
      return;
    } else if (!isValidEmail(email)) {
      normalAlert("Email không hợp lệ, vui lòng thử lại!", "error");
      return;
    }

    console.log({ email, password });
    let data = JSON.stringify({
      "firstname": firstName,
      "lastname": lastName,
      "email": email,
      "password": password
    });

    let config = {
      method: 'post',
      url: 'http://localhost:8080/api/v1/auth/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    Axios.request(config)
      .then((response) => {
        if (response.status === 200) {
          normalAlert("Đăng ký thành công!", "success");
          localStorage.setItem("email", email);
          localStorage.setItem("access_token", response.data.access_token);
          window.location.reload();
        }
      })
      .catch((error) => {
        if (error.response.status == 403) {
          normalAlert("Email đã tồn tại trong hệ thống, vui lòng thử lại!", "error");
        } else if (error.response.status == 402) {
          normalAlert("Người giới thiệu không tồn tại trong hệ thống, vui lòng thử lại!", "error");
        }
      });

  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className=" modal-header">
          <h5 className=" modal-title text-black" id="exampleModalLabel">
            Đăng ký tài khoản
          </h5>
        </div>
        <ModalBody style={{ color: "black", display: "flex", flexDirection: "column", gap: "20px" }}>
          <input type="text" id="lastName" placeholder="Nhập họ..." value={lastName} style={{ width: "100%" }}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input type="text" id="firstName" placeholder="Nhập tên..." value={firstName} style={{ width: "100%" }}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input type="email" id="email" placeholder="Nhập email..." value={email} style={{ width: "100%" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input type="password" id="password" placeholder="Nhập mật khẩu..." value={password} style={{ width: "100%" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="email" id="refferal" placeholder="Nhập người giới thiệu..." value={refferal} style={{ width: "100%" }}
            onChange={(e) => {
              setRefferal(e.target.value);
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="button" onClick={handleSignup}>
            Sign In
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Signup;