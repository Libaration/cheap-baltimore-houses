import { Button, Modal, Input, Textarea, Text } from "@nextui-org/react";
const OfferModal = ({ closeHandler, visible }) => {
  return (
    <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Send your offer.
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input clearable bordered fullWidth color="primary" size="lg" placeholder="Email" />
        <Input clearable bordered fullWidth color="primary" size="lg" placeholder="Offer Amount" />
        <Textarea
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Further inquiries or comments"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={closeHandler} color="success">
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default OfferModal;
