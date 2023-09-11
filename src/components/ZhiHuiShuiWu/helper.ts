import * as THREE from 'three'


export class AxesHelperController {
    scene: THREE.Scene
    helper: THREE.AxesHelper
    constructor(scene: THREE.Scene, size: number = 150) {
        this.scene = scene
        this.helper = new THREE.AxesHelper(size);
    }

    add() {
        this.scene.add(this.helper)
    }

    remove() {
        this.scene.remove(this.helper)
    }
}

// export function setupAxesHelper(scene: THREE.Scene) {
//     const axesHelper = new THREE.AxesHelper(1000);
//     scene.add(axesHelper);
// }

export class DirectionalLightHelperController {
    scene: THREE.Scene
    helper: THREE.DirectionalLightHelper
    constructor(scene: THREE.Scene, directionalLight: THREE.DirectionalLight) {
        this.scene = scene
        this.helper = new THREE.DirectionalLightHelper(directionalLight, 10);
    }

    add() {
        this.scene.add(this.helper)
    }

    remove() {
        this.scene.remove(this.helper)
    }
}

// export function setupDirectionalLightHelper(scene: THREE.Scene, directionalLight: THREE.DirectionalLight) {
//     const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);
//     scene.add(directionalLightHelper)
// }