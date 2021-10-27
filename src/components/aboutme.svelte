<script>
  import { onMount } from "svelte";

  import Container from "./container.svelte";

  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
  } from "three";
  import Button from "./button.svelte";

  onMount(() => {
    const canvas = document.getElementById("diamond");
    const renderer = new WebGLRenderer({ canvas, alpha: true });

    var cam = new PerspectiveCamera(100, 2, 0.1, 1000);
    const scene = new Scene();

    var box = new SphereGeometry(2, 10, -30);
    var mesh = new MeshBasicMaterial({
      wireframe: true,
      color: 0xffffff,
    });
    var diamond = new Mesh(box, mesh);
    scene.add(diamond);

    cam.position.z = 3;

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const pixelRatio = window.devicePixelRatio;
      const width = (canvas.clientWidth * pixelRatio) | 0;
      const height = (canvas.clientHeight * pixelRatio) | 0;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    var render = function () {
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        cam.aspect = canvas.clientWidth / canvas.clientHeight;
        cam.updateProjectionMatrix();
      }

      // Animate diamond
      diamond.rotation.y += 0.005;
      diamond.rotation.x += 0.005;
      diamond.rotation.z += 0.005;

      requestAnimationFrame(render);

      renderer.render(scene, cam);
    };

    render();
  });
</script>

<div class="bg-gray-900 py-20">
  <Container>
    <div class="grid md:grid-cols-2 items-stretch md:h-96">
      <div class="flex flex-col justify-center items-start">
        <h2 class="text-5xl font-bold text-white mb-10">About Me</h2>
        <p class="text-white text-xl mb-5">
          As a <strong class="text-blue-400">full-stack web developer</strong>
          and
          <strong class="text-blue-400">designer</strong>, I devote myself to
          creating astonishing one-of-a-kind websites. I care about attention to
          detail and delivering a product that exceeds expectations.
        </p>
        <Button href="/about" light>Read More</Button>
      </div>

      <canvas id="diamond" class="block h-96 w-full" />
    </div>
  </Container>
</div>
