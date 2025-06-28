<script lang="ts">
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="mt-3 w-[84vw] mb-20">
  <h1 class="text-4xl font-bold">Upgrade Path</h1>
  <Separator class="my-3" />
  <p class="px-5 pt-3 text-lg md:pr-50 pl-8 pt-10">
    Through careful considerations I have chosen a modern motherboard, although
    it may be limited in RAM Speeds, and NVMe Slots but that are not that
    required in the server. And Since AMD announced support for AM4 for a few
    more years I have to some extent a decently upgradeable machine.
    <br />
    <br />
    Once I am able to afford some improvisations, my main focus will be:-<br />
  </p>
  <ol class="list-disc pl-16 pt-4">
    <li><span class="font-bold">RAM</span>: 16GB {`->`} 32GB</li>
    <li>
      <span class="font-bold">Storage</span>: 300GB HDD {`->`} 256 NVMe + 1TB HDD
      or SATA SSD
    </li>
    <li>
      <span class="font-bold">GPU</span>: Get a cheap GPU
    </li>
  </ol>
  <p class="px-5 pt-3 text-lg md:pr-50 pl-8 pt-10">
    And further down the line, I can look towards a processor that offers more
    cores and threads, and maybe even motherboard that will support higher RAM
    Speeds, and more slots.
    <br />
    <br />
    Down the line I would like to split my homelabs/servers into clusters too. Splitting
    containers and other stuff.
  </p>
</div>
