<script>
    import whatsapp from "$lib/assets/whatsapp.svg";
    import instagram from "$lib/assets/instagram.svg";
</script>

<section id="contactus" class="w-full py-20">
    <div class="max-w-4xl mx-auto text-center px-6">

        <!-- Heading -->
        <h1 class="font-bold text-5xl mb-6 relative">
            Contact Us
            <span class="absolute left-1/2 -bottom-2 w-24 h-1 bg-[#EA5252] -translate-x-1/2"></span>
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-600 mt-10 text-lg">
            Whether you’re booking a viewing or have questions - we’re here to help.
        </p>

        <!-- Contact Options -->
        <div class="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10">

            <!-- WhatsApp -->
            <a 
                href="https://wa.me/447986873429" 
                target="_blank" 
                class="flex flex-col items-center hover:opacity-80 transition"
            >
                <div class="p-4 bg-white shadow rounded-full">
                    <img src={whatsapp} alt="WhatsApp" class="w-10 h-10" />
                </div>
                <p class="font-semibold mt-3 text-lg text-[#333]">+44 7986 873429</p>
            </a>

            <!-- Instagram -->
            <a 
                href="https://instagram.com/rydalwheels" 
                target="_blank" 
                class="flex flex-col items-center hover:opacity-80 transition"
            >
                <div class="p-4 bg-white shadow rounded-full">
                    <img src={instagram} alt="Instagram" class="w-10 h-10" />
                </div>
                <p class="font-semibold mt-3 text-lg text-[#333]">@rydalwheels</p>
            </a>

        </div>

        <!-- Appointment Notice -->
        <p class="mt-12 text-gray-700 text-sm tracking-wide">
            <span class="font-semibold text-[#EA5252]">Viewings are by appointment only.</span><br />
            Please contact us before travelling.
        </p>

    </div>
</section>