<script>
  import Container from "../components/container.svelte";

  import Button from "../components/button.svelte";
  import Link from "../components/link.svelte";
</script>

<div class="bg-gray-900 py-20">
  <Container>
    <div class="min-h-screen pt-20">
      <h2 class="text-5xl font-bold text-white mb-10">Get In Touch</h2>

      <form class="space-y-5">
        <div class="flex flex-col space-y-2">
          <label for="email" class="text-white">Email</label>
          <input
            type="email"
            id="email"
            class="bg-transparent border border-gray-700 py-2 px-5 text-white outline-none focus:border-white transition-all"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label for="message" class="text-white">Message</label>
          <textarea
            id="message"
            cols="10"
            class="bg-transparent border border-gray-700 py-2 px-5 text-white outline-none focus:border-white transition-colors resize-y h-36"
          />
        </div>
      </form>
    </div>
  </Container>
</div>
