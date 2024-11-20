import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建仓库几何体
const geometry = new THREE.BoxGeometry(2, 2, 4);

// 创建材质
const material = new THREE.MeshBasicMaterial({ color: 0x808080 });

// 创建网格对象
const warehouse = new THREE.Mesh(geometry, material);

// 将网格对象添加到场景中
scene.add(warehouse);

// 创建环境光
const ambientLight = new THREE.AmbientLight(0x404040); // 灰色
scene.add(ambientLight);

// 创建方向光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);

    // 可以在这里添加动画逻辑
    // 例如：warehouse.rotation.x += 0.01;
    //       warehouse.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
