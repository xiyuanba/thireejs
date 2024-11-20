import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(10, 10, 10); // 调整相机位置
camera.lookAt(new THREE.Vector3(0, 0, 0)); // 让相机看向仓库中心

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建仓库几何体
const geometry = new THREE.BoxGeometry(10, 10, 10);

// 创建材质
const material = new THREE.MeshPhongMaterial({ color: 0x308080 });

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

// 创建点光源
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

function animate() {
    requestAnimationFrame(animate);

    // 可以在这里添加动画逻辑
    // 例如：warehouse.rotation.x += 0.01;
    //       warehouse.rotation.y += 0.01;

    renderer.render(scene, camera);
}
const controls = new DragControls( objects, camera, renderer.domElement );

// add event listener to highlight dragged objects

controls.addEventListener( 'dragstart', function ( event ) {

    event.object.material.emissive.set( 0xaaaaaa );

} );

controls.addEventListener( 'dragend', function ( event ) {

    event.object.material.emissive.set( 0x000000 );

} );
animate();

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

