import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './cssfiles/Vertical3DModels.css';
import Processor from '../Renders/Processor';
import GPU from '../Renders/GPU';
import RAM from '../Renders/RAM';
import HDD from '../Renders/HDD';
import SSD from '../Renders/SSD';
import 'bootstrap/dist/css/bootstrap.min.css';

const MiddleCanvas = ({ selectedModel, setSelectedModel }) => {
    const handleModelClick = () => {
        setSelectedModel(null);
    };

    return (
        <div className="middle-canvas" onClick={handleModelClick}>
            <Canvas camera={{ position: [15, 15, 15], fov: 50 }}>
                <ambientLight intensity={1} />
                <OrbitControls />
                {/* Render the selected model in the middle canvas */}
                {selectedModel && (
                    <React.Suspense fallback={null}>
                        {selectedModel === 'processor' && <Processor />}
                        {selectedModel === 'gpu' && <GPU />}
                        {selectedModel === 'ram' && <RAM />}
                        {selectedModel === 'hdd' && <HDD />}
                        {selectedModel === 'ssd' && <SSD />}
                    </React.Suspense>
                )}
            </Canvas>
        </div>
    );
};

const Vertical3DModels = () => {
    const [selectedModel, setSelectedModel] = useState(null);

    const handleModelClick = (modelName) => {
        if (selectedModel === modelName) {
            setSelectedModel(null);
        } else {
            setSelectedModel(modelName);
        }
    };

    return (
        <div className="vertical-3d-models ms-10 mt-2" >
            {/* Render models in the vertical navbar */}
            <div className={`canvas-container ${selectedModel === 'processor' && 'selected'}`} style={{ height: '120px', width: '120px' }} onClick={() => handleModelClick('processor')}>
                <Canvas camera={{ position: [5, 5, 2], fov: 50 }}>
                    <ambientLight intensity={100} />
                    <OrbitControls />
                    {selectedModel !== 'processor' && <Processor />}
                </Canvas>
            </div>
            {/* Render other models similarly */}
            <div className={`canvas-container ${selectedModel === 'gpu' && 'selected'}`} style={{ height: '120px', width: '120px' }} onClick={() => handleModelClick('gpu')}>
                <Canvas camera={{ position: [1, -2, 7], fov: 50 }}>
                    <ambientLight intensity={100} />
                    <OrbitControls />
                    {selectedModel !== 'gpu' && <GPU />}
                </Canvas>
            </div>
            {/* Render other models similarly */}
            <div className={`canvas-container ${selectedModel === 'ram' && 'selected'}`} style={{ height: '120px', width: '120px' }} onClick={() => handleModelClick('ram')}>
                <Canvas camera={{ position: [-10, 2, 10], fov: 50 }}>
                    <ambientLight intensity={2} />
                    <OrbitControls />
                    {selectedModel !== 'ram' && <RAM />}
                </Canvas>
            </div>
            {/* Render other models similarly */}
            <div className={`canvas-container ${selectedModel === 'hdd' && 'selected'}`} style={{ height: '120px', width: '120px' }} onClick={() => handleModelClick('hdd')}>
                <Canvas camera={{ position: [3, 5, 6], fov: 50 }}>
                    <ambientLight intensity={2} />
                    <OrbitControls />
                    {selectedModel !== 'hdd' && <HDD />}
                </Canvas>
            </div>
            {/* Render other models similarly */}
            <div className={`canvas-container ${selectedModel === 'ssd' && 'selected'}`} style={{ height: '120px', width: '120px' }} onClick={() => handleModelClick('ssd')}>
                <Canvas camera={{ position: [1, 2, 3], fov: 50 }}>
                    <ambientLight intensity={2} />
                    <OrbitControls />
                    {selectedModel !== 'ssd' && <SSD />}
                </Canvas>
            </div>

            {/* Render middle canvas */}
            <MiddleCanvas selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
        </div>
    );
};

export default Vertical3DModels;
