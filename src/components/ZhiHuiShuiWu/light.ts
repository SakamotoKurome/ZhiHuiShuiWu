import * as THREE from 'three'


export function setupDirectionalLight(scene: THREE.Scene) {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(800, 800, 500);
    scene.add(directionalLight);
    return directionalLight
}