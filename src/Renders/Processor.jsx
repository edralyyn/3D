import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GLBModel1 = ({ isSelected, onClick }) => {
    // Load the GLB file
    const { scene } = useGLTF('src/assets/models/pc_cpu_processor.glb');
    
    // Create a ref to hold the model's object
    const modelRef = useRef();

    // Use state to manage the scale of the model
    const [scale, setScale] = useState([1, 1, 1]);

    // Update the scale based on the selection state
    useEffect(() => {
        if (isSelected) {
            setScale([1.5, 1.5, 1.5]); // Adjust the selected scaling factor as needed
        } else {
            setScale([1, 1, 1]);
        }
    }, [isSelected]);

    // Event handler for mouse enter (hover)
    const handlePointerEnter = () => {
        if (!isSelected) {
            setScale([1.5, 1.5, 1.5]); // Adjust the hover scaling factor as needed
        }
    };
    
    // Event handler for mouse leave
    const handlePointerLeave = () => {
        if (!isSelected) {
            setScale([1, 1, 1]);
        }
    };

    // Use the useFrame hook to apply rotation to the model
    useFrame(() => {
        if (modelRef.current) {
            // Increment the model's y rotation slightly on each frame for spinning
            // modelRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
        }
    });

    // Render the model as a primitive object with the ref, scale, and event handlers
    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={scale}
            position={[0, 0, 0]}
            onClick={onClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        />
    );
};

export default GLBModel1;
