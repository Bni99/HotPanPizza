import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { StandardBlueButton } from "../features/styles/Buttons";
import { StandardSubheading } from "../features/styles/Headings";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong !</h1>
      <StandardSubheading large>
        {error.status || error.statusText
          ? `${error.status | error.statusText}`
          : error.message}
      </StandardSubheading>
      <StandardBlueButton onClick={() => navigate(-1)}>
        <IoArrowBackSharp size={13} />
        Go back
      </StandardBlueButton>
    </div>
  );
};

export default Error;
