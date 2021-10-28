<script>
  import Container from "../components/container.svelte";

  import Button from "../components/button.svelte";
  import Link from "../components/link.svelte";
</script>

<div class="bg-gray-900 py-20">
  <Container>
    <div class="grid md:grid-cols-2 items-start gap-20 min-h-screen pt-20">
      <div class="flex flex-col justify-center items-start space-y-10">
        <h2 class="text-5xl font-bold text-white">More About Me</h2>
        <p class="text-white text-xl">
          Hey 👋, I'm Raymond Kneipp, and I am a freelance web developer. I live
          and work in Cincinnati, OH. I spend most of my days either trying to
          keep up with the ever-changing web development ecosystem or coming up
          with ideas for new personal projects.
        </p>

        <Button href="/portfolio" light lg>View Projects</Button>
      </div>

      <div class="space-y-5">
        <h3 class="text-3xl font-bold text-white mb-10">Experience</h3>

        <p class="text-white text-lg">
          I created my first website in 2014 with PHP. I believe I got into web
          development because I always enjoyed building things but did not like
          the cost of robotic kits. The website was for a local Boy Scout troop
          that I happened to be a part of. The website offered user
          authentication so that scouts could log in and check to see how much
          money they had in their scouting accounts.
        </p>

        <p class="text-white text-lg">
          As years went by, I greatly improved my web development skills. In
          late 2018 I enlisted in the Marine Corps Reserves. After training, I
          discovered Angular and React.js. After trying out the two frameworks,
          I decided to pursue learning React. To test out my new React skills, I
          created a website for a family friend's salon called <Link
            light
            href="https://beauty-bratz.netlify.app/"
            arrow={false}
            external>Beauty Bratz</Link
          >. Soon after, I worked with a local flight enthusiast club and made
          them a website which can be found <Link
            href="https://eaachapter174.org/"
            light
            external
            arrow={false}>here</Link
          >.
        </p>

        <p class="text-white text-lg">
          I began to focus on helping small businesses establish their online
          presence by designing and building attractive, professional, and
          SEO-optimized websites.
        </p>

        <p class="text-white text-lg">
          If you are interested in my work, shoot me an email at
          <Link href="mailto:raymond.f.kneipp@gmail.com" light external
            >raymond.f.kneipp@gmail.com</Link
          >
        </p>

        <Button href="/raymond-kneipp-resume.pdf" external light
          >My Resume</Button
        >
      </div>
    </div>
  </Container>
</div>
