<script>
    import carKey from '$lib/assets/car-key.png';
    import checklist from '$lib/assets/list.png';
    import magnify from '$lib/assets/magnifier.png';
    import golf from '$lib/assets/Golf.png'

    const steps = [
        {
            title: "Browse",
            caption: "Find your perfect car online",
            icon: magnify
        },
        {
            title: "Reserve",
            caption: "Secure your car quickly and easily",
            icon: checklist
        },
        {
            title: "Drive Away",
            caption: "Pick up your car and drive home (or have it delivered!)",
            icon: carKey
        }
    ];
</script>

<!-- <style>
    section {
        font-family: 'Red Hat Display Variable', sans-serif;
    }
    h1 {
        font-weight: 900;
    }
    h2 {
        font-weight: 700;
    }
    span.italic {
        font-weight: 900;
        font-style: italic;
    }
</style> -->

<section class="bg-[#EA5252] p-5 m-5 rounded-3xl text-white">
    <!-- Grid container -->
    <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center max-w-7xl mx-auto px-6 gap-16 mt-10 mb-10 md:mt-20 md:mb-20">

        <!-- Left Grid: Hero + CTA + Trust badges -->
        <div class="flex flex-col justify-center w-full text-center lg:text-left space-y-5">

            <!-- <img src={golf} class="w-full max-w-lg h-auto object-contain" alt="Golf" />             -->
            <!-- Heading -->
            <h1 class="font-bold text-6xl sm:text-6xl md:text-7xl lg:text-7xl">
                <span class="italic">Ryde</span> your car away today
            </h1>

            <!-- Tagline -->
            <p class="tracking-widest">
                QUALITY | RELIABILITY | PEACE OF MIND
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 pt-5 justify-center lg:justify-start">
                <button class="px-6 py-3 bg-[#242424] text-white font-bold shadow-sm rounded-lg hover:bg-black transition duration-200"
                on:click={() => document.getElementById('stock').scrollIntoView({ behavior: 'smooth' })}>
                    View Our Cars
                </button>
                <button class="px-6 py-3 bg-white text-[#EA5252] font-semibold border border-[#EA5252] rounded-lg shadow-sm hover:bg-[#242424] hover:text-white transition duration-200">
                    Sell Your Car Easily
                </button>
            </div>

            <!-- Trust Badges -->
            <div class="flex flex-row space-x-3 sm:flex-row sm:space-x-6 sm:space-y-0 font-semibold text-sm justify-center lg:justify-start">
                <div class="flex items-center sm:gap-2">
                    <span class=" text-lg">✔</span> 100+ Happy Customers
                </div>
                <div class="flex items-center sm:gap-2">
                    <span class=" text-lg">✔</span> 6-Month Warranty Included
                </div>
                <div class="flex items-center sm:gap-2 ">
                    <span class=" text-lg">✔</span> Prepped with care
                </div>
            </div>

            
        </div>

        <!-- Right Grid: How it Works -->
        <div class="relative flex justify-center w-full items-center overflow-visible">
            <!-- Giant S -->
            <h1 
                class="text-[20rem] sm:text-[15rem] md:text-[25rem] lg:text-[30rem] text-[#FFFFFF] select-none pointer-events-none"
                style="font-family: 'Sarina', cursive; line-height:1;"
            >
                S
            </h1>

        </div>

    </div>
</section>