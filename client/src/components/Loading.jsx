import React from "react";
import Lottie from "react-lottie";
import loading from "../lotties/loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
      autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pointer-events-none">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
