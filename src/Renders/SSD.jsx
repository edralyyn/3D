import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GLBModel5 = () => {
    // Load the GLB file
    const { scene } = useGLTF('src/assets/models/SSD.glb');
    
    // Create a ref to hold the model's object
    const modelRef = useRef();
    
    // State to manage the scale of the model
    const [scale, setScale] = useState([1, 1, 1]);
    
    // Event handler for mouse enter (hover)
    const handlePointerEnter = () => {
        // Increase the scale when hovered
        setScale([1.5, 1.5, 1.5]); // Adjust the scaling factor as needed
    };
    
    // Event handler for mouse leave
    const handlePointerLeave = () => {
        // Reset the scale when the mouse leaves
        setScale([1, 1, 1]);
    };

    // Use the useFrame hook to apply rotation to the model
    useFrame(() => {
        if (modelRef.current) {
            // Increment the model's y-rotation slightly on each frame for spinning
            ; // Adjust rotation speed as needed
        }
    });

    // Render the model as a primitive object, with the ref, scale, and event handlers attached
    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={scale}
            position={[0, 0, 0]}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        />
    );
};

export default GLBModel5;
