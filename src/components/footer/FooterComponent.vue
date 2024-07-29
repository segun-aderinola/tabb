<template>
    <section class="bg-black text-white p-6 md:p-20">
        <div class="flex flex-col md:flex-row items-center justify-between md:justify-around border-b border-gray-900 pb-5">
            <div class="mb-5 md:mb-0">
                <img src="images/Logo.png" alt="Logo" class="h-10 md:h-15">
            </div>
            <div>
                <ul class="flex flex-wrap items-center justify-center space-x-3">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Work</li>
                    <li>Process</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Contact</li>
                    <li class="mt-3 md:mt-0">
                        <ul class="flex items-center justify-end space-x-2 border p-3 rounded-xl border-gray-800">
                            <li>Stay Connected</li>
                            <li class="flex items-center justify-center space-x-2">
                                <img src="images/Button.png" alt="Logo" class="w-8 h-8 md:w-10 md:h-auto" />
                                <img src="images/Button-1.png" alt="Logo" class="w-8 h-8 md:w-10 md:h-auto" />                                
                                <img src="images/Button-2.png" alt="Logo" class="w-8 h-8 md:w-10 md:h-auto" />
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pt-10 md:pt-20 flex flex-col md:flex-row items-center justify-between">
            <ul class="flex flex-wrap items-center justify-around space-x-5 md:space-x-20 mb-5 md:mb-0">
                <li class="flex items-center space-x-2 border-b-2 border-gray-800 pb-4">
                    <img src="images/icons/message.png" alt="Logo" class="w-5 h-auto md:w-5">
                    <span>tabb.devshop@gmail.com</span>
                </li>
                <li class="flex items-center space-x-2 border-b-2 border-gray-800 pb-4">
                    <img src="images/icons/call.png" alt="Logo" class="w-5 h-auto md:w-5">
                    <span>+234 9123 568 144</span>
                </li>
                <li class="flex items-center space-x-2 border-b-2 border-gray-800 pb-4">
                    <img src="images/icons/locator.png" alt="Logo" class="w-5 h-auto md:w-5">
                    <span>Worldwide</span>
                </li>
            </ul>
            <p class="text-sm text-gray-700">© 2024. All rights reserved.</p>
        </div>
    </section>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
</style>
