import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { StandardBlueButton } from "../../features/styles/Buttons";
import { Container } from "./style";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <Container>
      <div>
        <h1>Something went wrong :(</h1>
        <h4>
          {error.status || error.statusText
            ? `${error.status} | ${error.statusText}`
            : error.message}
        </h4>
        <StandardBlueButton onClick={() => navigate(-1)}>
          <IoArrowBackSharp size={13} />
          Go back
        </StandardBlueButton>
      </div>
    </Container>
  );
};

export default Error;
