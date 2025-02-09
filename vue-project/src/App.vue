<template>
  <div>
    <country />

    <br>

    <food-item/> 
    <food-item2/> 
    <personal-profile/> 
  </div>
</template>

<script setup>
import Country from './components/Country.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'
</script>

<style>
body {
  background: linear-gradient(135deg, #b33951, #d6758c, #e9a6b4, #f2d4d9, #ffffff);
}
</style>
