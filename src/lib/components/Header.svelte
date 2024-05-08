<script>
  import Navigation from "./Navigation.svelte";
  import Notification from "./Notification.svelte";
  import Profile from "./Profile.svelte";
</script>

<nav class="bg-gray-900">
  <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex items-center px-2 lg:px-0">
        <div class="flex-shrink-0">
          <img class="h-8 w-auto" src="/logo_dark.png" alt="Go Deploy" />
        </div>
        <Navigation />
      </div>

      <div class="hidden lg:ml-4 lg:block">
        <div class="flex items-center">
          <Notification />
          <!-- Profile dropdown -->
          <Profile />
        </div>
      </div>
    </div>
  </div>
</nav>
