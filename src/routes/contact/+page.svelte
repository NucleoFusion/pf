<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as Card from "$lib/components/ui/card/index.ts";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import Textarea from "$lib/components/ui/textarea/textarea.svelte";
  import axios from "axios";
  import { toast } from "svelte-sonner";

  let email = $state("");
  let content = $state("");
  let subject = $state("");
  let name = $state("");

  const sendMail = () => {
    toast.promise(
      axios.post(`https://mailer.nucleofusion.com/send`, {
        email,
        subject,
        name,
        content,
      }),
      {
        loading: "Sending...",
        success: "Sent Successfully!",
        error: "An Error Occurred!",
      },
    );
  };
</script>

<!-- TODO: Send Logic -->

<div class="w-[100vw] h-[100vh] grid justify-center items-center">
  <Card.Root class="w-[80vw] md:w-[50vw] lg:w-[35vw]">
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
        <div class="grid md:grid-cols-2 gap-2 md:gap-10">
          <div class="mt-3">
            <Label for="email" class="pb-2 ml-1 text-md">Name</Label>
            <Input name="name" placeholder="Name" bind:value={name} />
          </div>
          <div class="mt-3">
            <Label for="email" class="pb-2 ml-1 text-md">Subject</Label>
            <Input name="subject" placeholder="Subject" bind:value={subject} />
          </div>
        </div>
        <div class="mt-7">
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
        <Button onclick={sendMail}>Send Email</Button>
      </div>
    </Card.Footer>
  </Card.Root>
</div>
