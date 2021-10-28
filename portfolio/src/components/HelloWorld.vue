<template>
 <div class="sections-menu">
      <span
         class="menu-point"
         v-bind:class="{active: activeSection == index}"
         v-on:click="scrollToSection(index)"
         v-for="(offset, index) in offsets"
         v-bind:key="index">
      </span>
    </div>
    <section class="fullpage blue">
      <h1>Vue.js Fullpage Scroll</h1>
      <p>by <a href="https://webdeasy.de/?referer=cp-NVOEBL" target="_blank">WebDEasy</a></p>
    </section>
    <section class="fullpage black">
      <h1>Section 2</h1>
      <p>made with <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>
    </section>
    <section class="fullpage red">
      <h1>Section 3</h1>
      <p>works on <b>desktop & mobile</b></p>
    </section>
    <section class="fullpage green">
      <h1>Section 4</h1>
      <p>Tutorial <a href="https://webdeasy.de/en/programming-vue-js-fullpage-scroll/?referer=cp-NVOEBL" target="_blank">here</a></p>
    </section>
</template>

<script>

</script>
<style>

body {
  margin: 0;
  color: #FFF;
  font-family: Helvetica, arial, sans-serif;
  overflow: hidden;
}

h2 {
  position: fixed;
}

.fullpage {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 6em;
  margin: 0;
  text-align: center;
  padding: 0 1rem;
}

p {
  font-size: 1em;
}

.fullpage a {
  text-decoration: none;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  color: #FFF;
  margin-left: 5px;
}

.red {
  background-color: #ab4545;
}

section.black {
  background-color: #000;
}

.blue {
  background-color: #237ad4;
}

.green {
  background-color: #68c368;
}

h1.black {
  color: #000;
}

.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.5em;
  }
}

</style>