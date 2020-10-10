<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model="defaultActive">
        <template v-for="(item,index) in newNavlist">
              <a-menu-item v-if="!item.submenu" :key="item.path+index" class="me-item" :index="item.path">
                <span >{{ item.cn }}</span>
              </a-menu-item>

              <a-sub-menu v-else :key="item.path+index" :index="item.path">
                <template v-slot:title>
                  <span >{{ item.cn }}</span>
                </template>
                <a-menu-item
                  v-for="(item2,index2) in item.submenu"
                  :key="item2.path+index2"
                  class="submenu-item"
                  :index="String(item2.id)"
                >
                  <span >{{ item2.cn }}</span>
                </a-menu-item>
              </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'
import router from '@/router'
import store from '@/store'
import { getToken, getInfo, removeToken, removeInfo } from '@/utils/cookie'
import storage from '@/utils/storage'

import * as request from '@/api/home'
import { globalConfigs } from '@/api/common'
import { Options, Vue } from 'vue-class-component'

const navlist = [
  {
    path: '/home',
    icon: 'el-icon-location',
    cn: '基础数据'
  },
  {
    path: '/diseases',
    icon: 'el-icon-menu',
    cn: '专病数据',
    submenu: []
  },
  {
    path: '/export',
    icon: 'el-icon-setting',
    cn: '数据导出'
  },
  {
    path: '/research',
    icon: 'el-icon-document',
    cn: '科研项目'
  },
  // {
  //   path: '/models',
  //   icon: 'el-icon-postcard',
  //   cn: '模型管理'
  // },
  // {
  //   path: '/statistics',
  //   icon: 'el-icon-s-data',
  //   cn: '数据统计'
  // },
  {
    path: '/profile',
    icon: 'el-icon-setting',
    cn: '个人中心'
  }
]
@Options({
  props: {
    msg: String
  },
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  }
})
export default class DefaultLayout extends Vue {
  selectedKeys = ['1']
  collapsed = false
  navlist = navlist
  truename = ''
  sysTitle = ''
  disease_list= []
  // 导航列表
  get newNavlist () {
    const list = this.navlist
    const plist = this.disease_list
    // console.log(plist)
    const token = 'getToken()'
    if (!token) {
      return list.filter(v => v.path === '/home')
    } else {
      return list.map(v => {
        if (v.path === '/diseases') {
          v.submenu = plist.map(v2 => {
            const obj = {
              path: '/diseases/result-query?disease_id=' + String(v2.disease_id),
              id: v2.disease_id,
              icon: 'el-icon-document',
              cn: v2.disease_name
            }
            return obj
          })
        }
        return v
      })
    }
  }

  // 选中高亮
  get defaultActive () {
    console.log(this.$route.meta)
    const path = this.$route.meta.activeMenu
    if (path === '/diseases') {
      return this.$route.query.disease_id
    } else {
      return path
    }
  }

  created () {
    const info = getInfo()
    const token = getToken()
    globalConfigs().then((res) => {
      const config = res.data
      storage.local.set('global_config', res.data)
      document.title = config.site_config.global_site_title
      this.sysTitle = config.site_config.global_site_name
    })
    // console.log(info)
    if (token) {
      this.truename = info.truename
      request.userResource({}, 'disease_list').then((res) => {
        this.disease_list = res.data.result.disease_list
      })
    }
  }
}
</script>
<style scoped lang="scss">
#components-layout-demo-custom-trigger{
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
