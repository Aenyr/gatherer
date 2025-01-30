"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Cursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const uniforms = {
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uPrevMouse: { value: new THREE.Vector2(0.5, 0.5) }, // Add previous mouse position
      uResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      uTrail: { value: 0.1 }, // Control the trail length
    };

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
     precision mediump float;
uniform vec2 uMouse;
uniform vec2 uPrevMouse;
uniform vec2 uResolution;
uniform float uTrail;

void main() {
  vec2 st = gl_FragCoord.xy / uResolution;
  vec2 mouse = mix(uPrevMouse, uMouse, uTrail); // Smooth interpolation
  mouse.x *= uResolution.x / uResolution.y; // Keep it a circle
  st.x *= uResolution.x / uResolution.y;

  float dist = distance(st, mouse);
  float alpha = smoothstep(0.2, 0.0, dist); // Adjust 0.3 for trail spread

  gl_FragColor = vec4(1.0, 0.5, 0.0, alpha * 0.8); // Slightly transparent
}
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const updateMouse = (event) => {
      const newX = event.clientX / window.innerWidth;
      const newY = 1.0 - event.clientY / window.innerHeight;

      // Smooth transition between previous and current cursor position
      uniforms.uPrevMouse.value.lerp(
        uniforms.uMouse.value,
        uniforms.uTrail.value
      );

      // Update current mouse position
      uniforms.uMouse.value.set(newX, newY);
    };

    window.addEventListener("mousemove", updateMouse);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none"
    />
  );
}
