<script lang="ts">
  export let label: string;
  export let href: string;

  export let current = false;

  let className =
    "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600";

  if (current) {
    className =
      "rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-600";
  }
</script>

<a {href} class={className}>
  {label}
</a>
