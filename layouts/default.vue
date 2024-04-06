<template>
  <div>
    <header>
      <ul class="header-list"></ul>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <!-- footer content -->
    </footer>
  </div>
</template>

<style>
* {
  font-family: "Yu Mincho", "YuMincho", "游明朝体", "游明朝", "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
  color: rgb(166, 166, 166);
}

header {
  height: 60px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
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
  width: 30vw;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 3rem;
  margin-left: auto;
  margin-top: 1.5rem;
}

main {
  margin: 60px auto 10vh auto;
  position: relative;
  width: 90%;
}

body {
  background: linear-gradient(rgb(0, 20, 40), rgb(0, 70, 80));
  min-height: 150vh;
  background-attachment: fixed;
}
</style>
