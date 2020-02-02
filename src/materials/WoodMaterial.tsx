import React from 'react';
import * as THREE from 'three';
import woodJpg from './wood.jpg';

const loadManager = new THREE.LoadingManager();
const loader = new THREE.TextureLoader(loadManager);
const woodTexture = loader.load(woodJpg);

export const WoodMaterial = () => <meshBasicMaterial map={woodTexture} attach="material" />
