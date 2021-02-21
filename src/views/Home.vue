<template>
  <div class="home page">
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
  name: 'Home',
  components: {
    List,
  },
  data() {
    return {
      maxResult: 50,
      total: 100,
      params: {
        part: 'contentDetails,liveStreamingDetails,localizations,player,recordingDetails,snippet,statistics,status,topicDetails',
        chart: 'mostPopular',
        maxResults: 50,
        key: process.env.VUE_APP_APIKEY,
      },
      listData: [],
      pagination: {
        totalResults: 100,
        perPage: 12,
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    checkIsLike(data) {
      const likeVideo = JSON.parse(window.localStorage.getItem('likeVideo'));
      if (likeVideo) {
        const result = data.map((item) => {
          if (likeVideo.some((ele) => ele.id === item.id)) {
            return { ...item, like: true };
          }
          return { ...item, like: false };
        });
        return result;
      }
      return data;
    },
    getData() {
      this.$store.dispatch('setloading', true);
      if (this.total >= this.maxResult) {
        this.params.maxResults = this.maxResult;
      } else {
        this.params.maxResults = this.total;
      }
      this.$http.get('/', { params: this.params }).then((res) => {
        const result = this.checkIsLike(res.data.items);
        this.listData.push(...result);
        this.total -= res.data.pageInfo.resultsPerPage;
        if (this.total !== 0) {
          this.params.pageToken = res.data.nextPageToken;
          this.getData();
        } else {
          this.setLocal();
          this.setPagination();
          this.$store.dispatch('setloading', false);
        }
      });
    },
    setLocal() {
      window.localStorage.setItem('Allvideo', JSON.stringify(this.listData));
    },
    setPagination() {
      this.pagination.totalResults = this.listData.length;
    },
    watchVideo(item) {
      this.$router.push({ name: 'watch', query: { id: item.id } });
    },
  },
};
</script>
