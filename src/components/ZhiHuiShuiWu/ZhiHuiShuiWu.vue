<template>
    <div class="w-screen h-screen relative" id="zhihuishuiwu">
        <div class="absolute bottom-0 right-0 w-80 h-20 bg-white rounded">
            <div class="flex px-2 py-1">
                <label class="label cursor-pointer" @change="handleAxesHelerToggle">
                    <span class="label-text text-black mr-1">AxesHelper</span>
                    <input type="checkbox" class="toggle toggle-xs toggle-accent" v-model="isShowAxesHelper" />
                </label>
                <label class="label cursor-pointer" @change="handleDirectionalLightHelperToggle">
                    <span class="label-text text-black mr-1">DirectionalLightHelper</span>
                    <input type="checkbox" class="toggle toggle-xs toggle-accent" v-model="isShowDirectionalLightHelper" />
                </label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { onMounted, onUnmounted, ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { setupTube, setupGLTF } from './geometry';
import { AxesHelperController, DirectionalLightHelperController } from './helper';
import { setupDirectionalLight } from './light';

const scene = new THREE.Scene();

setupGLTF(scene, rerender)
setupTube(scene)

// setupAxesHelper(scene)
const axesHelper = new AxesHelperController(scene, 1000)
const isShowAxesHelper = ref(false)
const handleAxesHelerToggle = () => {
    if (isShowAxesHelper.value) {
        axesHelper.add()
    } else {
        axesHelper.remove()
    }
    rerender()
}


const directionalLight = setupDirectionalLight(scene)
// setupDirectionalLightHelper(scene, directionalLight)
const directionalLightHelper = new DirectionalLightHelperController(scene, directionalLight)
const isShowDirectionalLightHelper = ref(false)
const handleDirectionalLightHelperToggle = () => {
    if (isShowDirectionalLightHelper.value) {
        directionalLightHelper.add()
    } else {
        directionalLightHelper.remove()
    }
    rerender()
}

const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(800, 800, 800);
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', function () {
    rerender()
});

function rerender() {
    const width = window.innerWidth
    const height = window.innerHeight
    renderer.setSize(width, height);
    renderer.render(scene, camera);
    camera.aspect = width / height;
    camera.updateProjectionMatrix()
}



onMounted(() => {
    const container = document.getElementById('zhihuishuiwu')
    if (container) {
        container.appendChild(renderer.domElement)
    }
    window.addEventListener('resize', rerender)
})

onUnmounted(() => {
    window.removeEventListener('resize', rerender)
})

</script>