import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GLBModel4 = ({ isSelected, onClick }) => {
    // Load the GLB file
    const { scene } = useGLTF('src/assets/models/HDD.glb');
    
    // Create a reference for the model object
    const ref = useRef();

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
        if (ref.current) {
            // Adjust the rotation speed as needed
            // ref.current.rotation.y += 0.01;
        }
    });

    // Return the model as a primitive object with the reference and event handlers
    return (
        <primitive
            ref={ref}
            object={scene}
            scale={scale}
            position={[0, 0, 2]}
            onClick={onClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        />
    );
};

export default GLBModel4;
