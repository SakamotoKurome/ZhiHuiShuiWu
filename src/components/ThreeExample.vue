<template>
    <div class="webgl" id="webgl"></div>
</template>
<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(100, 100, 100);
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,//0xff0000设置材质颜色为红色
// });
const material = new THREE.MeshLambertMaterial();


// 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
mesh.position.set(0, 10, 0);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera();
camera.position.set(200, 200, 200);
camera.lookAt(mesh.position);

const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);



const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.position.set(400, 0, 0);//点光源放在x轴上
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
scene.add(pointLightHelper);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);


const width = window.innerWidth
const height = window.innerHeight
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);


onMounted(() => {
    const container = document.getElementById('webgl')
    if (container) {
        container.appendChild(renderer.domElement)
    }
})

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件
</script>