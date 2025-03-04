import { useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='error-page' style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.statusText || error.message}</p>
      <div className='go-back-wrapper'>
        <i className='bi bi-arrow-right'></i>
        <a href='/portfolio2/'>Go back to Home</a>
        <i className='bi bi-arrow-left'></i>
      </div>
    </div>
  );
};

export default ErrorPage;
