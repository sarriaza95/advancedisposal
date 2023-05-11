import React, { useContext, useState, useEffect } from "react";
import { DatePicker, Button, Modal } from "antd";
import { Row, Col } from "reactstrap";
import { Store } from "../../App";
import PDF from "../Pdf/Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const { RangePicker } = DatePicker;

export default function Text() {
  const store = useContext(Store);
  const [Message, setMessage] = useState("");
  const [ModalSend, setModalSend] = useState(false);
  const [Send, setSend] = useState(true);
  const [finalBlob, setFinalBlob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [finalloading, setFinalloading] = useState(false);

  

  const sendMessage = async () => {
    
    setLoading(true);
    const contactFormId = "350";
    const contactFormUrl = `https://wastemanagementdumpsters.net/wp-json/contact-form-7/v1/contact-forms/${contactFormId}/feedback`;
    const formData = new FormData();

    formData.append("DumpsterSize", store.DumspterSelect);
    formData.append("Address", store.AddressSelect);
    formData.append("WasteType", store.WasteTypeSelect);
    formData.append("Fullname", store.FullName);
    formData.append("Phone", store.PhoneNumber);
    formData.append("Email", store.EmailAddress);
    formData.append("Filepdf", finalBlob, `tkb-quote.pdf`);

    formData.append("subject", `New message sent from ${window.location.href}`);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    fetch(contactFormUrl, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setMessage(data.message);
        setModalSend(false)
        setFinalloading(true)
      })
      .catch((error) => console.log("error", error));
  };


  useEffect(() => {
    if (store.FullName !== "" && store.PhoneNumber !== "" && store.EmailAddress !== "") {
      setSend(false);
    } else {
      setSend(true);
    }
  }, [store.FullName, store.PhoneNumber, store.EmailAddress]);

  const dateFormat = "DD/MM/YYYY";
  return (
    <>
      <Row>
        <Modal open={finalloading} footer={null} closable={false}>
          <Player
            autoplay
            loop
            src="https://wastemanagementdumpsters.net/wp-content/uploads/2021/10/send-message.json"
            style={{ height: "300px", width: "300px" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
          <p className="text-center-message">{Message}</p>
          <Button
            className="btn-home"
            type="primary"
            href="/"
          >
            Go to home
          </Button>
        </Modal>
      </Row>
      <Row className="step-3 justify-content-center">

        {!Send ? (
          <PDFDownloadLink
            document={<PDF store={store} />}
            fileName="Request-Dumpster-Quote.pdf"
          >
            perra
            {({ blob, url, loading, error }) =>
              blob ? setFinalBlob(blob) : null
            }
          </PDFDownloadLink>
        ) : null}
      </Row>
    </>
  );
}