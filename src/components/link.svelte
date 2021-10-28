<script>
  export let href;
  export let arrow = true;
  export let light = false;
  export let external = undefined;

  const colors = light
    ? "text-blue-400 focus:ring-blue-400 focus:ring-offset-gray-900"
    : "text-blue-600 focus:ring-blue-600 focus:ring-offset-white";
</script>

<a
  class={`${colors} hover:underline transition-all hover:bg-opacity-10 focus:outline-none focus:ring-1 focus:ring-offset-2 inline-flex items-center group`}
  {href}
  rel={external ? "external" : ""}
>
  <slot />
  {#if arrow}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 group-hover:ml-2 transition-all"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  {/if}
</a>
