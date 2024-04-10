<script lang="ts">
  export let label: string;
  export let name: string;
  export let placeholder: string;
  export let type = "text";
  export let value = "";

  function set_type(node: any) {
    node.type = type;
  }
</script>

<div>
  <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
    >{label}</label
  >
  <input
    bind:value
    use:set_type
    {name}
    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
    {placeholder}
  />
</div>
