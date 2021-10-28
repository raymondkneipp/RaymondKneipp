<script>
  export let projects;
  import Button from "./button.svelte";
  import Container from "./container.svelte";
  import Link from "./link.svelte";
</script>

<div class="py-20">
  <Container>
    <h2 class="text-5xl font-bold text-gray-900 mb-10">Portfolio</h2>

    <div class="grid lg:grid-cols-2 gap-10 lg:gap-20">
      {#each projects as project}
        <div class="flex flex-col items-start justify-start">
          <img src={project.node.openGraphImageUrl} alt={project.node.name} />
          <div
            class="border-r border-l border-b space-y-5 p-5 sm:p-10 w-full h-full flex flex-col items-start justify-start"
          >
            <h3 class="text-3xl font-bold text-gray-900 break-all">
              {project.node.name}
            </h3>

            <p class="flex-1">
              {project.node.description}
              <Link href={`/projects/${project.node.name}`}>Read More</Link>
            </p>

            <div
              class="flex items-start justify-end sm:space-x-5 flex-col sm:flex-row sm:space-y-0 space-y-5"
            >
              <Button href={project.node.url} sub>View Code</Button>
              <Button href={`${project.node.homepageUrl}`} external>
                Visit Project
              </Button>
            </div>
          </div>
        </div>
      {/each}

      <div
        class="flex flex-col items-center justify-center bg-gray-100 p-10 space-y-5 border"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-36 w-36 text-gray-200"
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
        <h6 class="text-gray-500 font-bold text-xl">Want to see more?</h6>

        <Button href="/projects" lg>All Projects</Button>
      </div>
    </div>
  </Container>
</div>
