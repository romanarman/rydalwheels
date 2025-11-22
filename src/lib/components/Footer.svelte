<script>
  import logo from '$lib/assets/Navbar RW Red-01.png';
  
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  const socialLinks = [
    { icon: "📸", href: "https://www.instagram.com/rydalwheels/" }, // Instagram placeholder
  ];
</script>

<footer class="bg-gray-50 border-t border-gray-200 mt-12 w-full">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <!-- Logo + Description -->
    <div class="flex flex-col space-y-4">
      <a href="/" class="flex items-center">
        <img src={logo} alt="Seekrs logo" class="h-6 md:h-8 w-auto" />
      </a>
      <p class="text-gray-500 text-sm">
        A small collection, of reliable and well prepared cars - ready to go to new homes.
      </p>

      <p class="text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} RydalWheels. All rights reserved.
      </p>
    </div>

    <!-- Quick Links -->
    <div class="flex flex-col space-y-2">
      <h4 class="text-gray-900 font-semibold mb-2">Quick Links</h4>
      {#each navLinks as link}
        <a href={link.href} class="text-gray-600 hover:text-gray-900 text-sm">{link.title}</a>
      {/each}
    </div>

    <!-- Social -->
    <div class="flex flex-col space-y-2">
      <h4 class="text-gray-900 font-semibold mb-2">Follow Us</h4>
      <div class="flex space-x-4">
        {#each socialLinks as social}
          <a href={social.href} class="text-gray-600 hover:text-gray-900 text-xl">{social.icon}</a>
        {/each}
      </div>
    </div>
  </div>
</footer>