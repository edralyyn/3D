import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import './cssfiles/Vertical3DModels.css';
import Processor from '../Renders/Processor';
import GPU from '../Renders/GPU';
import RAM from '../Renders/RAM';
import HDD from '../Renders/HDD';
import SSD from '../Renders/SSD';
import 'bootstrap/dist/css/bootstrap.min.css';

// Parent component combining the two GLB models
const Vertical3DModels = () => {
    return (
        <div className="vertical-3d-models ms-10 mt-2">
            <div className="canvas-container" style={{ height: '120px', width: '120px' }}>
                <Canvas camera={{ position: [5, 5, 2], fov: 50 }}>
                    <ambientLight intensity={100} /> {/* Set higher intensity for better visibility */}
                    <OrbitControls /> {/* Add OrbitControls for better model interaction */}
                    <Processor />
                </Canvas>
            </div>
            <div className="canvas-container" style={{ height: '120px', width: '120px' }}>
                <Canvas camera={{ position: [1, -2, 7], fov: 50 }}>
                    <ambientLight intensity={100} /> {/* Again, set higher intensity */}
                    <OrbitControls /> {/* Add OrbitControls for better model interaction */}
                    <GPU />
                </Canvas>
            </div>
            <div className="canvas-container" style={{ height: '120px', width: '120px' }}>
                <Canvas camera={{ position: [-10, 2, 10], fov: 50 }}>
                    <ambientLight intensity={2} /> {/* Again, set higher intensity */}
                    <OrbitControls /> {/* Add OrbitControls for better model interaction */}
                    <RAM />
                </Canvas>
            </div>
            <div className="canvas-container" style={{ height: '120px', width: '120px' }}>
                <Canvas camera={{ position: [3, 5, 6], fov: 50 }}>
                    <ambientLight intensity={2} /> {/* Again, set higher intensity */}
                    <OrbitControls /> {/* Add OrbitControls for better model interaction */}
                    <HDD />
                </Canvas>
            </div>
            <div className="canvas-container" style={{ height: '120px', width: '120px' }}>
                <Canvas camera={{ position: [1, 2,3], fov: 50 }}>
                    <ambientLight intensity={2} /> {/* Again, set higher intensity */}
                    <OrbitControls /> {/* Add OrbitControls for better model interaction */}
                    <SSD />
                </Canvas>
            </div>
        </div>
    );
};

export default Vertical3DModels;
