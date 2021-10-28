<script context="module">
  export async function load({ page }) {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const url = "https://api.github.com/graphql";

    const body = JSON.stringify({
      query: `{
            user(login:"raymondkneipp") {
                pinnedItems(first: 3, types: [REPOSITORY, GIST]) {
                    totalCount
                    edges {
                        node {
                            ... on Repository {
                            name
                            description
                            homepageUrl
                            url
                            openGraphImageUrl
                            }
                        }
                    }
                }
            }
            }`,
    });
    const headers = {
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    };
    const res = await fetch(url, {
      body,
      headers,
      method: "POST",
    });
    const data = await res.json();
    return { props: { data } };
  }
</script>

<script>
  import Projects from "../components/projects.svelte";
  import Aboutme from "../components/aboutme.svelte";
  import Hero from "../components/hero.svelte";
  import Why from "../components/why.svelte";
  import Cta from "../components/cta.svelte";

  export let data;

  let projects = data?.data?.user?.pinnedItems?.edges;

  projects.push({
    node: {
      name: "BioBoost",
      description:
        "BioBoost is my startup supplement company. BioBoost features a blog using MDX, scroll-based animations using GSAP, and a contact form using SendGrid. Tailwind CSS is utilized to apply utility classes.",
      homepageUrl: "https://bioboost.fit",
      url: null,
      openGraphImageUrl: "/bioboost.jpg",
    },
  });

  projects.push({
    node: {
      name: "Raymond Kneipp",
      description:
        "My portfolio site is made using Svelte. Three.js is utilized to create 3D animations. GitHub's GraphQL API captures my pinned repositories and displays each project.",
      homepageUrl: "https://raymondkneipp.com",
      url: null,
      openGraphImageUrl: "/raymondkneipp.jpg",
    },
  });
</script>

<Hero />
<Aboutme />
<Projects {projects} />
<Why />
<Cta />

<svelte:head>
  <title>Web Developer - Raymond Kneipp</title>

  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>
