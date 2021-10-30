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
</script>

<Hero />
<Aboutme />
<Projects {projects} more />
<Why />
<Cta />
