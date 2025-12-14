<script lang="ts">
  import logo from '$lib/assets/Navbar RW Red-01.png';

  export let error;
  export let status;
</script>

<section class="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
  <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
    <img src={logo} class="mx-auto mb-6 h-14" />

    <h1 class="text-6xl font-extrabold text-[#EA5252] mb-4">404</h1>

    <h2 class="text-2xl font-bold text-gray-900 mb-3">
      Website under maintenance
    </h2>

    <p class="text-gray-500">
      We’re currently working on improvements. Please check back shortly.
    </p>

    <div class="w-16 h-1 bg-[#EA5252] mx-auto mt-6 rounded-full"></div>
  </div>
</section>