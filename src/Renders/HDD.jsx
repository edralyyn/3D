import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GLBModel4 = () => {
    // Load the GLB file
    const { scene } = useGLTF('src/assets/models/HDD.glb');
    
    // Create a reference for the model object
    const ref = useRef();

    // Use state to manage the scale of the model
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
        if (ref.current) {
            // Adjust the rotation speed as needed
            
        }
    });

    // Return the model as a primitive object with the reference and event handlers
    return (
        <primitive
            ref={ref}
            object={scene}
            scale={scale}
            position={[0, 0, 2]}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        />
    );
};

export default GLBModel4;
