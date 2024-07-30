<template>
    <section class="bg-black text-white p-6 md:p-10 lg:p-20">
        <div class="w-full md:w-3/4 mx-auto">
            <div
                class="flex flex-col md:flex-row items-center justify-around w-full space-y-6 md:space-y-0 md:space-x-10">
                <div class="p-6 md:p-10 bg-bgGray rounded-xl w-full text-left">
                    <h2 class="text-md font-bold">Full Name</h2>
                    <input type="text" class="border-b border-gray-700 pt-5 bg-bgGray w-full" placeholder="Type here" />
                </div>
                <div class="p-6 md:p-10 bg-bgGray rounded-xl w-full text-left">
                    <h2 class="text-md font-bold">Email</h2>
                    <input type="text" class="border-b border-gray-700 pt-5 bg-bgGray w-full" placeholder="Type here" />
                </div>
            </div>
            <div class="mt-6 md:mt-10 p-6 md:p-10 bg-bgGray rounded-xl w-full">
                <h2 class="text-md font-bold text-left">Why are you contacting us?</h2>
                <div class="flex pt-6 md:pt-10 -mx-2">
                    <div class="flex space-x-2 w-full px-2">
                        <input type="checkbox" class="custom-checkbox bg-bgGray" />
                        <span class="text-left">Core Banking Solutions</span>
                    </div>
                    <div class="flex space-x-2 w-full px-2">
                        <input type="checkbox" class="custom-checkbox bg-bgGray" />
                        <span class="text-left">Collaboration</span>
                    </div>
                </div>
                <div class="flex pt-6 md:pt-10 -mx-2 justify-between">
                    <div class="flex space-x-2 w-full px-2">
                        <input type="checkbox" class="custom-checkbox bg-bgGray" />
                        <span class="text-left">Tech Development</span>
                    </div>
                    <div class="flex space-x-2 w-full px-2">
                        <input type="checkbox" class="custom-checkbox bg-bgGray" />
                        <span class="text-left">Others</span>
                    </div>
                </div>
            </div>
            <div class="mt-6 md:mt-10 p-6 md:p-10 bg-bgGray rounded-xl w-full text-left">
                <h2 class="text-md font-bold">Your Budget</h2>
                <div class="pt-5">
                    <button class="bg-[#333333] text-white px-4 md:px-12 py-1 rounded-lg hover:bg-black">US
                        Dollar</button>
                </div>
                <p class="text-left mt-4 font-sans text-sm">Select payment currency and slide to indicate your budget
                    range</p>
                <div class="p-6 md:p-10 bg-bgGray rounded-xl text-center">
                    <div class="relative w-full">
                        <input type="range" min="1000" max="10000" step="100" v-model="budget" @input="updateBackground"
                            class="range-slider w-full" :style="{ background: sliderBackground }" />
                        <div class="flex justify-between absolute top-6 w-full px-2 mt-5">
                            <span>${{ budget }}</span>
                            <span>${{ budgetMax }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 md:mt-10 p-6 md:p-10 bg-bgGray rounded-xl w-full">
                <div class="mb-6">
                    <h2 class="text-md font-bold text-left">Your Message</h2>
                    <textarea id="message" class="w-full p-3 bg-bgGray text-white border-b border-gray-700"
                        rows="4"></textarea>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="px-6 py-3 bg-orange-500 rounded hover:bg-orange-600">Submit</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            budget: 1000,
            budgetMax: 10000,
            sliderBackground: '',
        };
    },
    methods: {
        updateBackground() {
            const percentage = ((this.budget - 1000) / (10000 - 1000)) * 100;
            this.sliderBackground = `linear-gradient(to right, #ff8c00 ${percentage}%, #333 ${percentage}%)`;
        },
    },
    mounted() {
        this.updateBackground();
    },
};
</script>

<style scoped>
/* Custom styles for the range input */
.range-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    background: #333;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.range-slider:hover {
    opacity: 1;
}

.range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: #ff8c00;
    border: 5px solid #333;
    border-radius: 50%;
    border-width: 8px;
    cursor: pointer;
}

.range-slider::-moz-range-thumb {
    width: 30px;
    height: 30px;
    background: #ff8c00;
    border: 5px solid #333;
    border-radius: 50%;
    border-width: 8px;
    cursor: pointer;
}

.range-slider::-ms-thumb {
    width: 30px;
    height: 30px;
    background: #ff8c00;
    border: 5px solid #333;
    border-radius: 50%;
    border-width: 8px;
    cursor: pointer;
}

/* Custom styles for the checkbox */
.custom-checkbox {
    -webkit-appearance: none;
    appearance: none;
    background-color: #212121;
    border: 2px solid #333333;
    width: 25px;
    height: 25px;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;
}

.custom-checkbox:checked {
    background-color: #ff8c00;
    border: 2px solid #ff8c00;
}

.custom-checkbox:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 16px;
    border: solid #212121;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
}

.custom-checkbox:hover {
    border-color: #ff8c00;
}
</style>