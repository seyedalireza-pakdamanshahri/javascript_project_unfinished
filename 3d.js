<script src="https://threejs.org/build/three.js"></script>

<script>
    var scene, camera, renderer, light;
    var geometry, material, mesh;

    init();
    animate();

    function init() {
        // Create a scene
        scene = new THREE.Scene();

        // Setup camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;

        // Create a light and add it to the scene
        light = new THREE.PointLight(0xFFFFFF, 1, 1000);
        light.position.set(0, 0, 500);
        scene.add(light);

        // Create a geometry
        geometry = new THREE.TextGeometry('Arshia', {
            font: new THREE.Font('helvetiker'),  // choose a font
            size: 80,
            height: 50,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 8,
            bevelSegments: 5
        });

        material = new THREE.MeshPhongMaterial({ color: 0x00ff00, specular: 0x555555, shininess: 30 });

        // Create a mesh and add it to the scene
        mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);

        // Setup renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;

        document.body.appendChild(renderer.domElement);
    }

    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        light.position.z -= 1;
        if (light.position.z < -500) {
            light.position.z = 500;
        }
        renderer.render(scene, camera);
    }
</script>
