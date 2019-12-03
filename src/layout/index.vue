<template>
  <div class='app-wrapper flex'>
      <!-- 侧边菜单栏 -->
      <div class="side-continer">
        <side-bar />
      </div>
      <!-- 右边内容区 -->
      <div class="main-continer">
          <!-- 顶部 -->
          <header-bar />
          <!-- 面包屑 -->
          <break-crumb class="breakcrumb-continer" />
          <!-- list视窗 -->
          <app-main />
          <!-- 右边悬浮设置 -->
          <right-panel>
            <settings />
          </right-panel>
      </div>
  </div>
</template>

<script>
import { SideBar, HeaderBar, AppMain, Settings} from "./components";
import BreakCrumb from "@/components/BreakCrumb";
import RightPanel from "@/components/RightPanel";

import { mapState } from "vuex";

export default {
  name: 'Layout',
  data(){
    return {}
  },
  components: {
      SideBar,
      HeaderBar,
      AppMain,
      Settings,
      BreakCrumb,
      RightPanel
  },
  created(){
  
  },
  mounted(){
  
  },
  computed: {
      ...mapState({
          showSettings: state => state.settings.showSettings
      })
  },
  methods: {
  
  }
}
</script>
<style lang='less' scoped>
  
</style>