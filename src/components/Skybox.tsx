import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import skyboxImage from '../assets/skybox_360_clouds_mountains.jpg';

/** Rotating sphere with the equirectangular panorama mapped to its inner surface */
function PanoramaSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(skyboxImage);

  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 64, 32]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function Skybox() {
  return (
    <Canvas
      className="skybox-canvas"
      camera={{ fov: 100, near: 0.1, far: 1000, position: [0, 0, 0.1] }}
      gl={{ antialias: true, alpha: false, powerPreference: 'default' }}
      onCreated={({ gl }) => {
        // Handle context loss gracefully — auto-restore
        const canvas = gl.domElement;
        canvas.addEventListener('webglcontextlost', (e) => {
          e.preventDefault();
        });
        canvas.addEventListener('webglcontextrestored', () => {
          gl.compile;
        });
      }}
    >
      <PanoramaSphere />
    </Canvas>
  );
}
