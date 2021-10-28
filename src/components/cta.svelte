<script>
  import Button from "./button.svelte";
  import Container from "./container.svelte";
</script>

<div class="py-20 bg-blue-600">
  <Container>
    <div
      class="max-w-screen-sm flex flex-col items-center justify-center mx-auto space-y-5"
    >
      <h2 class="text-3xl md:text-5xl font-bold text-white text-center">
        Boost your online presence. Get a free quote today.
      </h2>
      <p class="text-white text-center md:text-lg">
        Let me build you an amazing website so you can show off your business to
        the world wide web.
      </p>
      <Button href="/contact" lg white>Get In Touch</Button>
    </div>
  </Container>
</div>
