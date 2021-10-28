<script>
  import Button from "./button.svelte";
  import Container from "./container.svelte";

  //   let m = { x: 0, y: 0 };

  //   function handleMousemove(event) {
  //     m.x = event.clientX;
  //     m.y = event.clientY;
  //   }

  //   let innerHeight;
</script>

<!-- <svelte:window bind:innerHeight /> -->

<div class="min-h-screen flex flex-col">
  <div class="bg-gray-900 overflow-hidden relative z-30 flex-1 flex items-end">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-0">
        <h1
          class="text-white font-bold text-4xl sm:text-5xl lg:text-7xl text-center md:order-last pt-20 md:py-20 md:text-left lg:ml-auto lg:w-96"
        >
          Hey, I’m Raymond Kneipp.
        </h1>

        <img
          src="/rk-logo.svg"
          alt="Raymond Kneipp Logo"
          class="w-full h-auto max-w-sm md:max-w-lg lg:max-w-full transform translate-y-1/2 md:order-first self-end place-self-center md:place-self-stretch"
        />
      </div>
    </Container>
  </div>
  <div class="bg-white flex-1 flex items-start">
    <Container>
      <div class="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-0">
        <img
          src="/rk-logo-black.svg"
          alt="Raymond Kneipp Logo"
          class="w-full h-auto max-w-sm md:max-w-lg lg:max-w-full transform -translate-y-1/2 z-0 relative self-start place-self-center md:place-self-stretch"
        />

        <div
          class="pb-20 flex flex-col items-center md:items-start space-y-10 md:py-20 lg:ml-auto lg:w-96"
        >
          <h2
            class="text-gray-900 font-extralight text-2xl sm:text-3xl lg:text-5xl leading-tight text-center md:text-left"
          >
            I design & build responsive, optimized websites.
          </h2>
          <Button href="contact" lg>Free Consultation</Button>
        </div>
      </div>
    </Container>
  </div>
</div>

<!-- <div class="h-screen" on:mousemove={handleMousemove}>
  <div
    class="bg-gray-900 absolute z-20 w-full overflow-hidden h-1/2"
    style={`height: ${
      innerHeight / 2 - (m.y - innerHeight / 2 - 100) * 0.1
    }px;`}
  >
    <Container>
      <div class="absolute min-h-screen w-screen">
        <img
          src="/rk-logo.svg"
          alt="Raymond Kneipp Logo"
          class="absolute top-1/2 transform -translate-y-1/2"
        />
      </div>
    </Container>
  </div>
  <div class="h-1/2">
    <Container>
      <div class="h-full relative z-20 overflow-hidden">
        <div class="flex items-center justify-end w-full h-full">
          <div class="w-full md:w-96">
            <h1 class="text-white font-bold text-7xl">
              Hey, I’m<br />Raymond<br />Kneipp.
            </h1>
          </div>
        </div>
      </div>

      <div class="h-full relative z-0">
        <img
          src="/rk-logo-black.svg"
          alt="Raymond Kneipp Logo"
          class="absolute top-0 transform -translate-y-1/2"
        />
        <div class="flex items-center justify-end w-full h-full">
          <div class="w-96">
            <h2 class="text-gray-900 font-thin text-5xl leading-tight mb-5">
              Bespoke Websites<br />That Leave Lasting<br />Impressions
            </h2>

            <Button href="contact">Free Consultation</Button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</div> -->
