<template>
  <footer id="footer">
    <footer class="text-gray-500 bg-white px-10 py-5 w-full mx-auto shadow-[#b40202] shadow-2xl border-t">
      <div class=" sm:mx-auto sm:text-center mt-3">

        <div class="sm:justify-center text-black flex flex-col sm:flex-row sm:items-center mt-4 justify-start gap-5 overflow-hidden w-full">
          <img src="/favicon.ico" class="w-12 h-12 rounded" />
          <div class="font-mono text-3xl">Unnamed Project</div>
        </div>
        <div class="font-mono flex items-center sm:justify-center mt-1">
          <p class="">少女祈祷中</p> <p class="mx-2">~</p> <span class="rotate text-base">☯</span>

        </div>
        <p class="leading-relaxed my-4 text-[15px]">
          Unnamed-proj. Developer Organization has been the industry's standard dummy text ever since the 3000s, when an Marisa, who is unknown  <span class="line-through">stole</span>took a
          library. So is there any use for this paragraph? It turned out to be used for refilling!
        </p>
      </div>
      <ul class="items-center justify-center mt-6 space-y-5 text-base sm:grid sm:space-x-4 sm:space-y-0 sm:mx-20 grid-cols-5 gap-4">
        <li v-for="(item,index) in footerNavsRouter" :key="index" class="hover:text-gray-800">
          <RouterLink :to="item.href">
            {{item.name}}
          </RouterLink>
        </li>
        <li v-for="(item,index) in footerNavs" :key="index" class="hover:text-gray-800">
          <a :href="item.href">
            {{item.name}}
          </a>
        </li>
      </ul>
      <div class="mt-8 items-center justify-between sm:flex">
        <div class="mt-4 sm:mt-0">
          &copy; 2024 <a href="https://mioseiya.com/" class="mx-1 hover:text-pink-700 cursor-pointer transition-all duration-500">「MioSeiya」</a> All rights reserved.
        </div>
        <div class="mt-6 sm:mt-0 mb-2">
          <ul class="flex items-center space-x-4">
            <li class="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-blue-400 group transition-all duration-500">
              <a href="https://chyan.moe/@unnamed">
                <svg class="svg-icon w-6 h-6 text-blue-400 group-hover:text-white transition-all duration-500" viewBox="0 0 20 20">
                  <path fill="none"
                        d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266">
                  </path>
                </svg>
<!--                <chayn-s-v-g class="svg-icon w-[1.6rem] h-[1.6rem]  text-pink-500 group-hover:text-white transition-all duration-500" />-->
              </a>
            </li>

            <li class="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-[#f76653] group transition-all duration-500">
              <a href="javascript:void()">
                <svg class="svg-icon w-7 h-7 mt-0.5 ml-0.5 text-[#f76653] group-hover:text-white transition-all duration-500"  viewBox="0 0 1024 1024">
                  <path d="M896 426.666667a256 256 0 1 1-512 0 256 256 0 0 1 512 0z" opacity=".6" p-id="1581"></path>
                  <path d="M128 170.666667h170.666667v682.666666H128V170.666667z" p-id="1582"></path>
                </svg>
              </a>
            </li>

            <li class="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-[#5b68f2] group transition-all duration-500">
              <a href="javascript:void()">
                <svg class="w-6 h-6 text-[#5b68f2] group-hover:text-white transition-all duration-500" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                </svg>
              </a>
            </li>

            <li class="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-[#1f2328] group transition-all duration-500">
              <a href="https://github.com/unnamed-proj">
                <svg class="svg-icon w-6 h-6 text-[#1f2328] group-hover:text-white transition-all duration-500" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-6 border-t pt-4 flex flex-col sm:flex-row items-start sm:justify-between sm:items-center text-sm gap-2">
        <!--      <div class="flex flex-col items-start gap-2">-->
        <div class="flex items-center">MAINTAINER OF THIS WEBSITE <a href="https://mio.am/" class="ml-2 hover:text-[#2a2449] cursor-pointer transition-all duration-500 flex items-center"><img src="https://cn.gravatar.com/avatar/a4cd208dc18e91177ea4cb94bf4ff32e?s=200&d=blank&r=g" class="w-5 h-5 rounded-full mr-0.5" />Miourasaki</a></div>
        <div class="flex items-center">WEBSITE UI DESIGN BY <a href="https://kaslet.art/" class="ml-2 hover:text-[#f0c1b1] cursor-pointer transition-all duration-500">Kaslet.art</a></div>
        <!--      </div>-->
      </div>
    </footer>
    <div class="w-full py-2 px-10 text-stone-400 shadow-inner shadow-stone-200 bg-amber-50 flex justify-between items-center text-sm">
      <div>没有语言选项，要不试试Edge?</div>
      <div>备案号？没有！但是有这个：<a href="https://icp.gov.moe/?keyword=20241100" target="_blank" class="hover:text-[#ff1686] transition-all duration-500">萌ICP备20241100号</a></div>
      <div>CC-BY-NC 4.0 (是这样用的吗？</div>
    </div>
  </footer>

</template>
<script lang="ts">
import ChaynSVG from "../ChaynSVG.vue";

export default {
  components: {ChaynSVG},
  data: function () {
    return {
      footerNavsRouter: [
        {
          href: '/about',
          name: 'About'
        },
        {
          href: '/support',
          name: 'Support'
        }
      ],
      footerNavs: [
        {
          href: 'javascript:void()',
          name: 'Blog'
        },
        {
          href: 'https://github.com/orgs/unnamed-proj/people',
          name: 'Team'
        },
        {
          href: 'https://alpha.unnamed.org.cn/',
          name: 'Forum'
        },
      ]
    }
  },
}
</script>

<style scoped>
.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: currentColor;
}
</style>