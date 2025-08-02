// Home.jsx or wherever you're rendering it
import React from "react";
import CateSamp from "./CateSamp";

const HomeCard = () => {
  return (
    <>
      <CateSamp title="Fiction" subject="fiction" />
      <CateSamp title="Non-fiction" subject="non-fiction" />
      <CateSamp title="Mystery" subject="mystery" />
    </>
  );
};

export default HomeCard;
