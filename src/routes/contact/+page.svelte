<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Card from "$lib/components/ui/card/index.ts";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";

  let email = $state("");
  let content = $state("");
</script>

<!-- TODO: Send Logic -->

<div class="w-[100vw] h-[100vh] grid justify-center items-center">
  <Card.Root class="w-[30vw]">
    <Card.Header>
      <Card.Title class="text-3xl text-center">Contact Me</Card.Title>
    </Card.Header>
    <Card.Content>
      <form>
        <div>
          <Label for="email" class="pb-2 ml-1 text-md">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            bind:value={email}
          />
        </div>
        <div class="mt-3">
          <Label for="content" class="pb-2 ml-1 text-md">Body</Label>
          <Textarea
            class="w-full h-[20vh]"
            id="content"
            bind:value={content}
            placeholder="Type your message here."
          />
        </div>
      </form>
    </Card.Content>
    <Card.Footer class="pt-10 grid justify-center text-center">
      <div>
        <Button>Send Email</Button>
      </div>
    </Card.Footer>
  </Card.Root>
</div>
