<template>
    <div class="list-wrapper">
      <div
        v-for="(item, index) in filterData[page - 1]"
        :key="item.id"
        class="list-item"
        :title="item.snippet.title"
        @click="itemClick(item)"
      >
        <div class="img-wrapper">
          <img :src="item.snippet.thumbnails.high.url" :alt="item.snippet.title" width="100%">
          <div class="item-info">{{ item.contentDetails.duration | formatTime }}</div>
        </div>
        <div class="title-wrapper">
          <i
            class="fa-heart item-like"
            :class="item.like ? 'fas' : 'far'"
            @click.stop="addLike(item, index)"
          ></i>
          <div class="item-title">{{ item.snippet.title }}</div>
        </div>
      </div>
      <paginate
        v-if="pagination.totalResults"
        v-model="page"
        :page-count="Math.ceil(pagination.totalResults / pagination.perPage)"
        :page-range="3"
        :margin-pages="1"
        :initial-page="1"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :prev-class="'page-prev'"
        :next-class="'page-next'">
      </paginate>
    </div>
</template>

<script>
import Paginate from 'vuejs-paginate';

export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Paginate,
  },
  data() {
    return {
      page: 1,
      listData: [],
    };
  },
  computed: {
    filterData() {
      const temp = [];
      for (let i = 0; i < this.listData.length; i += this.pagination.perPage) {
        temp.push(this.listData.slice(i, i + this.pagination.perPage));
      }
      return temp;
    },
  },
  methods: {
    itemClick(item) {
      this.$emit('itemClick', item);
    },
    addLike(video, index) {
      this.listData[index].like = !this.listData[index].like;
      const likeVideo = JSON.parse(window.localStorage.getItem('likeVideo'));
      const result = { ...video, like: true };
      if (likeVideo) {
        const likeIndex = likeVideo.findIndex((item) => item.id === result.id);
        if (likeIndex > -1) {
          likeVideo.splice(likeIndex, 1);
        } else {
          likeVideo.push(result);
        }
        window.localStorage.setItem('likeVideo', JSON.stringify(likeVideo));
      } else {
        const temp = [];
        temp.push(result);
        window.localStorage.setItem('likeVideo', JSON.stringify(temp));
      }
    },
  },
  created() {
    this.listData = this.data;
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  padding-bottom: 20px;
  position: relative;

  .list-item {
    width: $list-width;
    color: #6c747e;
    font-size: 14px;
    margin:0 $list-item-Xmargin $list-item-Bmargin;
    cursor: pointer;

    .img-wrapper {
      position: relative;
      display: flex;

      .item-info {
        position: absolute;
        right: 5px;
        bottom: 5px;
        background-color: $white;
        color: black;
        padding: 3px;
        border-radius: 4px;
      }
    }

    .title-wrapper {
      position: relative;

      .item-title {
        margin: 10px 0;
        font-weight: 900;
        padding: 0 40px;
        line-height: 20px;
        max-height: $list-title-height;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        white-space: normal;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }

      .item-like {
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 1;
        transform: translateY(-50%);
        font-size: 20px;
        cursor: pointer;
        transition: transform 0.1s linear;

        &:hover {
          transform: scale(1.1) translateY(-50%);
        }
      }
    }
  }
}
</style>

// -------- for pagination --------------
<style lang="scss">
.list-wrapper {
  .pagination {
    width: 100%;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
  }

  .page-item {
    padding: 5px;
    border: 1px solid $white;
    color: $white;
    border-radius: 4px;
    margin-right: 10px;

    &.active {
      background-color: $dark;
      color: black;
    }

    &.disabled {
      border: none;
      margin-left: -10px;
      margin-right: 0px;
    }
  }

  .page-prev {
    padding: 5px;
    margin-right: 10px;
    border: 1px solid $white;
    color: $white;
    border-radius: 4px;

    &.disabled {
      background-color: gray;
      color: white;
      border: none;
    }
  }

  .page-next {
    padding: 5px;
    border: 1px solid $white;
    color: $white;
    border-radius: 4px;
  }
}
</style>
