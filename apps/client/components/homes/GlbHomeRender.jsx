import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./GlbHome";
import { OrbitControls, Stage } from "@react-three/drei";
import { useRef, useEffect } from "react";
const GlbHomeRender = () => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 50, 150], fov: 30, zoom: 0.7 }}
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
  );
};

export default GlbHomeRender;
