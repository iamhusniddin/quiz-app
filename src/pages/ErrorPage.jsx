import React from "react";

//rrd imports
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>
            {" "}
            404 Error: Page Not Found. But don't worry, our developers are on a
            treasure hunt to recover it. Meanwhile, enjoy some virtual tea and
            biscuits :)
          </h3>
          <Link to="/" className="btn">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <div>
        <h3>
          Oops! Looks like our web page did a somersault and landed in a digital
          rabbit hole. We're working on untagling the code. Hang tight{" "}
          <span className="text-red-500">:)</span>
        </h3>
        <Link to="/" className="btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
