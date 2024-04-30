<script lang="ts">
  import { page } from "$app/stores";
  import NavigationItem from "./NavigationItem.svelte";

  const items = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ];
</script>

<div class="hidden lg:ml-6 lg:block">
  <div class="flex space-x-4">
    {#each items as { href, label }}
      {#if $page.url.pathname === href}
        <NavigationItem {label} {href} current />
      {:else}
        <NavigationItem {label} {href} />
      {/if}
    {/each}
  </div>
</div>
