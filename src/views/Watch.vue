<template>
  <div class="watch page">
    <video-player :options="videoOptions"/>
    <div class="title" v-if="video">{{ title }}</div>
    <hr>
    <div class="description" v-if="video">{{ description }}</div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/videoPlayer.vue';

export default {
  name: 'Watch',
  components: {
    VideoPlayer,
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        muted: false,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        controls: true,
        aspectRatio: '16:9',
        // fluid: true,
        sources: [
          {
            src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
          },
        ],
      },
      video: null,
    };
  },
  computed: {
    title() {
      return this.video.snippet.title;
    },
    description() {
      return this.video.snippet.description;
    },
  },
  methods: {
    getData() {
      const allVideo = JSON.parse(window.localStorage.getItem('Allvideo'));
      this.video = { ...allVideo.filter((item) => item.id === this.$route.query.id)[0] };
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
  .title {
    margin-top: 40px;
    margin-bottom: 25px;
    font-size: 30px;
    font-weight: 900;
    text-align: left;
    color: $white;
    padding: 0 20px;
  }

  .description {
    color: $white;
    margin: 35px 0;
    line-height: 30px;
    text-align: left;
    word-spacing: 5px;
    padding: 0 20px;
  }
</style>
