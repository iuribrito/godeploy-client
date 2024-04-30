<script>
  import Button from "$components/Button.svelte";
  import Input from "$components/Input.svelte";
  import Status from "$components/Status.svelte";
  import Td from "$components/Td.svelte";
  import Th from "$components/Th.svelte";

  export let data;
  const project = data.project;

  const mockDeployes = [
    {
      author: "Gustavo",
      deployedAt: "21/04/2024",
      branch: "master",
      status: "warning",
      statusLabel: "Deploing ...",
    },
    {
      author: "Gustavo",
      deployedAt: "20/04/2024",
      branch: "master",
      status: "success",
      statusLabel: "Deployed",
    },
    {
      author: "Gustavo",
      deployedAt: "20/04/2024",
      branch: "master",
      status: "error",
      statusLabel: "Fail",
    },
    {
      author: "Gustavo",
      deployedAt: "21/04/2024",
      branch: "master",
      status: "dafault",
      statusLabel: "Paused",
    },
  ];

  console.log(project);
</script>

<div class=" flex items-center justify-between pb-6">
  <div>
    <h2 class="text-gray-600 font-semibold text-2xl">
      <a href="/projects" class="text-blue-700 hover:text-blue-800">Projects</a>
      / {project.name}
    </h2>
    <span class="text-xs">All projects item</span>
  </div>
  <div class="flex items-center justify-between">
    <div class="lg:ml-40 ml-10 space-x-8">
      <Button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          class="fill-white"
        >
          <path
            d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
          />
        </svg>
        Settings
      </Button>
    </div>
  </div>
</div>
<div class="my-5 border-gray-200 bg-white px-4 py-4 rounded-lg">
  <div class="flex mb-3 flex-col">
    <Input label="Branch" />
  </div>
  <Button>Deploy</Button>
</div>
<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
  <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <Th>Name</Th>
          <Th>Deployed At</Th>
          <Th>Branch</Th>
          <Th>Status</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each mockDeployes as deploy}
          <tr>
            <Td>
              <p class="text-gray-900 whitespace-no-wrap">{deploy.author}</p>
            </Td>
            <Td>
              <p class="text-gray-900 whitespace-no-wrap">
                {deploy.deployedAt}
              </p>
            </Td>
            <Td>
              <p class="text-gray-900 whitespace-no-wrap">{deploy.branch}</p>
            </Td>
            <Td>
              <Status schema={deploy.status}>{deploy.statusLabel}</Status>
            </Td>
            <Td>
              <a
                href="/projects/{project.ID}"
                class="ml-auto relative text-gray-500 bg-gray-100 hover:text-gray-900 hover:bg-gray-200 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center"
              >
                <span
                  class="flex items-center justify-center p-0 m-0 leading-none shrink-0 fill-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    viewBox="0 -960 960 960"
                    width="16"
                    ><path
                      d="M320-480v-80h320v80H320Zm0-160v-80h320v80H320Zm-80 240h300q29 0 54 12.5t42 35.5l84 110v-558H240v400Zm0 240h442L573-303q-6-8-14.5-12.5T540-320H240v160Zm480 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Zm-480-80v-640 640Zm0-160v-80 80Z"
                    /></svg
                  >
                </span>
              </a>
            </Td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
