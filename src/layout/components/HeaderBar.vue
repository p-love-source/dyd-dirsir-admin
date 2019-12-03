<template>
  <div class='headerBar'>
    <el-header class="page-header clearfix" height="0.56rem">
          <div class="header-left">
            <p>设置左边栏的显示和隐藏</p>
          </div>
          <ul class="header-right clearfix">
            <li><p>安全退出</p></li>
            <li><p>注销</p></li>
          </ul>
        </el-header>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data(){
    return {}
  },
  components: {
  
  },
  created(){
  
  },
  mounted(){
  
  },
  computed: {
  
  },
  methods: {
  
  }
}
</script>
<style lang='less' scoped>
@headHeight: 0.56rem;
  .page-header {
  background: @bgC3;
  font-size: @size14;
  color: @fontCf;
  line-height: @headHeight;
  text-align: center;
  padding: 0 !important;
}
.page-header div {
  float: left;
}
.page-header ul {
  float: right;
}
.page-header ul li {
  float: left;
}
.page-header ul li p {
  padding: 0 20px;
}
</style>