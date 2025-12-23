<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import * as Card from "$lib/components/ui/card/index.ts";
</script>

<div class="mt-3 w-[84vw] mb-20">
  <h1 class="text-4xl font-bold">Experience</h1>
  <Separator class="my-3" />
  <div class="pl-4 pt-4">
    <h2 class="font-bold text-2xl">Professional</h2>
    <Separator class="my-3" />
    <!-- LFX -->
    <Card.Root class="w-[80vw] md:w-[55vw] lg:w-[50vw] sm:mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>The Linux Foundation</h3>
          </div>
          <div class="text-end">
            <h4>Sept 2025 - Dec 2025</h4>
          </div>
        </div>
        <div>
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            Software Developer Intern
          </h4>
        </div>
      </Card.Header>
      <Card.Content class="pl-12">
        <ol class="list-disc">
          <li>
            Built an automated CI/CD pipeline with Dagger saving manual time
            consumed by 80%
          </li>
          <li>
            Added 6+ commands to the CLI, bringing feature parity with the
            Harbor WebUI
          </li>
        </ol>
      </Card.Content>
    </Card.Root>
    <!-- HRC -->
    <Card.Root class="w-[80vw] md:w-[55vw] lg:w-[50vw] sm:mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>Hansraj College, University of Delhi</h3>
          </div>
          <div class="text-end">
            <h4>Sept 2025 - Ongoing</h4>
          </div>
        </div>
        <div>
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            Lead Developer
          </h4>
        </div>
      </Card.Header>
      <Card.Content class="pl-12">
        <ol class="list-disc">
          <li>
            Led the development and deployment of in-house reproduction of
            official college website
          </li>
          <li>
            Mentored junior students in contributing to projects and following
            industry standards
          </li>
        </ol>
      </Card.Content>
    </Card.Root>
    <!-- Byte4 -->
    <Card.Root class="w-[80vw] md:w-[55vw] lg:w-[50vw] sm:mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>Byte4Tech</h3>
          </div>
          <div class="text-end">
            <h4>March 2025 - July 2025</h4>
          </div>
        </div>
        <div>
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            Software Developer Trainee
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
  </div>
  <div class="pl-4 pt-4">
    <h2 class="font-bold text-2xl">Extracurricular / Open Source</h2>
    <Separator class="my-3" />
    <!-- Harbor -->
    <Card.Root class="w-[80vw] md:w-[55vw] lg:w-[50vw] sm:mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>Harbor @CNCF</h3>
          </div>
          <div class="text-end">
            <h4>Dec 2024 - Current</h4>
          </div>
        </div>
        <div>
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            Open Source Contributor
          </h4>
        </div>
      </Card.Header>
      <Card.Content class="pl-12">
        <ol class="list-disc">
          <li>
            Helped integrate 6+ core commands to bring the CLI on par with the
            WebUI. #540 #550 #533 #572 #566 #564
          </li>
          <li>
            Developed a Dagger-based automated CI/CD Pipeline from scratch. #547
          </li>
        </ol>
      </Card.Content>
    </Card.Root>
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
