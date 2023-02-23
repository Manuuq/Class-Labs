<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>


<template>
    <div class="header"> 
      <img class="logoIron" src="./Images/Ironhack_logo.svg" alt="logo-Ironhack">
      <img class="logoBurger" src="./Images/Burger_menu.svg" alt="burger-Menu">
    </div>

  <div class="logoVue-box">
    <img class="logoVue" src="./Images/Vue_logo.svg" alt="logo-Vue">
  </div>

  <div class="textMain-box">
    <img class="text-Welcome" src="./Images/Welcome to Vue.js.png" alt="text-Welcome">
    <img class="text-Become" src="./Images/Become a coding ninja with the fastest-growing JavaScript framework.png" alt="text-Become">
  </div>

  <div class="buttonBox">
    <img src="./Images/Button text.png" alt="button">
  </div>

<div class="botttom-box" >
  <div class="bottom-container">   
    <img src="./Images/USP-1.png" alt="USP1">
    <img src="./Images/Performant.png" alt="Performant">
    <img src="./Images/Truly.png" alt="textbottom1">
  </div>

  <div class="bottom-container">
    <img src="./Images/USP-2.png" alt="USP">
    <img src="./Images/Approachable.png" alt="Approachable">
    <img src="./Images/Builds.png" alt="textbottom2">
  </div>

  <div class="bottom-container">
    <img src="./Images/USP-3.png" alt="USP3">
    <img src="./Images/Versatile.png" alt="Versatile">
    <img src="./Images/A rich.png" alt="textbottom3">
  </div>
</div>
</template>

<script setup>

</script>


<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5vw;

}

.logoIron {
  float: left;

}

.logoBurger {
    float: right
}

.logoVue-box {
  display: flex;
  align-items: center;
  justify-content: center;

  
}

.textMain-box{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 158px;
justify-content: space-evenly;
}

.buttonBox {
display: flex;
align-items: center;
justify-content: center;
background-image: url(./Images/Buttton-shape.png);
background-size:contain;
background-position: center center;
height: 31px;
background-repeat: no-repeat;
margin-bottom: 10vw;
}

.botttom-box {
  background-image: url(./Images/Background.png);
  display: flex;
  justify-content: space-evenly;
  height: 312px;

  
}

.bottom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

}









</style>













<style scoped></style>