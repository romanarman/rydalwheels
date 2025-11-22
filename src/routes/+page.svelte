<script lang="ts">

    import Header from "$lib/components/Header.svelte";
	import Navbar from "$lib/components/Navbar.svelte";

    import autotrader from "$lib/assets/autotrader.svg"

    import HK16OMC from "$lib/assets/HK16OMC.jpg"
	import Warranty from "$lib/components/Warranty.svelte";
	import CarInfo from "$lib/components/CarInfo.svelte";
	import Footer from "$lib/components/Footer.svelte";

    // Array of cars
    const cars = [
        { image: HK16OMC, fsh: true, badge: "New Brake Pads + Discs", sold: true, price: "£5,995", reg:"HK16 OMC", year: 2016, owners: 4, keys:2, miles:"63,420", make: "Hyundai", model:"i20", transmission: "Manual",fuel:"Petrol", engine:1.2, spec:"Blue Drive SE", link:"https://www.autotrader.co.uk/car-details/202511127836973?fromSavedAds=true&advertising-location=at_cars&sort=relevance&postcode=HA9+8RZ&calc-deposit=500&calc-term=48&calc-mileage=10000&calc-selected-product=HP"}
    ];

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
                        <img src={car.image} alt="car" class="w-full h-auto object-contain" />
                    </a>
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
                        <a href={car.link} target="_blank" rel="noopener noreferrer" class="ml-auto">
                            <img src={autotrader} alt="Autotrader" class="h-6 w-auto hover:opacity-80 transition duration-200"/>
                        </a>
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
                    <p class="font-bold text-xl line-through">{car.price}</p>
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