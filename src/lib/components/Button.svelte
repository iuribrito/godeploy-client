<script lang="ts">
  export let type = "button";
</script>

<button
  {type}
  class="flex gap-2 text-center items-center w-auto text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
>
  <slot />
</button>
