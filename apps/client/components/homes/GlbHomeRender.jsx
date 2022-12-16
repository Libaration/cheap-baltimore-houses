import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./GlbHome";
import { OrbitControls, Stage } from "@react-three/drei";
import { useRef, useEffect } from "react";
const GlbHomeRender = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      let vh = window.innerHeight;
      let vw = window.innerWidth;
      if (window.innerWidth !== vw || window.innerHeight !== vh) {
        canvasRef.current.width = `${vh}px`;
        canvasRef.current.height = `${vw}px`;
      }
    };
    handleResize(); // trigger handleResize when the component is first rendered
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{ overflow: "visible", height: "600px", pointerEvents: "auto" }}
    >
      <div
        className="glb-home-render"
        style={{
          position: "relative",
          overflow: "visible",
          height: "100vh",
          backgroundColor: "transparent",
          bottom: "30vh",
        }}
      >
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [0, 50, 150], fov: 30, zoom: 0.7 }}
          ref={canvasRef}
          style={{ zIndex: 1 }}
        >
          <ambientLight intensity={0.25} />
          <Suspense fallback={null}>
            <Stage environment={"night"} shadows={"contact"} intensity={0.5}>
              <OrbitControls
                autoRotate={true}
                enablePan={false}
                enableZoom={false}
              />
              <Model />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default GlbHomeRender;
