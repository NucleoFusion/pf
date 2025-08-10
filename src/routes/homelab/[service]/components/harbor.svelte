<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="mt-3 w-[84vw] mb-20">
  <h1 class="text-4xl font-bold">Harbor</h1>
  <Separator class="my-3" />
  <p class="px-5 pt-3 text-lg md:pr-50 pl-8 pt-10">
    From the moment I got my server my aim has been to move to a Self-Hosted
    alternates to proprietary software, and while browsing CNCF projects I came
    across Harbor, a feature rich, Docker Image registry. I have not yet dived
    deep into using it, I am figuring out using the basic stuff like projects
    and repositories.
    <br />
    <br />
    It doesn't come without its problems though, nothing does. It still comes down
    to the fact that my ISP has blocked port 80/443 and thus I have to use tunnels
    to work with them. Because the tunnel I use has a 100mb limit, I cannot push
    large images to harbor. <br />
    <br />
  </p>
</div>
