import React, { useState, useRef } from "react";

const AnimatedText = ({ initialText }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+=/";
  const intervalRef = useRef(null);
  const [text, setText] = useState(initialText);

  const handleMouseOver = () => {
    if (intervalRef.current) return; // Menghindari memulai animasi baru jika animasi masih berjalan

    let iteration = 0;
    intervalRef.current = setInterval(() => {
      setText((prevText) => {
        return prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      iteration += 1 / 4;
    }, 25);
  };

  return <h1 onMouseOver={handleMouseOver}>HELLO, I'M {text}</h1>;
};

export default AnimatedText;
