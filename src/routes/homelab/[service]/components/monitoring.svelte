<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="mt-3 w-[84vw] mb-20">
  <h1 class="text-4xl font-bold">Monitoring</h1>
  <Separator class="my-3" />
  <p class="px-5 pt-3 text-lg md:pr-50 pl-8 pt-10">
    This is a work in progress, since I just recently switched to kubernetes,
    and setup monitoring as a test deployment to check whether minikube + tunnel
    would work properly. I have not put extensive configuration yet, and will do
    after I have migrated my containers to k8s.
    <br /><br />
    This also gave me an insight into the community behind kubernetes, including
    helm and other services that fit all too well with it.
  </p>
</div>
