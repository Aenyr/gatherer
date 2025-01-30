"use client"; // Ensure it's a client component

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function DraggableImage() {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    if (imgRef1.current) {
      Draggable.create(imgRef1.current, {
        type: "x, y",
        inertia: true,
      });
      gsap.to(imgRef1.current, {
        rotation: -360,
        duration: 40,
        repeat: -1,
        ease: "linear",
      });
    }
    if (imgRef1.current) {
      Draggable.create(imgRef2.current, {
        type: "x, y",
        inertia: true,
      });
      gsap.to(imgRef2.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    }
    if (imgRef1.current) {
      Draggable.create(imgRef3.current, {
        type: "x, y",
        inertia: true,
      });
      gsap.to(imgRef3.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "linear",
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <img
        ref={imgRef1}
        src="images/candy.png"
        alt="Draggable"
        className="w-40 cursor-grab"
      />
      <img
        ref={imgRef2}
        src="images/candy1.png"
        alt="Draggable"
        className="w-20 cursor-grab"
      />
      <img
        ref={imgRef3}
        src="images/pngegg.png"
        alt="Draggable"
        className="w-40 cursor-grab"
      />
    </div>
  );
}
