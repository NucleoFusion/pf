<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="mt-3 w-[84vw] mb-20">
  <h1 class="text-4xl font-bold">Containers</h1>
  <Separator class="my-3" />
  <p class="px-5 pt-3 text-lg md:pr-50 pl-8 pt-10">
    Previosly I had been hosting and orchestrating my containers through Docker
    Compose, where I had one nginx container that would forward the requests to
    the internal services. Now, however I have recently started to adopt
    kubernetes (minikube) and moving to shift my containers from the docker
    instances to the kubernetes instance. Providing a better orchestration
    platform and experience.
    <br />
    <br />
    It doesn't come without its problems though, nothing does. My ISP, for some reason,
    has blocked ports 80 & 443, which are the default HTTP/HTTPS ports, due to this
    I currently have to host through a tunnel which is not ideal for me since it
    has limits on requests and also is slower than normal port forwarding. I have
    implemented that for now though, and I am exploring other options that I could
    have which are better than a tunnel.
    <br />
    <br />
    Current Plans include hosting:- <br />
  </p>
  <ol class="list-disc pl-16 pt-4">
    <li>Portfolio</li>
    <li>D2D</li>
    <li>Wyvern</li>
    <li>My SMTP Mailer</li>
    <li>and more...</li>
  </ol>
</div>
