// src/pages/HomePage.jsx
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Preload, OrbitControls } from '@react-three/drei';
import ThreeDExperience from '../features/threeD/ThreeDExperience';

function HomePage() {
  return (
    // The main canvas that takes up the viewport
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}
    >
      {/* Drei's component to link scroll to 3D scene */}
      <ScrollControls pages={4} damping={0.25}>
        
        {/* The 3D content */}
        <ThreeDExperience /> 
        
        {/* Development Helper: Allows mouse control for debugging */}
        <OrbitControls enableZoom={true} /> 

        {/* 2D HTML Content (will scroll over the 3D scene) */}
        <Scroll html>
          {/* Section 1: Intro */}
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <h1>RAKESH NAYAK</h1>
            <p>3D & Fullstack Developer Portfolio</p>
          </div>

          {/* Section 2: Projects */}
          <div style={{ height: '100vh', background: 'rgba(255, 255, 255, 0.9)', padding: '50px', color: 'black' }}>
            <h2>PROJECTS</h2>
            <p>Details for your e-commerce and chat apps will go here.</p>
          </div>

          {/* Section 3: More space for About/Contact */}
          <div style={{ height: '200vh' }}>
            {/* Extended content area to test scrolling */}
          </div>
          
        </Scroll>
      </ScrollControls>
      
      <Preload all />
    </Canvas>
  );
}

export default HomePage;