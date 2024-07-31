<template>
    <HeroComponent />
    <ReadyComponent />
    <FormComponent />
    <FooterComponent />
  </template>
  
  <script>
  import HeaderComponent from '@/components/header/HeaderComponent'
  import HeroComponent from '@/components/sections/HeroComponent'
  import ReadyComponent from '@/components/sections/ReadyComponent'
  import FooterComponent from '@/components/footer/FooterComponent'
  import FormComponent from '@/components/sections/FormComponent'


  export default {
    name: 'HomeComponent',
    components: {
      HeaderComponent,
      HeroComponent,
      ReadyComponent,
      FooterComponent,
      FormComponent
    }
  }
  </script>
  
  <style>
  </style>
  