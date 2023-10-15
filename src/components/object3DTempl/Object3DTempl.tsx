import React, { FC, useRef, MouseEvent } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Object3DScene: FC = () => {
  const controls = useRef<any>(null);

  // Update the camera position to follow the cursor
  const handleMouseMove = (event: MouseEvent) => {
    if (controls.current) {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = -(clientY / window.innerHeight) * 2 + 1;
      controls.current.object.position.x = x * 2;
      controls.current.object.position.y = y * 2;
      controls.current.object.lookAt(0, 0, 0);
    }
  };

  return (
    <div className="absolute aspect-square" onMouseMove={handleMouseMove}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="rgb(85, 230, 165)" position={[0, 0, 5]} />
        <mesh scale={3} rotation={[0, 1, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls ref={controls} enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Object3DScene;
