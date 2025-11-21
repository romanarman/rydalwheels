<script>
    import warrantyFirst from '$lib/assets/WF Logo.png';
    import { Section, HeroHeader } from "flowbite-svelte-blocks";
</script>



<Section class="bg-gray-100 py-10">
  <HeroHeader class="text-center max-w-6xl mx-auto px-6">
    {#snippet h2()}
      <span class="text-4xl sm:text-5xl font-semibold tracking-tight" style="font-family:'Balgin', sans-serif;">
        You’ll be in safe hands
      </span>
    {/snippet}

    <!-- Logo centered -->
    <div class="flex justify-center my-10">
      <img src={warrantyFirst} alt="Warranty First Logo" class="h-20 w-auto" />
    </div>

    <!-- Modern Benefits Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
      <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
        <h3 class="text-xl font-semibold mb-3">Unlimited Miles</h3>
        <p class="text-gray-500">Drive as far as you like with complete peace of mind.</p>
      </div>
      <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
        <h3 class="text-xl font-semibold mb-3">Use Any UK Garage</h3>
        <p class="text-gray-500">Flexibility to choose your preferred garage nationwide.</p>
      </div>
      <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
        <h3 class="text-xl font-semibold mb-3">Transferable Cover</h3>
        <p class="text-gray-500">Warranty can be transferred to the next owner for added value.</p>
      </div>
    </div>
  </HeroHeader>
</Section>

