import { Button, Modal, Input, Textarea, Text } from "@nextui-org/react";
import { isInteger, set } from "lodash";
import { useState } from "react";
const OfferModal = ({ closeHandler, visible, address, cover_image, homeId }) => {
  const [shouldCheck, setShouldCheck] = useState(false);
  const [offer, setOffer] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    "Hello,  I recently came across the property listing you have posted, and I am writing to express my interest in it. I would be grateful if you could kindly share further details or schedule a time for a discussion."
  );
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("default"); // ["success", "error"
  const handleSendEmail = async () => {
    setShouldCheck(true);
    if (email && offer && message) {
      const r = await fetch("/api/checkEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ offer, email, message, address, cover_image, homeId }),
      });
      const { status } = await r.json();
      if (status === "success") {
        try {
          fetch("/api/sendOfferEmail", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ offer, email, message, address, cover_image, homeId }),
          });
        } catch (error) {
          setStatus("error");
          setResponse("Email failed to send");
        }
        setResponse("Email sent successfully");
        setStatus("success");
        await closeHandler();
      } else {
        setStatus("error");
        setResponse("Email is invalid");
      }
    }
    setShouldCheck(false);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "offer":
        if (isNaN(value) || value.includes(".") || value.includes(",")) {
          setResponse("Offer must be a number with no special characters");
          return;
        }
        setOffer(value);
        break;
      case "message":
        if (message.length > 500) {
          setResponse("Message must be less than 500 characters");
          return;
        }
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
      <Modal.Header css={{ flexDirection: "column" }}>
        <span
          className="text-lg text-[#00b0ff]"
          style={{ fontFamily: "Poppins", letterSpacing: "0.5px" }}
        >
          Send your offer.
        </span>
        <span className={response.includes("success") ? "text-green-500" : "text-red-500"}>
          {response}
        </span>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          size="lg"
          placeholder="Email"
          color={status}
          value={email}
          name="email"
          onChange={changeHandler}
          className="mb-2"
        />
        <Input
          clearable
          bordered
          fullWidth
          helperText="No commas, decimals or special characters"
          labelLeft="$"
          size="lg"
          placeholder="Offer Amount"
          value={offer}
          name="offer"
          color={status}
          onChange={changeHandler}
        />
        <Textarea
          clearable
          bordered
          fullWidth
          size="lg"
          placeholder="Further inquiries or comments"
          value={message}
          name="message"
          color={status}
          onChange={changeHandler}
          className="mt-4"
          helperColor="primary"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={handleSendEmail} color="success" disabled={shouldCheck}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default OfferModal;
