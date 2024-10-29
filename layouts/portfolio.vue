<template>
  <div>
    <header>
      <!-- <font-awesome-icon icon="fa-solid fa-bars" style="height: 35px" /> -->
      <ul class="header-list">
        <Nuxt-link to="#about" @click.native="removeHash"
          ><li class="header-list-item">About</li></Nuxt-link
        >
        <Nuxt-link to="#skill" @click.native="removeHash"
          ><li class="header-list-item">Skill</li></Nuxt-link
        >
        <Nuxt-link to="#work" @click.native="removeHash">
          <li class="header-list-item">Work</li>
        </Nuxt-link>
        <Nuxt-link to="#contact" @click.native="removeHash">
          <li class="header-list-item">Contact</li></Nuxt-link
        >
      </ul>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <!-- footer content -->
    </footer>
  </div>
</template>

<script setup lang="ts">
function removeHash() {
  setTimeout(() => {
    history.replaceState(null, "", " ");
  }, 10);
}
</script>

<style>
* {
  font-family: "Yu Mincho", "YuMincho", "游明朝体", "游明朝", "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
  color: rgb(166, 166, 166);
}

header {
  height: 60px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(185, 185, 185);
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  font-family: "Yu Mincho", "YuMincho", "游明朝体", "游明朝", "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
  color: rgb(166, 166, 166);
  font-size: 18px;
}

.header-right {
  float: right;
}

.header-left {
  float: left;
}

.header-list {
  display: flex;
  justify-content: space-between;
  width: 300px;
  list-style: none;
  padding: 0;
  margin-right: 3rem;
  margin-left: auto;
  margin-top: 1.5rem;
}

a {
  text-decoration: none;
  color: rgb(166, 166, 166);
}

main {
  margin: 0 auto;
  position: relative;
  width: 90%;
}

body {
  background: linear-gradient(rgb(0, 10, 30), rgb(0, 60, 70));
  min-height: 150vh;
  background-attachment: fixed;
}

@media screen and (max-width: 960px) {
  main {
    width: 100%;
  }
}

@media screen and (max-width: 520px) {
  main {
    width: 100%;
  }

  header {
    display: none;
    /* justify-content: center;
    height: 50px;
    margin: 0 auto; */
  }

  .header-list {
    width: 100%;
    margin: 0 10px 10px 10px;
    justify-content: space-around;
  }
}
</style>
