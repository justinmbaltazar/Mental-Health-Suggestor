<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div
            class="nav-item"
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
.tabs {
  padding-top: 7rem;
  border-bottom: 2px solid $purple;
}

.tabs-details {
  padding: 10px;
}

ul {
  display: flex;
  padding: 0;
  list-style: none;

  li {
    margin-left: 70px;
    margin-right: 50px;
  }

  .nav-item {
    cursor: pointer;
    color: $black;
    padding-top: 5px;
    &:hover {
      color: $purple;
    }

    &.is-active {
      //Need to make bottom touch line
      color: $white;
      background-color: $purple;
      border-top-left-radius: 10px;
      //   padding-left: 15px;
      //   padding-right: 15px;
    }
  }
}
</style>
