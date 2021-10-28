<script>
  import Footer from "../components/footer.svelte";
  import Navbar from "../components/navbar.svelte";

  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    cursorOpacity = 1;

    m.x = event.pageX;
    m.y = event.pageY;
  }

  function handleScroll(event) {
    cursorOpacity = 0;
  }

  function handleResize(event) {
    cursorOpacity = 0;
    m.x = 0;
    m.y = 0;
  }

  function shrink(event) {
    cursorSize = "1rem";
  }

  function grow(event) {
    cursorSize = "1.5rem";
  }

  function fadeOut(event) {
    cursorOpacity = 0;
  }

  function fadeIn(event) {
    cursorOpacity = 0;
  }

  var cursorSize = "1.5rem";
  var cursorOpacity = 1;
</script>

<img
  src="/cursor.svg"
  alt="Cursor"
  class="absolute z-50 pointer-events-none hidden md:block"
  style={`top: ${m.y}px; left: ${m.x}px; width: ${cursorSize}; height: ${cursorSize}; transition: height 0.3s, width 0.3s, opacity 0.3s; opacity : ${cursorOpacity};`}
/>

<svelte:body
  on:mousemove={handleMousemove}
  on:mousedown={shrink}
  on:mouseup={grow}
  on:mouseleave={fadeOut}
  on:mouseenter={fadeIn} />

<svelte:window on:scroll={handleScroll} on:resize={handleResize} />

<svelte:head>
  <meta name="theme-color" content="#2463EB" />
</svelte:head>

<header>
  <Navbar />
</header>

<main>
  <slot />
</main>

<footer>
  <Footer />
</footer>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :global(::selection) {
    background: #5fa4f9; /* WebKit/Blink Browsers */
    color: #fff;
  }
  :global(::-moz-selection) {
    background: #5fa4f9; /* Gecko Browsers */
    color: #fff;
  }

  @media (min-width: 768px) {
    :global(*) {
      cursor: none !important;
    }
  }
</style>
