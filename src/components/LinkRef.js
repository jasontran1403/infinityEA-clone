import React from "react";
import Axios from "axios";
import { normalAlert } from "./Swal";

// reactstrap components
import { Button, Modal, ModalBody } from "reactstrap";

function LinkRef({ isOpen, toggle, current }) {
  const [id, setId] = React.useState("");
  const [isLinkRefModalOpen, setIsLinkRefModalOpen] = React.useState(false);

  const toggleLinkRefModal = () => {
    setIsLinkRefModalOpen(!isLinkRefModalOpen);
  };

  const handleLink = () => {
    if (!isValidID(id)) {
      normalAlert("ID không hợp lệ, vui lòng thử lại!", "error");
      return;
    }

    let data = JSON.stringify({
      "current": current,
      "refferal": id
    });

    console.log({current, id});
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/update-ref',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    Axios.request(config)
      .then((response) => {
        if (response.data.status === 200) {
          normalAlert("Cập nhật người giới thiệu thành công!", "success");
          toggle();
        } else if (response.data.status === 404) {
          normalAlert("ID người giới thiệu không tồn tại!", "error");
        }
      });
  }

  function isValidID(id) {
    const idRegex = /^[0-9]+$/;
    return idRegex.test(id);
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className=" modal-header">
          <h5 className=" modal-title text-black" id="exampleModalLabel">
            Tài khoản của bạn chưa liên kết với người giới thiệu!
          </h5>
        </div>
        <ModalBody style={{ color: "black", display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="text" id="text" placeholder="Nhập id người giới thiệu..." value={id} style={{ width: "100%" }}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <i className=" modal-title text-red" id="exampleModalLabel">
            Nếu không liên kết, người giới thiệu của bạn sẽ không được hưởng quyền lợi!
          </i>

          <Button color="primary" type="button" onClick={handleLink}>
            Liên kết
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
}

export default LinkRef;