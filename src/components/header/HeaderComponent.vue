<template>
  <header class="bg-black text-white p-4 font-sans border-b border-gray-800 relative" style="z-index: 20 !important">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center flex-none">
        <img src="images/Logo.png" alt="Logo" class="h-15">
      </div>
      <!-- Navigation and Contact Us Button -->
      <div class="flex flex-grow justify-center">
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-white px-3 py-2 rounded-md text-sm font-medium bg-bgGray">Home</router-link>
          <router-link to="/services" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Services</router-link>
          <router-link to="/banking-solution" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Banking Solutions</router-link>
          <router-link to="/about" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</router-link>
          <router-link to="/blog" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</router-link>
        </nav>
      </div>
      <div class="flex items-center flex-none md:block hidden">
        <router-link to="/contact" class="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 ml-auto">
          Contact Us
        </router-link>
      </div>
      <!-- Hamburger Icon -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none ml-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="md:hidden mt-4">
      <nav class="flex flex-col space-y-4">
        <router-link to="/" class="text-white px-3 py-2 rounded-md text-sm font-medium bg-bgGray">Home</router-link>
        <router-link to="/services" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Services</router-link>
        <router-link to="/banking-solution" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Banking Solutions</router-link>
        <router-link to="/about" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</router-link>
        <router-link to="/blog" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</router-link>
        <router-link to="/contact" class="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600">
          Contact Us
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigateTo(route) {
      this.$emit('navigate', route);
    },
  },
};
</script>

<style scoped>
/* Additional styles if necessary */
</style>
