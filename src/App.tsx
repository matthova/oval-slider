import React from 'react';
import * as THREE from 'three';
import { Canvas, ReactThreeFiber, extend, useThree, useFrame } from 'react-three-fiber'
import { Controls } from './Controls';
import { Seat } from './parts/Seat';
import { WoodMaterial } from './materials/WoodMaterial';

interface ThingProps {
  readonly speed: number;
  readonly size: number;
}

function Thing({ speed, size }: ThingProps) {
  const ref = React.useRef<any>();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += speed))
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}>
      <boxBufferGeometry attach="geometry" args={[size, size, size]} />
      {/* <meshNormalMaterial attach="material" /> */}
      <WoodMaterial />
    </mesh>
  )
}

const App: React.FC = () => {
  const [speed, setSpeed] = React.useState(0);
  const [size, setSize] = React.useState(1);

  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex' }}>
      <div style={{ width: 300, height: '100%', border: '1px solid black' }}>
        <div>
          <label>speed</label>
          <input
            type="range"
            min={0}
            max={0.1}
            step={0.001}
            value={speed}
            onChange={(e) => {
              setSpeed(Number(e.target.value));
            }}
          />
        </div>
        <div>
          <label>size</label>
          <input
            type="range"
            min={0.1}
            max={5}
            step={0.1}
            value={size}
            onChange={(e) => {
              setSize(Number(e.target.value));
            }}
          />
        </div>
      </div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: new THREE.Vector3(0, 0, -20) }}>
        <Controls />
        <Seat />
      </Canvas>
    </div >
  );
}

export default App;
