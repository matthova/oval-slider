import React from 'react';
import * as THREE from 'three';
import { Canvas, ReactThreeFiber, extend, useThree, useFrame } from 'react-three-fiber'
import { Controls } from './Controls';
import { Seat } from './parts/Seat';
import { WoodMaterial } from './materials/WoodMaterial';

const DEFAULT_DIAMETER = 7;

const App: React.FC = () => {
  const [diameter, setDiameter] = React.useState(7);
  const [fillet, setFillet] = React.useState(0.625);

  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex' }}>
      <div style={{ width: 300, height: '100%', border: '1px solid black' }}>
        <div>
          <label>Diameter (inches)</label>
          <input
            type="range"
            min={3}
            max={20}
            step={0.01}
            value={diameter}
            onChange={(e) => {
              setDiameter(Number(e.target.value));
            }}
          />
          <input
            type="number"
            value={diameter}
            min={3}
            max={20}
            onChange={(e) => {
              setDiameter(Number(e.target.value))
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <label>Fillet (inches)</label>
          <input
            type="range"
            min={0.025}
            max={0.975}
            step={0.025}
            value={fillet}
            onChange={(e) => {
              setFillet(Number(e.target.value));
            }}
          />
          <input
            type="number"
            value={fillet}
            min={0.025}
            max={0.975}
            onChange={(e) => {
              setFillet(Number(e.target.value))
            }}
          />
        </div>
        <br />
        <br />
        <button onClick={() => {
          // eslint-disable-next-line
          confirm(`Purchase seat with diameter of ${diameter}" and fillet of ${fillet}"?`);
        }}>Purchase!</button>
      </div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: new THREE.Vector3(0, 0, -20) }}>
        <Controls />
        <Seat diameter={diameter} fillet={fillet} />
      </Canvas>
    </div >
  );
}

export default App;
