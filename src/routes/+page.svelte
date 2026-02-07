<script lang="ts">

    import Header from "$lib/components/Header.svelte";
	import Navbar from "$lib/components/Navbar.svelte";

    import autotrader from "$lib/assets/autotrader.svg"

    import awaiting from '$lib/assets/cars/ImagesAwaiting.jpg';
	import Warranty from "$lib/components/Warranty.svelte";
	import CarInfo from "$lib/components/CarInfo.svelte";
	import Footer from "$lib/components/Footer.svelte";

    import { cars } from '$lib/data/cars';

    // Compute the number of columns for md/lg based on number of cars
    let gridColsClass = cars.length === 1 
        ? "md:grid-cols-1 lg:grid-cols-1" 
        : cars.length === 2 
        ? "md:grid-cols-2 lg:grid-cols-2" 
        : "md:grid-cols-2 lg:grid-cols-3";

        
</script>

<Navbar/>

<Header/>

<section id="stock" class="w-full flex flex-col items-center py-16 bg-gray-50">

    <h1 class="font-bold text-5xl mb-2 relative text-center">
        Our Stock
        <span class="absolute left-1/2 -bottom-2 w-24 h-1 bg-[#EA5252] -translate-x-1/2"></span>
    </h1>

    <div class={`mt-10 grid gap-10 grid-cols-1 ${gridColsClass} justify-items-center`}>
        {#each cars as car}
            <section class="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-200">
                <div class="w-full relative">
                    <a href={car.link} target ="_blank">
                        <div class="w-full h-64 bg-gray-100 flex items-center justify-center">
                            <img
                                src={car.image}
                                alt={`${car.year} ${car.make} ${car.model} ${car.spec}`}
                                class="w-full h-full object-cover"
                            />
</div>

                    </a>
                    {#if car.image === awaiting}
                        <div class="absolute inset-0 flex items-center justify-center">
                            <p class="text-black/70 font-semibold text-sm bg-white/70 px-3 py-1 rounded-xl">
                                Awaiting Photos
                            </p>
                        </div>
                    {/if}

                    {#if car.sold}
                        <span class="absolute top-2 left-2 bg-[#EA5252] text-white text-sm font-bold px-2 py-1 rounded-lg">
                            SOLD
                        </span>
                    {/if}
                </div>
                <div class="p-5 space-y-3">
                    <div class="flex flex-wrap gap-2 items-center">
                        <div class="bg-[#171717] rounded-xl px-2 py-1">
                            <p class="text-white text-xs font-semibold">{car.fsh ? 'FSH' : 'PSH'}</p>
                        </div>
                        <div class="bg-[#EA5252] rounded-xl px-2 py-1">
                            <p class="text-white text-xs font-semibold">{car.badge}</p>
                        </div>
                        {#if car.link}
                            <a href={car.link} target="_blank" class="ml-auto shrink-0">
                                <img src={autotrader} class="h-6" />
                            </a>
                        {/if}
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm">{car.engine} {car.spec}</p>

                        <div class="flex gap-2 font-bold text-2xl">
                            <p>{car.make}</p>
                            <p>{car.model}</p>
                        </div>
                        <div class="flex gap-2 text-gray-700 text-sm">
                            <p>{car.transmission} |</p>
                            <p>{car.fuel} |</p>
                            <p>{car.engine} L</p>
                        </div>
                    </div>
                    <p class="font-bold text-xl {car.sold ? 'line-through text-gray-400' : ''}">{car.price}</p>
                    <div class="w-full h-[1px] shadow-sm bg-gray-300 my-3"></div>

                    <div class="flex flex-wrap gap-x-2 text-gray-700 text-xs pt-1">
                        <p>{car.reg} •</p>
                        <p>{car.miles} miles •</p>
                        <p>{car.year} •</p>
                        <p>{car.owners} Owners •</p>
                        <p>{car.keys} Keys</p>
                    </div>
                </div>
            </section>
        {/each}
    </div>

    
</section>

<CarInfo/>

<Footer/>