<script lang="ts">
  import Td from "$components/Td.svelte";
  import Button from "$lib/components/Button.svelte";
  import Th from "$lib/components/Th.svelte";
  export let data;

  console.log(data.projects);
</script>

<div class=" flex items-center justify-between pb-6">
  <div>
    <h2 class="text-gray-600 font-semibold text-2xl">Projects</h2>
    <span class="text-xs">All projects item</span>
  </div>
  <div class="flex items-center justify-between">
    <div class="lg:ml-40 ml-10 space-x-8">
      <Button type="button">New Project</Button>
    </div>
  </div>
</div>
<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <Th>Name</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each data.projects as project}
          <tr>
            <Td>
              <p class="text-gray-900 whitespace-no-wrap">
                {project.name}
              </p>
            </Td>
            <Td>
              <a
                href="/projects/{project.ID}"
                class="ml-auto relative text-gray-500 bg-gray-100 hover:text-gray-900 hover:bg-gray-200 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center"
              >
                <span
                  class="flex items-center justify-center p-0 m-0 leading-none shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    ></path>
                  </svg>
                </span>
              </a>
            </Td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
