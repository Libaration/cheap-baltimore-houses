import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model, Instances } from "./GlbHome";
import {
  OrbitControls,
  Stage,
  ScrollControls,
  PresentationControls,
} from "@react-three/drei";
import { useRef, useEffect } from "react";
const GlbHomeRender = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        // canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize(); // trigger handleResize when the component is first rendered
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="glb-home-render"
      style={{
        position: "relative",
        overflow: "visible",
        height: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 50, 150], fov: 30, zoom: 0.7 }}
        ref={canvasRef}
        style={{ width: "100%" }}
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
  );
};

export default GlbHomeRender;