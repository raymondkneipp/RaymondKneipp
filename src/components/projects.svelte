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
    </div>
  </Container>
</div>
