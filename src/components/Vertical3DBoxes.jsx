import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './cssfiles/Vertical3DModels.css';
import Processor from '../Renders/Processor';
import GPU from '../Renders/GPU';
import RAM from '../Renders/RAM';
import HDD from '../Renders/HDD';
//import SSD from '../Renders/SSD';
import HoverWindow from './HoverWindow';
import 'bootstrap/dist/css/bootstrap.min.css';

const Vertical3DModels = () => {
    const [selectedModel, setSelectedModel] = useState(null);
    const [hoveredModel, setHoveredModel] = useState(null);

    const handleModelClick = (modelName) => {
        setSelectedModel(prevModel => (prevModel === modelName ? null : modelName));
    };

    const handleModelHover = (modelName) => {
        setHoveredModel(modelName);
    };

    const handleModelHoverOut = () => {
        setHoveredModel(null);
    };

    const models = [
        { name: 'processor', component: Processor, camera: { position: [5, 5, 2], fov: 50 } },
        { name: 'gpu', component: GPU, camera: { position: [1, -2, 7], fov: 50 } },
        { name: 'ram', component: RAM, camera: { position: [-10, 2, 10], fov: 50 } },
        { name: 'hdd', component: HDD, camera: { position: [3, 5, 6], fov: 50 } },
       // { name: 'ssd', component: SSD, camera: { position: [1, 2, 3], fov: 50 } }
    ];

    return (
        <div className="vertical-3d-models" style={{ backgroundColor: "" }}>
            {models.map(model => (
                <div key={model.name}>
                    <div 
                        className={`canvas-container ${selectedModel === model.name ? 'selected' : ''}`} 
                        onClick={() => handleModelClick(model.name)} 
                        onMouseEnter={() => handleModelHover(model.name)} 
                        onMouseLeave={handleModelHoverOut}
                    >
                        <Canvas camera={model.camera}>
                            <ambientLight intensity={70} />
                            <OrbitControls />
                            <model.component 
                                isSelected={selectedModel === model.name} 
                                onClick={() => handleModelClick(model.name)} 
                            />
                        </Canvas>
                    </div>
                    {(hoveredModel === model.name || selectedModel === model.name) && <HoverWindow content={`This is a ${model.name.toUpperCase()}.`} />}
                </div>
            ))}
        </div>
    );
};

export default Vertical3DModels;
