import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveBackground: React.FC = () => {
    const threeContainerRef = useRef<HTMLDivElement>(null);
    const particleCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!threeContainerRef.current || !particleCanvasRef.current) return;

        const container = threeContainerRef.current;
        const particleCanvas = particleCanvasRef.current;
        const ctx = particleCanvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particleAnimationId: number;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x011b2b, 0.0042);

        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 40, 75);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Transparent background
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0x6ad7ff, 0.35);
        scene.add(ambientLight);

        const topLight = new THREE.DirectionalLight(0x88d7ff, 1.1);
        topLight.position.set(0, 120, 60);
        topLight.castShadow = true;
        scene.add(topLight);

        // // Low poly seabed
        // const planeGeo = new THREE.PlaneGeometry(220, 120, 80, 60);
        // planeGeo.rotateX(-Math.PI / 2);
        // planeGeo.translate(0, -12, 40);

        // const planeMat = new THREE.MeshStandardMaterial({
        //     color: 0x0b6fa3,
        //     flatShading: true,
        //     roughness: 0.4,
        //     metalness: 0.3,
        //     emissive: 0x0a5b8e,
        //     emissiveIntensity: 0.1,
        // });

        // const planeMesh = new THREE.Mesh(planeGeo, planeMat);
        // planeMesh.receiveShadow = true;
        // scene.add(planeMesh);

        // const basePositions = planeGeo.attributes.position.array.slice();

        // for (let i = 0; i < basePositions.length; i += 3) {
        //     const x = basePositions[i];
        //     const z = basePositions[i + 2];
        //     const height = Math.sin(x * 0.15) * 2 + Math.cos(z * 0.2) * 2 + (Math.random() - 0.5) * 2;
        //     (planeGeo.attributes.position.array as Float32Array)[i + 1] += height;
        // }
        // planeGeo.attributes.position.needsUpdate = true;

        // Floating cube clusters
        const cubeMat = new THREE.MeshStandardMaterial({
            color: 0x7fefff,
            metalness: 0.2,
            roughness: 0.6,
            transparent: true,
            opacity: 0.75,
            flatShading: true,
        });

        const cubesGroup = new THREE.Group();
        scene.add(cubesGroup);

        function createCluster(x: number, y: number, z: number) {
            const cluster = new THREE.Group();
            const count = 3 + Math.floor(Math.random() * 4);
            for (let i = 0; i < count; i++) {
                const size = 0.8 + Math.random() * 1.5;
                const geo = new THREE.BoxGeometry(size, size, size);
                const mesh = new THREE.Mesh(geo, cubeMat);
                mesh.position.set(
                    (Math.random() - 0.5) * 3,
                    (Math.random() - 0.5) * 3,
                    (Math.random() - 0.5) * 3
                );
                cluster.add(mesh);
            }
            cluster.position.set(x, y, z);
            cluster.userData = {
                rotSpeed: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.001,
                    (Math.random() - 0.5) * 0.001,
                    (Math.random() - 0.5) * 0.001
                ),
                bobSpeed: 0.3 + Math.random() * 0.5,
                bobAmp: 0.5 + Math.random() * 1.2,
                driftSpeed: 0.002 + Math.random() * 0.004,
            };
            cubesGroup.add(cluster);
        }

        for (let i = 0; i < 12; i++) {
            createCluster(
                (Math.random() - 0.5) * 100,
                -2 + Math.random() * 25,
                -30 + Math.random() * 100
            );
        }

        // Particles
        let DPR = window.devicePixelRatio || 1;
        function resizeParticles() {
            particleCanvas.width = window.innerWidth * DPR;
            particleCanvas.height = window.innerHeight * DPR;
            particleCanvas.style.width = window.innerWidth + "px";
            particleCanvas.style.height = window.innerHeight + "px";
            ctx.scale(DPR, DPR);
        }
        resizeParticles();

        const particles = Array.from({ length: 100 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.1 - 0.2, // Drift upwards
            r: 1 + Math.random() * 1.3,
        }));

        function animateParticles() {
            ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
            const maxDist = 140;

            for (let p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
                if (p.y < 0) p.y = window.innerHeight;
                
                ctx.beginPath();
                ctx.fillStyle = "rgba(190,255,255,0.9)";
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dist = Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
                    if (dist < maxDist) {
                        const alpha = 1 - dist / maxDist;
                        ctx.strokeStyle = `rgba(175,235,240,${alpha * 0.25})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            particleAnimationId = requestAnimationFrame(animateParticles);
        }

        // Camera parallax
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animate
        function animate(time: number) {
            time *= 0.001;
            
            // Camera parallax
            camera.position.x += (mouse.x * 8 - camera.position.x) * 0.05;
            camera.position.y += (40 + mouse.y * 8 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            // Wave animation
            // const positions = planeGeo.attributes.position.array as Float32Array;
            // for (let i = 0; i < positions.length; i += 3) {
            //     positions[i + 1] = basePositions[i + 1] +
            //         Math.sin(time * 1.2 + basePositions[i] * 0.35) * 1.4 +
            //         Math.cos(time * 1.3 + basePositions[i + 2] * 0.25) * 1.2;
            // }
            // planeGeo.attributes.position.needsUpdate = true;
            // planeGeo.computeVertexNormals();

            // Cluster animation
            cubesGroup.children.forEach((cluster, i) => {
                const d = cluster.userData;
                cluster.rotation.x += d.rotSpeed.x;
                cluster.rotation.y += d.rotSpeed.y;
                cluster.position.y += Math.sin(time * d.bobSpeed + i) * 0.02;
                cluster.position.x += d.driftSpeed;
                if (cluster.position.x > 100) cluster.position.x = -100;
            });

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        }

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            resizeParticles();
        };
        window.addEventListener('resize', handleResize);

        animate(0);
        animateParticles();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            cancelAnimationFrame(particleAnimationId);
            
            renderer.dispose();
            scene.traverse(object => {
                if (object instanceof THREE.Mesh) {
                    object.geometry.dispose();
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });

            if (container && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <div ref={threeContainerRef} id="three-container" className="absolute inset-0 -z-20" />
            <canvas ref={particleCanvasRef} id="particles" className="absolute inset-0 -z-10" />
        </div>
    );
};

export default InteractiveBackground;
