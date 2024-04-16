<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Input from "$lib/components/Input.svelte";

  let email = "iuri.brito@lti.net.br";
  let password = "password";

  async function handleSubmit(e: SubmitEvent) {
    const res = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log("RESPONSE", await res.json());
  }
</script>

<section>
  <div
    class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
  >
    <img class="h-16 mb-6" src="logo.png" alt="logo Go Deploy" />
    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form method="POST" class="space-y-4 md:space-y-6">
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="email@godeploy.com"
            value={email}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="••••••••"
            value={password}
          />
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </div>
  </div>
</section>
