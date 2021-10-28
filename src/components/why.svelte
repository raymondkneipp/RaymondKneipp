<script>
  import Container from "./container.svelte";
  import Check from "./check.svelte";

  const reasons = [
    "Establish your online presence & credibility",
    "Bring your ideas to life",
    "Engage with brand-new customers",
    "Scale your business",
    "Increase business revenue",
    "Outperform competitors",
  ];

  const offerings = [
    "Create a mobile-friendly responsive design",
    "A search engine optimized website",
    "E-commerce integrations",
    "A tailored website",
    "Database integrations",
    "Custom logo",
  ];
</script>

<div class="py-20 bg-gray-900">
  <Container>
    <div class="grid md:grid-cols-2 gap-20">
      <div>
        <h3 class="text-2xl font-bold text-white mb-10">Why Get A Website?</h3>

        <ul class="text-white">
          {#each reasons as reason}
            <li
              class="flex items-center border-b last:border-0 border-gray-700 py-3"
            >
              <Check />{reason}
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-10">
          What I Can Do For You
        </h3>

        <ul class="text-white">
          {#each offerings as offer}
            <li
              class="flex items-center border-b last:border-0 border-gray-700 py-3"
            >
              <Check />{offer}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </Container>
</div>
