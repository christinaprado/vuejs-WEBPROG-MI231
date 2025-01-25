<template>
  <div class="container"> 
    <food-item />
    <food-item2 />
    <food-item3 />
    <personal-profile />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.container * { 
  color: white; 
}
</style>