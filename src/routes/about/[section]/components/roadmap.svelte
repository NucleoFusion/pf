<script>
  import Separator from "$lib/components/ui/separator/separator.svelte";
</script>

<div class="mt-3 w-[84vw]">
  <h1 class="text-4xl font-bold">Roadmap / Timeline</h1>
  <Separator class="my-3" />
  <p class="pl-4">
    You can find the full repository <a
      class="underline"
      href="https://github.com/Nucleofusion/Roadmap">here</a
    >.
  </p>
  <div class="pl-4 pt-4">
    <h2 class="font-bold text-2xl">Low Level Plan</h2>
    <Separator class="my-3" />
    <ol class="list-disc pl-8 pt-2">
      <li>✓ Deep Memory Allocators</li>
      <li>Manual Data Serialization</li>
      <li>Advanced Network Programming</li>
      <li>Advanced Concurrency</li>
      <li>Deep Linkers, Loaders and ELF Format</li>
      <li>VMs and Interpreters</li>
      <li>Operating System Projects</li>
    </ol>
  </div>
  <div class="pl-4 pt-4">
    <h2 class="font-bold text-2xl">Backend Plan</h2>
    <Separator class="my-3" />
    <ol class="list-disc pl-8 pt-2">
      <li>gRPC API's</li>
      <li>✓ Websocket API's</li>
      <li>GraphQL API's</li>
      <li>System Design</li>
      <li>Database Design</li>
      <li>CyberSecurity</li>
      <li>✓ Caching & Performance</li>
      <li>✓ Microservices & Message Queues</li>
      <li>RabbitMQ & Kafka</li>
    </ol>
  </div>
  <div class="pl-4 pt-4 pb-10">
    <h2 class="font-bold text-2xl">DevOps Plan</h2>
    <Separator class="my-3" />
    <ol class="list-disc pl-8 pt-2">
      <li>CI/CD Pipelines</li>
      <li>Infrastructure as Code (IaC)</li>
      <li>Configuration Management (Ansible)</li>
      <li>Container Orchestration (K8)</li>
      <li>Monitoring and Logging (Grafana & Prometheus)</li>
      <li>Security in Devops</li>
    </ol>
  </div>
</div>
