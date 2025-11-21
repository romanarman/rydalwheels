<script>
    import { page } from "$app/state"; // REQUIRED for activeUrl

    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
    let activeUrl = $derived(page.url.pathname);

    import logo from '$lib/assets/Navbar RW Red-01.png';
</script>



<Navbar class="bg-white/80 backdrop-blur-md border-b border-black/5">  
  <NavBrand href="/" class="flex-1 justify-center md:justify-start">
    <img src={logo} class="h-12 sm:h-12" alt="Rydal Wheels Logo" />
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi>About Me</NavLi>
    <NavLi>Warranty</NavLi>
    <NavLi>Location</NavLi>
    <NavLi>Contact Us</NavLi>
  </NavUl>
</Navbar>