"use client";

import { useRef, useEffect } from "react";

export function PlaceLike() {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      console.log("Element found:", buttonRef.current);
      buttonRef.current.style.backgroundColor = "red"; // Example action
    }
  }, []);

  return (
    <div>
      <button ref={buttonRef}>Click Me</button>
    </div>
  );
}
