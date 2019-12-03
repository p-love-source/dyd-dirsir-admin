<template>
    <!-- 面包屑组件 -->
    <div class="break-crumb">
        <!-- 默认的图标分隔符 "/" -->
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{path: val.path}" v-for="(val, idx) in breadcrumb_list" :key="idx">{{val.name}}</el-breadcrumb-item>
          </el-breadcrumb> -->

          <!-- 自定义图标分隔符 ">" -->
          <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: val.path}" v-for="(val, idx) in breadcrumb_list" :key="idx">{{val.name}}</el-breadcrumb-item>
          </el-breadcrumb> -->
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
    name: "break-crumb",
    data() {
        return {
            breakCrumbList: []
        };
    },
    components: {},
    created() {
        this.getBreakCrumb();
    },
    mounted() {},
    computed: {
      
    },
    methods: {
        // 获取面包屑list
        getBreakCrumb () {

        }
    }
};
</script>
<style lang='less' scoped>
</style>