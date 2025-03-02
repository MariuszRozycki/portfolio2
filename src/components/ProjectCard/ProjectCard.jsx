import { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";
import { ModalMessageComponents, ModalProjectDetails } from "../../components";
import "./ProjectCard.scss";

function ProjectCard({ project, title, imgSrc, description, btnHrefLive, btnHrefGitHub }) {
  const [modalShow, setModalShow] = useState(false);
  const [modalDetailsShow, setModalDetailsShow] = useState(false);

  const handleGitHubClick = (e) => {
    if (btnHrefGitHub === "pureWordPress") {
      e.preventDefault();
      setModalShow(true);
    }
  };

  return (
    <Col sm={6} md={4}>
      <Card className='project-card'>
        <Card.Img
          style={{ height: "11rem", objectPosition: "top" }}
          className='object-fit-cover'
          variant='top'
          src={imgSrc}
          alt={title}
        />
        <Card.Body>
          <h4 className='fs-5 fw-bold'>{title}</h4>
          <Card.Text>{description}</Card.Text>
          <div className='technologies-stack mt-4' dangerouslySetInnerHTML={{ __html: project.techStack }} />
          <div className='button-wrapper mt-5'>
            <Button className='gap-2' href={btnHrefLive} target='_blank'>
              <span>
                <i className='bi bi-window-fullscreen'></i>
              </span>
              Live site
            </Button>
            <Button className='gap-2' href={btnHrefGitHub} target='_blank' onClick={handleGitHubClick}>
              <span>
                <i className='bi bi-github'></i>
              </span>
              GitHub
            </Button>
            <Button className='gap-2 d-flex justify-content-center align-items-center' onClick={() => setModalDetailsShow(true)}>
              <span>
                <i className='bi bi-info-circle'></i>
              </span>
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      <ModalProjectDetails show={modalDetailsShow} onHide={() => setModalDetailsShow(false)} project={project} />

      <ModalMessageComponents show={modalShow} onHide={() => setModalShow(false)} title='This project is built with pure WordPress'>
        <p>
          The source code of <span className='fw-semibold'>{title}</span> is not available on GitHub because this project was created
          using pure WordPress without custom coding.
        </p>
      </ModalMessageComponents>
    </Col>
  );
}

export default ProjectCard;
