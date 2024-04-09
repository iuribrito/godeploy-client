<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Input from "$lib/components/Input.svelte";

  function handleSubmit(e: SubmitEvent) {
    console.log(e);
    const formData = new FormData(e.target);
    const data = {};

    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    console.log(data);
  }
</script>

<section>
  <div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  >
    <img class="h-16 mb-6" src="logo.png" alt="logo Go Deploy" />
    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form
          class="space-y-4 md:space-y-6"
          on:submit|preventDefault={handleSubmit}
        >
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="email@godeploy.com"
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="••••••••"
          />
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </div>
  </div>
</section>
