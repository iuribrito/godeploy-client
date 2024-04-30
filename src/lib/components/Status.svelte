<script lang="ts">
  export let schema = "default";

  let bgColor = "";
  let textColor = "";

  switch (schema) {
    case "success":
      bgColor = "bg-green-200";
      textColor = "text-green-900";
      break;
    case "error":
      bgColor = "bg-red-200";
      textColor = "text-red-900";
      break;
    case "warning":
      bgColor = "bg-orange-200";
      textColor = "text-orange-900";
      break;
    default:
      bgColor = "bg-gray-200";
      textColor = "text-gray-900";
      break;
  }
</script>

<span
  class="relative inline-block px-3 py-1 font-semibold leading-tight {textColor}"
>
  <span
    aria-hidden
    class="absolute inset-0 bg-green-200 opacity-50 rounded-full {bgColor}"
  ></span>
  <span class="relative"><slot /></span>
</span>
