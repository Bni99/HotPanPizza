import React, { useState } from "react";
import { StandardInput } from "../styles/Forms";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();
    navigate(`/order/${query}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <StandardInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search your order.."
      />
    </form>
  );
};

export default SearchOrder;
