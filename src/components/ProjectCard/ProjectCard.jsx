import { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";
import ModalMessageComponents from "../ModalMessageComponent/ModalMessageComponent";
import "./ProjectCard.scss";

function ProjectCard({ title, imgSrc, description, btnHrefLive, btnHrefGitHub }) {
  const [modalShow, setModalShow] = useState(false);

  const handleGitHubClick = (e) => {
    if (btnHrefGitHub === "pureWordPress") {
      e.preventDefault();
      setModalShow(true);
    }
  };

  return (
    <Col sm={6} md={4}>
      <Card>
        <Card.Img style={{ height: "11rem", objectPosition: "top" }} className='object-fit-cover' variant='top' src={imgSrc} />
        <Card.Body>
          <Card.Title className='fs-6'>{title}</Card.Title>
          <Card.Text style={{ height: "6rem" }}>{description}</Card.Text>

          <div className='button-wrapper gap-2'>
            <Button href={btnHrefLive} target='_blank' rel='noopener noreferrer'>
              Live site
            </Button>

            <Button href={btnHrefGitHub} target='_blank' rel='noopener noreferrer' onClick={handleGitHubClick}>
              GitHub
            </Button>

            <Button href={btnHrefGitHub} target='_blank' rel='noopener noreferrer' onClick={handleGitHubClick}>
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      <ModalMessageComponents show={modalShow} onHide={() => setModalShow(false)} title='This project is built with pure WordPress'>
        <p className='text-primary-emphasis'>
          The source code of project <span className='fw-semibold text-primary-emphasis'>{title}</span> is not available on GitHub
          because this project was created using pure WordPress without custom coding.
        </p>
      </ModalMessageComponents>
    </Col>
  );
}

export default ProjectCard;
