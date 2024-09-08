import React from "react";
import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";

export default function Banner({ title }) {
  return (
    <>
      <Zoom>
        <center>
          <h1 className="my-5 ">
            <span className="titleHeading">{title}</span>
          </h1>
        </center>
      </Zoom>
    </>
  );
}
