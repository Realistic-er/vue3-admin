<template>
  <div id="chartcontainer">这是图标集合页面</div>
</template>

<script lang="ts" setup>
import {
  reactive, ref, defineComponent, inject, onMounted,
} from 'vue';

const echarts = inject('$echarts');
type chart = typeof echarts;
onMounted(() => {
  const myChart = (echarts as any).init(document.getElementById('chartcontainer'));
  myChart.setOption({
    title: {
      text: '衣服销量统计',
    },
    tooltip: {},
    xAxis: {
      data: ['海澜之家', '鸿星尔克', '安踏', '李宁', '花花公子', 'Malbon'],
    },
    yAxis: {},
    series: [
      {
        name: '衣服销量',
        type: 'bar',
        data: [200, 100, 180, 282, 300, 310],
      },
    ],
  });
});

</script>

<style lang="scss" scoped>
#chartcontainer {
  width:800px;
  height: 600px;
}
</style>
