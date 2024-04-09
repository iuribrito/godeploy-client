<script lang="ts">
  export let label: string,
    type = "text",
    name: string,
    placeholder: string;
</script>

<div>
  <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
    >{label}</label
  >
  <input
    {type}
    {name}
    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
    {placeholder}
  />
</div>
