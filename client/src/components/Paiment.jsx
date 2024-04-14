import React from "react";
import Lottie from "react-lottie";
import paiment from "../lotties/Paiment.json";

const Paiment = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: paiment,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pointer-events-none">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default Paiment;
