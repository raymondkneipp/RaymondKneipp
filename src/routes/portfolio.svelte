<script context="module">
  export async function load({ page }) {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const url = "https://api.github.com/graphql";

    const body = JSON.stringify({
      query: `{
            user(login:"raymondkneipp") {
                pinnedItems(first: 6, types: [REPOSITORY, GIST]) {
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
      homepageUrl: null,
      url: "https://github.com/raymondkneipp/RaymondKneipp",
      openGraphImageUrl: "/raymondkneipp.jpg",
    },
  });
</script>

<div class="pt-20">
  <Projects {projects} />
</div>
