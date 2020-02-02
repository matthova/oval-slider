import React from 'react';
import { ReactThreeFiber, extend, useThree, useFrame } from 'react-three-fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
extend({ OrbitControls });

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        // eslint-disable-next-line @typescript-eslint/interface-name-prefix
        interface IntrinsicElements {
            orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
        }
    }
}

export function Controls() {
    const controls = React.useRef(null);
    const { camera, gl } = useThree();
    useFrame(() => {
        if (controls && controls.current && typeof controls.current === 'function') {
            controls.current.update()
        }
    });

    return (
        <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
    )
}
