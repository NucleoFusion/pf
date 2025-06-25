<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import * as Card from "$lib/components/ui/card/index.ts";
</script>

<div class="mt-3 w-[84vw]">
  <h1 class="text-4xl font-bold">Education</h1>
  <Separator class="my-3" />
  <div class="pl-4">
    <!-- Hansraj -->
    <Card.Root class="w-[50vw] mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>BSc Physical Science with Computer Science</h3>
          </div>
          <div class="text-end">
            <h4>August 2023 - Current</h4>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            Hansraj College, University of Delhi
          </h4>
          <h4 class="text-end pr-2">-</h4>
        </div>
      </Card.Header>
    </Card.Root>
    <!--  -->
    <Card.Root class="w-[50vw] mx-10 mt-7">
      <Card.Header>
        <div class="grid grid-cols-2">
          <div class="text-start">
            <h3>12th Grade</h3>
          </div>
          <div class="text-end">
            <h4>2023</h4>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <h4 class="text-card-foreground pl-2 pt-2 text-sm italic">
            Mother's International School
          </h4>
          <h4 class="text-end pr-2">84.2%</h4>
        </div>
      </Card.Header>
    </Card.Root>
  </div>
</div>
