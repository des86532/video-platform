<template>
  <div class="header">
    <div class="header-title">video-platform</div>
    <div class="header-content">
      <router-link
        to="/"
        class="header-item"
        :class="{ 'active' : $route.name === 'Home' }
      ">Home</router-link>
      <router-link
        to="/collect"
        class="header-item"
        :class="{ 'active' : $route.name === 'Collect' }
      ">Collect</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  color: $white;
  font-family: 'Raleway', sans-serif;

  &-title {
    font-size: 20px;
    padding: 0 10px;
  }

  &-content {
    flex: 1;
    text-align: left;
    padding: 0 20px;
  }

  &-item {
    padding: 0 20px;
    color: $white;

    &:hover {
      color: $red;
    }

    &.active {
      color: $red;
    }
  }
}

@media screen and (min-width: 1200px) {
  .header {
    padding: 20px calc((100% - #{$list-width + $list-item-Xmargin * 2} * 4) / 2);
  }
}

@media screen and (min-width: 1024px) and (max-width: 1199px) {
  .header {
    padding: 20px calc((100% - #{$list-width + $list-item-Xmargin * 2} * 3) / 2);
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .header {
    padding: 20px calc((100% - #{$list-width + $list-item-Xmargin * 2} * 2) / 2);
  }
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .header {
    padding: 20px calc((100% - #{$list-width + $list-item-Xmargin * 2} * 1) / 2);
  }
}
</style>
