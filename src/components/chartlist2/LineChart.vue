<template>
  <div id="chartcontainer">这是图标集合页面</div>
</template>

<script lang="ts" setup>
import {
  reactive, ref, defineComponent, inject, onMounted, defineProps, toRaw,
} from 'vue';

const echarts = inject('$echarts');
type props = {
  info: {
    name: string,
    age: number,
    sex: string,
    avatar: string,
    job: string,
    phone: string,
    salenumber: string[],
    saleprice: string[],
  }
}
// const info = inject('info');
const Props = defineProps<props>();
console.log(toRaw(Props.info.salenumber));
onMounted(() => {
  const myChart = (echarts as any).init(document.getElementById('chartcontainer'));
  myChart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
    },
    legend: {},
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '销售量',
        min: 0,
        max: 250,
        position: 'right',
        axisLabel: {
          formatter: '{value} 件',
        },
      },
      {
        type: 'value',
        name: '销售额',
        min: 0,
        max: 25,
        position: 'left',
        axisLabel: {
          formatter: '{value} 万元',
        },
      },
    ],
    series: [
      {
        name: '销售数量',
        type: 'bar',
        yAxisIndex: 0,
        data: toRaw(Props.info.salenumber),
      },
      {
        name: '销售额',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        data: toRaw(Props.info.saleprice),
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
