import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Modal from "react-modal";
import styles from "../styles/LocationModal.module.scss";
import { MdReportGmailerrorred } from "react-icons/md";
import { Link } from "react-router-dom";

const LocationModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    overlay: {
      position: "fixed",
      zIndex: 1020,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0,0,0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      padding: "0",
      right: "auto",
      bottom: "auto",
      width: "400px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };
  const [pincode, setPincode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const pincodeHandler = () => {
    if (pincode.length < 6) {
      setErrorMessage(true);
      return;
    }
    setIsOpen(false);
  };
  return (
    <div className={styles.locationModal}>
      <p onClick={openModal} style={{ cursor: "pointer" }}>
        Select your address
      </p>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          className={styles.modalText}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <h3
            className={styles.head}
            style={{
              float: "left",
              background: "#f1f1f1",
              padding: "15px 30px",
            }}
          >
            Choose your location
          </h3>
          <p
            style={{
              fontSize: "12px",
              margin: "10px 0px",
              padding: "0px 30px",
            }}
          >
            Select a delivery location to see product availability and delivery
            options
          </p>
          <Link
            to="/signin"
            style={{
              width: "85%",
              margin: "auto",
              background: "#ffd342",
              padding: "8px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Sign in to see your address
          </Link>
          <p
            style={{
              fontSize: "12px",
              color: "#767676",
              textAlign: "center",
              margin: "10px 0px",
            }}
          >
            or enter an Indian pincode
          </p>
          <div
            className={styles.input}
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              //   justifyContent: "Center",
              padding: "0px 20px",
              margin: "0px 0px 10px 10px",
            }}
          >
            <input
              type="text"
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              style={{
                // height: "31px",
                flex: "3",
                padding: "3px 7px",
                background: "white",
                border: " 1px solid #888C8C",
                borderRadius: "3px",
                boxShadow: "0 1px 2px 0 rgb(15,17,17,50%)",
                outline: "none",
              }}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <button
              style={{
                borderRadius: "8px",
                padding: "5px 40px",
                border: "1px solid #888C8C",
                background: "white",
                boxShadow: "0 2px 5px 0 rgb(213,217,217,50%)",
                cursor: "pointer",
              }}
              onClick={pincodeHandler}
            >
              Apply
            </button>
          </div>
          <div className={styles.errorMessage}>
            {errorMessage && (
              <p
                style={{
                  color: "#BA0933",
                  padding: "0px 30px",
                  marginBottom: "10px",
                }}
              >
                {" "}
                <MdReportGmailerrorred
                  style={{
                    fontSize: "20px",
                    position: "relative",
                    top: "4px",
                  }}
                />{" "}
                Please enter a valid pincode{" "}
              </p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LocationModal;
