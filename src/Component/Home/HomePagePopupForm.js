import React, { useEffect, useState, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImage from "../../images/sliderimages/4.png"; 
import BannerImageSmall from "../../images/sliderimages/44.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function HomePagePopupForm() {
  const [showModal, setShowModal] = useState(false);
  const showModalCallback = useCallback(() => {
    setShowModal(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(showModalCallback, 9200); 

    return () => {
      clearTimeout(timer);
    };
  }, [showModalCallback]);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="aos">
        <Modal
          show={showModal}
          onHide={handleClose}
          id="homePageModal"
          tabIndex="-1"
          aria-labelledby="homePageModalLabel"
          aria-hidden="true"
          dialogClassName="modal-xl"
          fade
        >
          <Modal.Header className="bg-white">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <h4 className="modal-title para-color d-none d-md-block">
                  Elegant Orchards Estate (Groavy Buildcon) has proudly received
                  the Times Business Award for 2024.
                </h4>
                <h4 className="modal-title para-color d-md-none d-block">
                  2024: Award-Winners Premium Managed Farmland Karnataka
                </h4>
              </div>
              <Button
                variant="danger"
                onClick={handleClose}
                style={{ marginLeft: "auto" }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          </Modal.Header>

          <Modal.Body className="p-0">
            <Link to="/elegantorchards/" onClick={handleClose}> 
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={BannerImageSmall} 
                />
                <img
                  src={BannerImage}
                  alt="Home Page Banner"
                  width="100%"
                  height="auto"
                  className="w-100"
                />
              </picture>
            </Link>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default HomePagePopupForm;
