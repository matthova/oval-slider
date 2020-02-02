import React from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';
import { WoodMaterial } from '../materials/WoodMaterial';

const radius = 7;
const height = 1;
const fillet = 0.625;
const baseHeight = height - fillet;
const topHeight = fillet;
const precision = 100;

export const Seat = () => {
    return (
        <>
            <mesh rotation={new THREE.Euler(Math.PI / 2, 0, 0)} position={new THREE.Vector3(0, -0.625 / 2 + 0.375, 0)}>
                <torusBufferGeometry attach="geometry" args={[7 - 0.625, 0.625, 100, 100]} />
                <WoodMaterial />
            </mesh>
            <mesh position={new THREE.Vector3(0, - baseHeight / 2 + baseHeight, 0)}>
                <cylinderBufferGeometry attach="geometry" args={[radius, radius, baseHeight, precision, precision]} />
                <WoodMaterial />
            </mesh>
            <mesh position={new THREE.Vector3(0, - topHeight / 2 + baseHeight + topHeight, 0)}>
                <cylinderBufferGeometry attach="geometry" args={[radius - fillet, radius - fillet, topHeight, precision, precision]} />
                <WoodMaterial />
            </mesh>
        </>
    )
}
// var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );