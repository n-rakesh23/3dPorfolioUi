
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Preload, OrbitControls } from '@react-three/drei';
import ThreeDExperience from '../features/ThreeD/ThreeDExperience';

function HomePage() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      // The canvas is fixed, and the HTML content scrolls over it
      style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}
    >
      {/* ScrollControls sets up the scroll context for the 3D scene. pages={4} means 4x viewport height */}
      <ScrollControls pages={4} damping={0.25}>
        
        {/* The core 3D scene contents */}
        <ThreeDExperience /> 
        
        {/* Helper for development: Allows mouse interaction with the scene */}
        {/* <OrbitControls enableZoom={true} /> */}

        {/* 2D HTML Content Layer */}
        <Scroll html>
          {/* Section 1 (Viewport 1) */}
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '3em' }}>
            <h1>RAKESH NAYAK</h1>
            <p style={{ fontSize: '0.5em' }}>Fullstack & 3D Developer</p>
          </div>

          {/* Section 2 (Viewport 2) */}
          <div style={{ height: '100vh', padding: '50px', background: 'rgba(255, 255, 255, 0.9)', color: 'black', opacity: 0.9 }}>
            <h2 style={{ marginBottom: '20px' }}>PROJECTS OVERVIEW</h2>
            <p>This section will feature your E-Commerce, Chat, and Admin Dashboard projects.</p>
          </div>

          {/* Section 3 & 4 (Viewports 3 & 4) - provides vertical space for the scroll effect */}
          <div style={{ height: '200vh', padding: '50px' }}>
            <h2 style={{ marginTop: '150vh' }}>CONTACT ME</h2>
            {/* The model will be visible and move throughout this 200vh space */}
          </div>
          
        </Scroll>
      </ScrollControls>
      
      <Preload all />
    </Canvas>
  );
}

export default HomePage;
 