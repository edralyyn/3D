import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './cssfiles/Vertical3DModels.css';
import Processor from '../Renders/Processor';
import GPU from '../Renders/GPU';
import RAM from '../Renders/RAM';
import HDD from '../Renders/HDD';
import SSD from '../Renders/SSD';
import HoverWindow from './HoverWindow'; // Import the HoverWindow component
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

    return (
        <div className="vertical-3d-models" style={{ backgroundColor: "" }}>
            <div>
                <div className={`canvas-container ${selectedModel === 'processor' && 'selected'}`} style={{ height: '150px', width: '150px' }} onClick={() => handleModelClick('processor')} onMouseEnter={() => handleModelHover('processor')} onMouseLeave={handleModelHoverOut}>
                    <Canvas camera={{ position: [5, 5, 2], fov: 50 }}>
                        <ambientLight intensity={100} />
                        <OrbitControls />
                        <Processor />
                    </Canvas>
                </div>
                {(hoveredModel === 'processor' || selectedModel === 'processor') && <HoverWindow content="This is a Processor." />}
            </div>
            <div>
                <div className={`canvas-container ${selectedModel === 'gpu' && 'selected'}`} style={{ height: '150px', width: '150px' }} onClick={() => handleModelClick('gpu')} onMouseEnter={() => handleModelHover('gpu')} onMouseLeave={handleModelHoverOut}>
                    <Canvas camera={{ position: [1, -2, 7], fov: 50 }}>
                        <ambientLight intensity={100} />
                        <OrbitControls />
                        <GPU />
                    </Canvas>
                </div>
                {(hoveredModel === 'gpu' || selectedModel === 'gpu') && <HoverWindow content="This is a GPU." />}
            </div>
            <div>
                <div className={`canvas-container ${selectedModel === 'ram' && 'selected'}`} style={{ height: '150px', width: '150px' }} onClick={() => handleModelClick('ram')} onMouseEnter={() => handleModelHover('ram')} onMouseLeave={handleModelHoverOut}>
                    <Canvas camera={{ position: [-10, 2, 10], fov: 50 }}>
                        <ambientLight intensity={2} />
                        <OrbitControls />
                        <RAM />
                    </Canvas>
                </div>
                {(hoveredModel === 'ram' || selectedModel === 'ram') && <HoverWindow content="This is a RAM." />}
            </div>
            <div>
                <div className={`canvas-container ${selectedModel === 'hdd' && 'selected'}`} style={{ height: '150px', width: '150px' }} onClick={() => handleModelClick('hdd')} onMouseEnter={() => handleModelHover('hdd')} onMouseLeave={handleModelHoverOut}>
                    <Canvas camera={{ position: [3, 5, 6], fov: 50 }}>
                        <ambientLight intensity={2} />
                        <OrbitControls />
                        <HDD />
                    </Canvas>
                </div>
                {(hoveredModel === 'hdd' || selectedModel === 'hdd') && <HoverWindow content="This is a HDD." />}
            </div>
            <div>
                <div className={`canvas-container ${selectedModel === 'ssd' && 'selected'}`} style={{ height: '150px', width: '150px' }} onClick={() => handleModelClick('ssd')} onMouseEnter={() => handleModelHover('ssd')} onMouseLeave={handleModelHoverOut}>
                    <Canvas camera={{ position: [1, 2, 3], fov: 50 }}>
                        <ambientLight intensity={2} />
                        <OrbitControls />
                        <SSD />
                    </Canvas>
                </div>
                {(hoveredModel === 'ssd' || selectedModel === 'ssd') && <HoverWindow content="This is a SSD." />}
            </div>
        </div>
    );
};

export default Vertical3DModels;
