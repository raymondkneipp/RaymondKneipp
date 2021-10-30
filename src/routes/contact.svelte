<script>
  import Link from "../components/link.svelte";
  import Container from "../components/container.svelte";

  let email = "";
  let msg = "";
  let success = "";
  let error = "";

  function submitDisabled(email, msg) {
    return email === "" || msg === "" || !validateEmail(email);
  }

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email,
          msg,
        }),
      });

      const data = await res.json();

      console.log(data);

      if (data.status === 200) {
        success = data.msg;
      } else {
        error = data.msg;
      }
    } catch (error) {
      error = error.msg;
    }
  }
</script>

<div class="bg-gray-900 py-20">
  <Container>
    <div class="min-h-screen pt-20">
      <h2 class="text-5xl font-bold text-white mb-10">Get In Touch</h2>

      <div class="grid md:grid-cols-2 gap-20">
        <div class="space-y-10">
          <div class="flex flex-row items-center space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-white">Email</h3>
              <Link
                href="mailto:raymond.f.kneipp@gmail.com"
                arrow={true}
                light
                external>raymond.f.kneipp@gmail.com</Link
              >
            </div>
          </div>

          <div class="flex flex-row items-center space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-white">Phone</h3>
              <Link href="tel:+1513-680-0072" arrow={true} light external
                >+1 (513) 680-0072</Link
              >
            </div>
          </div>

          <div class="flex flex-row items-center space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-white">Location</h3>
              <Link
                href="https://www.google.com/maps/place/Cincinnati,+OH,+USA/@39.1362562,-84.6804857,11z/data=!3m1!4b1!4m5!3m4!1s0x884051b1de3821f9:0x69fb7e8be4c09317!8m2!3d39.1031182!4d-84.5120196"
                arrow={true}
                light
                external>Cincinnati, Ohio</Link
              >
            </div>
          </div>

          <div class="flex flex-row items-center space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-white">LinkedIn</h3>
              <Link
                href="https://www.linkedin.com/in/raymondkneipp/"
                arrow={true}
                light
                external>View my profile</Link
              >
            </div>
          </div>

          <div class="flex flex-row items-center space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-white">GitHub</h3>
              <Link
                href="https://github.com/raymondkneipp"
                arrow={true}
                light
                external>Look at my code</Link
              >
            </div>
          </div>

          <div class="flex flex-row items-center space-x-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-white">Resume</h3>
              <Link
                href="/raymond-kneipp-resume.pdf"
                arrow={true}
                light
                external>View my resume</Link
              >
            </div>
          </div>
        </div>

        <form class="space-y-5" on:submit={(e) => handleSubmit(e)}>
          <h3 class="text-xl font-bold text-white">Send Me A Message</h3>

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
            disabled={submitDisabled(email, msg)}
            class="text-blue-400 hover:bg-blue-400 border-blue-400 focus:ring-blue-400 focus:ring-offset-gray-900 border hover:scale-110 transition-all hover:bg-opacity-10 active:scale-95 inline-flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-offset-2 text-center py-2 px-5 text-base disabled:cursor-default disabled:pointer-events-none disabled:text-gray-700 disabled:border-gray-700"
            >Submit</button
          >

          {#if success}
            <div class="bg-green-400 p-5 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <p class="text-gray-900">
                {success}
              </p>
            </div>
          {/if}

          {#if error}
            <div class="bg-red-400 p-5 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p class="text-gray-900">
                {error}
              </p>
            </div>
          {/if}
        </form>
      </div>
    </div>
  </Container>
</div>
