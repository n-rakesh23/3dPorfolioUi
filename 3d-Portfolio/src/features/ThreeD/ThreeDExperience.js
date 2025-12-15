// src/features/threeD/ThreeDExperience.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function ThreeDExperience() {
  const meshRef = useRef();

  // Basic rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <>
      {/* PLACEHOLDER: Pink Rotating Cube */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>

      {/* Lighting for the scene */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
    </>
  );
}

export default ThreeDExperience;