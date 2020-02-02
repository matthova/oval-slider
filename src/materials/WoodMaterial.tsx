import React from 'react';
import * as THREE from 'three';
import woodJpg from './wood.jpg';

const loadManager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(loadManager);
const woodTexture = loader.load(woodJpg);

interface WoodMaterialProps {
    clippingPlanes?: Array<any>
}
export const WoodMaterial = ({ clippingPlanes }: WoodMaterialProps) => <meshBasicMaterial clippingPlanes={clippingPlanes} map={woodTexture} attach="material" />
WoodMaterial.defaultProps = {
    clippingPlanes: []
}