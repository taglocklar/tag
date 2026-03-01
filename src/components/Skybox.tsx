import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import skyboxImage from '../assets/skybox_360_v2.jpg';

interface SkyboxProps {
  onReady?: () => void;
}

/** Rotating sphere with the equirectangular panorama mapped to its inner surface */
function PanoramaSphere({ onReady }: { onReady?: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture(skyboxImage);
  const notified = useRef(false);

  texture.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    if (texture && !notified.current) {
      notified.current = true;
      onReady?.();
    }
  }, [texture, onReady]);

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

export default function Skybox({ onReady }: SkyboxProps) {
  return (
    <Canvas
      className="skybox-canvas"
      camera={{ fov: 80, near: 0.1, far: 1000, position: [0, 0, 0.1] }}
      gl={{ antialias: true, alpha: false, powerPreference: 'default' }}
      onCreated={({ gl }) => {
        const canvas = gl.domElement;
        canvas.addEventListener('webglcontextlost', (e) => {
          e.preventDefault();
        });
      }}
    >
      <PanoramaSphere onReady={onReady} />
    </Canvas>
  );
}
