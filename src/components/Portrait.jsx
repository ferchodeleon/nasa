import { useEffect, useRef } from "react";
import "../styles/Portrait.css";

export const Portrait = () => {
  const typewriteRef = useRef(null);

  const restartAnimation = () => {
    const element = typewriteRef.current;
    element.style.animation = "none";
    setTimeout(() => (element.style.animation = ""), 500);
  };

  useEffect(() => {
    const element = typewriteRef.current;

    const handleAnimationEnd = () => {
      setTimeout(restartAnimation, 500);
    };

    element.addEventListener("animationend", handleAnimationEnd);

    return () => {
      element.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <>
      <section className="portrait-container">
        <h1>BEYOND THE STARS</h1>
        <p ref={typewriteRef}>Capturing Space and NASA´s wonders</p>
      </section>
    </>
  );
};
