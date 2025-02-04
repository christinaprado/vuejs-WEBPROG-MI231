<template>
  <country/>

  <div class="content-section"> 
    <food-item /> 
    <food-item2 /> 
    <food-item3 /> 
  </div> 

  <personal-profile/> 
</template>

<style scoped> 
 .container { 
   display: flex; 
   flex-direction: column; 
   align-items: center; 
 } 

 .content-section { 
   display: flex; 
   justify-content: space-between; 
   width: 80%;  
   margin-bottom: 20px;  
 } 

 .container * { 
   color: white; 
 } 
</style>