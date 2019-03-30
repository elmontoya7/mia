<template lang="pug">
  <div id="app">
  .nav-bar
    b-nav
      b-nav-item(active='') Usuarios
      b-nav-item Nuevo expediente
  .body
    router-view
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700');

* {
  box-sizing: border-box;
}

html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;

  display: flex;
  flex-flow: column;
}
</style>

<style scoped>
  .nav-bar {
    flex: 0 0 80px;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .body {
    flex: 1 0 auto;
    overflow-y: auto;
    min-height: 0;
  }
</style>
