<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import * as Card from "$lib/components/ui/card/index.ts";
</script>

<div class="mt-3 w-[84vw]">
  <h1 class="text-4xl font-bold">Experience</h1>
  <Separator class="my-3" />
  <div class="pl-4 pt-4">
    <h2 class="font-bold text-2xl">Professional</h2>
    <Separator class="my-3" />
    <!-- Byte4 -->
    <Card.Root class="w-[80vw] md:w-[55vw] lg:w-[50vw] sm:mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>Software Developer Trainee</h3>
          </div>
          <div class="text-end">
            <h4>March 2025 - Current</h4>
          </div>
        </div>
        <div>
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            Byte4Tech
          </h4>
        </div>
      </Card.Header>
      <Card.Content class="pl-12">
        <ol class="list-disc">
          <li>
            Collaborated to fix bugs and refactor code on a large code base
          </li>
          <li>Gained experience by working with experienced developers</li>
        </ol>
      </Card.Content>
    </Card.Root>
    <!-- CYF -->
    <Card.Root class="w-[80vw] md:w-[55vw] lg:w-[50vw] sm:mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>CRM Implementation and API Integrations</h3>
          </div>
          <div class="text-end">
            <h4>May 2024 - July 2024</h4>
          </div>
        </div>
        <div>
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            Courtyard Farms
          </h4>
        </div>
      </Card.Header>
      <Card.Content class="pl-12">
        <ol class="list-disc">
          <li>Managed Implementation of Saas in ORM and CRM</li>
          <li>
            Integrated API’s to the CRM to inrease efficiency of Internal Teams
          </li>
        </ol>
      </Card.Content>
    </Card.Root>
  </div>
  <div class="pl-4 pt-4">
    <h2 class="font-bold text-2xl">Extracurricular</h2>
    <Separator class="my-3" />
    <!-- Sourceware -->
    <Card.Root class="w-[80vw] md:w-[55vw] lg:w-[50vw] sm:mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>Project Lead & Admin</h3>
          </div>
          <div class="text-end">
            <h4>Dec 2024 - Current</h4>
          </div>
        </div>
        <div>
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            SourcewareLab
          </h4>
        </div>
      </Card.Header>
      <Card.Content class="pl-12">
        <ol class="list-disc">
          <li>
            Lead project and actively moderated a discord server of 300+ members
          </li>
          <li>Interacted & communicated with professionals and fellow peers</li>
        </ol>
      </Card.Content>
    </Card.Root>
  </div>
</div>
