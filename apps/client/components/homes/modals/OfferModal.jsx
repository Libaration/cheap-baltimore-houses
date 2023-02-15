import { Button, Modal, Input, Textarea, Text } from "@nextui-org/react";
import { useState } from "react";
import Mailto from "react-mailto.js";
const OfferModal = ({ closeHandler, visible, address }) => {
  const [offer, setOffer] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "offer":
        setOffer(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Send your offer.
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="warning"
          size="lg"
          placeholder="Email"
          value={email}
          name="email"
          onChange={changeHandler}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="warning"
          size="lg"
          placeholder="Offer Amount"
          value={offer}
          name="offer"
          onChange={changeHandler}
        />
        <Textarea
          clearable
          bordered
          fullWidth
          color="warning"
          size="lg"
          placeholder="Further inquiries or comments"
          value={message}
          name="message"
          onChange={changeHandler}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={closeHandler} color="success">
          <Mailto
            secure={true}
            to="seabornleads@gmail.com"
            subject={`Offer of ${offer} on ${address}`}
            body={message}
          >
            Send
          </Mailto>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default OfferModal;
