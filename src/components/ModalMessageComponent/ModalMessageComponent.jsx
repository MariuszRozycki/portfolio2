import { Modal, Button } from "react-bootstrap";

function ModalMessageComponents({ show, onHide, title, children }) {
  return (
    <Modal show={show} size='lg' aria-labelledby='modal-message' onHide={onHide} centered>
      <Modal.Header className='bg-primary-subtle' closeButton>
        <Modal.Title className='fw-semibold text-primary-emphasis' id='modal-message'>
          Info message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-light-subtle'>
        <h4 className='h5 fw-semibold text-primary-emphasis'>{title}</h4>
        {children}
      </Modal.Body>
      <Modal.Footer className='bg-primary-subtle'>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMessageComponents;
