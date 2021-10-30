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

  let description =
    "I'm Raymond Kneipp, and I am a freelance web developer specializing in React.js. I build fast, beautiful websites.";
  let title = "Web Developer - Raymond Kneipp";
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
  <title>{title}</title>
  <meta name="title" content={title} />

  <meta name="theme-color" content="#2463EB" />
  <meta name="description" content={description} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" href="/favicon.png" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://raymondkneipp.com/" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/raymondkneipp.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://raymondkneipp.com/" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content="/raymondkneipp.jpg" />
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
