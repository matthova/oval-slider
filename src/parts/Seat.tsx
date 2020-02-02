import React from 'react';
import * as THREE from 'three';
import { WoodMaterial } from '../materials/WoodMaterial';


interface SeatProps {
    diameter: number
}

export const Seat = ({ diameter, fillet }) => {
    const height = 1;
    const baseHeight = height - fillet;
    const topHeight = fillet;
    const precision = 100;

    return (
        <>
            <mesh
                rotation={new THREE.Euler(Math.PI / 2, 0, 0)}
                position={new THREE.Vector3(0, baseHeight, 0)}
            >
                <torusBufferGeometry attach="geometry" args={[(diameter / 2) - fillet, fillet, precision, precision]} />
                <WoodMaterial clippingPlanes={[new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.0)]} />
            </mesh>
            <mesh position={new THREE.Vector3(0, - baseHeight / 2 + baseHeight, 0)}>
                <cylinderBufferGeometry attach="geometry" args={[(diameter / 2), (diameter / 2), baseHeight, precision, precision]} />
                <WoodMaterial />
            </mesh>
            <mesh position={new THREE.Vector3(0, - topHeight / 2 + baseHeight + topHeight, 0)}>
                <cylinderBufferGeometry attach="geometry" args={[(diameter / 2) - fillet, (diameter / 2) - fillet, topHeight, precision, precision]} />
                <WoodMaterial />
            </mesh>
        </>
    )
}
