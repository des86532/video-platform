<template>
  <div class="collect page">
    <List
      :data="listData"
      :pagination="pagination"
      @itemClick="watchVideo"
    ></List>
  </div>
</template>

<script>
import List from '@/components/list.vue';

export default {
  components: {
    List,
  },
  data() {
    return {
      listData: [],
      pagination: {
        totalResults: 0,
        perPage: 12,
      },
    };
  },
  methods: {
    getData() {
      this.$store.dispatch('setloading', true);
      this.listData = JSON.parse(window.localStorage.getItem('likeVideo')) ? JSON.parse(window.localStorage.getItem('likeVideo')) : [];
      this.pagination.totalResults = this.listData.length;
      this.$store.dispatch('setloading', false);
    },
    watchVideo(item) {
      this.$router.push({ name: 'watch', query: { id: item.id } });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
  .collect {
    width: 100%;
    height: calc(100vh - #{$header-height});
  }
</style>
