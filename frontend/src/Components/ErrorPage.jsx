import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Ooooh No!</h1>
      <p>We encountered a problem with your request. </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}