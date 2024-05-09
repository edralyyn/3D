import React, { useRef } from 'react';
import { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './cssfiles/ThreeDObject.css';

// Component to render the 3D model
const ModelRenderer = ({ url }) => {
    // Load the GLB/GLTF file using the provided URL
    const { scene } = useGLTF(url);

    // Create a reference for the 3D model
    const modelRef = useRef();

    // Use the useFrame hook to rotate the model slowly
    useFrame(() => {
        if (modelRef.current) {
            // Rotate the model around the y-axis (vertically) slowly
           ; // Adjust the rotation speed as needed
        }
    });

    // Render the 3D model with the provided reference
    return <primitive object={scene} ref={modelRef} scale={[1, 1, 1]} />;
};

// New component for the red point light with pulsing effect
const PulsingRedLight = () => {
    // Create a reference for the point light
    const lightRef = useRef();

    // Use the useFrame hook to create a pulsing effect for the red point light
    useFrame((state) => {
        if (lightRef.current) {
            const time = state.clock.getElapsedTime();
            // Calculate the pulsing intensity using a sine wave function
            lightRef.current.intensity = (Math.sin(time * 5) + 1) * 300
// Adjust the frequency and range as needed
        }
    });

    // Render the point light with the provided reference
    return (
        <pointLight
            ref={lightRef}
            position={[0, 5, 0]} /* Adjust the position as needed */
            color="red" /* Set the light color to red */
            intensity={0} /* Initial intensity (will pulse) */
            castShadow
        />
    );
};

const ThreeDObject = () => {
    // Define the state for the model path
    const [modelPath] = useState('src/assets/models/gaming_desktop_pc.glb');

    return (
        <div className="three-d-object" style={{ backgroundColor: "#04151f" }}>
            <Canvas camera={{ position: [15, 15, 15], fov: 50 }}>
                {/* Add ambient lighting for better visibility */}
                <ambientLight intensity={1} />

                {/* Render the pulsing red light */}
                <PulsingRedLight />

                {/* OrbitControls for interactive camera control */}
                <OrbitControls />

                {/* Render the 3D model using the ModelRenderer component */}
                {modelPath && <ModelRenderer url={modelPath} />}
            </Canvas>
        </div>
    );
};

export default ThreeDObject;
