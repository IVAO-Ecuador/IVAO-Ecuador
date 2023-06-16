'use client'

import React, { useEffect, useRef, MouseEvent } from "react";
import createGlobe from "cobe";

const GlobeCanvas = () => {
  const canvasRef = useRef<any>();

  useEffect(() => {
    let phi = 0;
    let theta = 0;
    let isMouseDown = false;
    let lastUpdate = Date.now();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1.8,
      width: 700 * 2,
      height: 700 * 2,
      phi: 10,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 1, 1],
      opacity: 0.90,
      glowColor: [0.4705, 0.3686, 1],
      markers: [
        // longitude latitude
        { location: [-1.38239, -77.383406], size: 0.1 }, // Ecuador
        { location: [-34.6131500, -58.3772300], size: 0.08 }, // Buenos Aires
        { location: [34.0522, -118.2437], size: 0.08 }, // Los Ángeles
        { location: [25.7617, -80.1918], size: 0.08 }, // Miami
        { location: [40.4168, -3.7034], size: 0.08 }, // Madrid
        { location: [38.9637, 35.2433], size: 0.08 }, // Turquía
        { location: [-25.2744, 133.7751], size: 0.08 }, // Australia
        { location: [35.6895, 139.6917], size: 0.08 }, // Tokio
        { location: [-8.876628764395946, 34.49106110286225], size: 0.08 }, // Africa
        { location: [10.453117593963327, -9.275220401525928], size: 0.08 }, // Guinea
        { location: [23.19889155444948, 79.92569886670547], size: 0.08 }, // India
        { location: [63.19415996393908, 75.4448610626805], size: 0.08 } // Rusia
      ],
      onRender: (state:any) => {
        const now = Date.now();
        if (now - lastUpdate > 100) {
          phi -= 0.0009;
        }
        state.phi = phi;
        state.theta = theta;
      }
    });

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDown) {
        phi += event.movementX * 0.01;
        theta += event.movementY * 0.01;
        lastUpdate = Date.now();
      }
    };

    canvasRef.current.addEventListener("mousedown", handleMouseDown);
    canvasRef.current.addEventListener("mouseup", handleMouseUp);
    canvasRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      globe.destroy();
      canvasRef.current.removeEventListener("mousedown", handleMouseDown);
      canvasRef.current.removeEventListener("mouseup", handleMouseUp);
      canvasRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: 800, height: 800, maxWidth: "150%", aspectRatio: 1 }} />;
};

export default GlobeCanvas;