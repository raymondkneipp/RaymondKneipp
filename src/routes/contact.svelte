<script>
  import Container from "../components/container.svelte";

  let email = "";
  let msg = "";
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
            bind:value={email}
            class="bg-transparent border border-gray-700 py-2 px-5 text-white outline-none focus:border-white transition-all"
          />
        </div>

        <div class="flex flex-col space-y-2">
          <label for="message" class="text-white">Message</label>
          <textarea
            id="message"
            bind:value={msg}
            cols="10"
            class="bg-transparent border border-gray-700 py-2 px-5 text-white outline-none focus:border-white transition-colors resize-y h-36"
          />
        </div>

        <button
          type="submit"
          class="text-blue-400 hover:bg-blue-400 border-blue-400 focus:ring-blue-400 focus:ring-offset-gray-900 border hover:scale-110 transition-all hover:bg-opacity-10 active:scale-95 inline-flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-offset-2 text-center py-2 px-5 text-base"
          >Submit</button
        >

        <p>{email} sent {msg}</p>
      </form>
    </div>
  </Container>
</div>
