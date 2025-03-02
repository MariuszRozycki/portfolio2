import { Modal, Button } from "react-bootstrap";
import "./ModalProjectDetails.scss";

const ModalProjectDetails = ({ show, onHide, project }) => {
  if (!project) return null;

  return (
    <Modal dialogClassName='modal-80w' show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className='text-dark'>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={project.imgSrc} alt={project.title} className='img-fluid mb-3' />
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div dangerouslySetInnerHTML={{ __html: project.descriptionDetails }} />

        <div className='mt-4 d-flex justify-content-between gap-4 buttons-wrapper'>
          <Button className='d-flex gap-1' href={project.btnHrefLive} target='_blank'>
            <span className='text-light d-flex justify-content-center align-items-center'>
              <i className='bi bi-window-fullscreen'></i>
            </span>
            Live
          </Button>
          <Button className='d-flex gap-1' href={project.btnHrefGitHub} target='_blank'>
            <span className='text-light d-flex justify-content-center align-items-center'>
              <i className='bi bi-github'></i>
            </span>
            GitHub
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalProjectDetails;
