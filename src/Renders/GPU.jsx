import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const GLBModel2 = ({ isSelected, onClick }) => {
    const { scene } = useGLTF('src/assets/models/GPU.glb');
    const ref = useRef();
    const [scale, setScale] = useState([1, 1, 1]);

    useEffect(() => {
        if (isSelected) {
            setScale([2, 2, 2]); // Adjust the scaling factor as needed
        } else {
            setScale([1, 1, 1]);
        }
    }, [isSelected]);

    const handlePointerEnter = () => {
        if (!isSelected) {
            setScale([1.5, 1.5, 1.5]); // Adjust the hover scaling factor as needed
        }
    };

    const handlePointerLeave = () => {
        if (!isSelected) {
            setScale([1, 1, 1]);
        }
    };

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={scale}
            position={[0, -1, 0]}
            onClick={onClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        />
    );
};

export default GLBModel2;
