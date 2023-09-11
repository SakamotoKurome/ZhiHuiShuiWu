import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


export function setupGLTF(scene: THREE.Scene, rerender: () => void) {
    const loader = new GLTFLoader();
    loader.load('/low_poly_city/scene.gltf', function (gltf) {
        gltf.scene.scale.set(0.04, 0.04, 0.04);
        gltf.scene.position.z = 200;
        gltf.scene.position.x = 50;
        scene.add(gltf.scene);
        rerender();
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function () {
        console.log('An error happened at loading gltf');
    }
    )
}

export function setupTube(scene: THREE.Scene) {
    const path0 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-160, 5, 410),
        new THREE.Vector3(-160, 5, -490)
    ])
    const geometry0 = new THREE.TubeGeometry(path0, 40, 4, 25);

    const path1 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-160, 5, 110),
        new THREE.Vector3(50, 5, 110),
        new THREE.Vector3(50, 5, 60)
    ]);
    const geometry1 = new THREE.TubeGeometry(path1, 40, 2, 25);

    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    const tube0 = new THREE.Mesh(geometry0, material);
    const tube1 = new THREE.Mesh(geometry1, material);

    scene.add(tube0)
    scene.add(tube1);
}