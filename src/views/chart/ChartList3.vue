<template>
  <div>
    <div id="ALT">谷丙转氨酶</div>
    <div id="AST">谷草转氨酶</div>
    <div id="TBIL">总胆红素</div>
    <div id="DBIL">直接胆红素</div>
    <div id="IBIL">间接胆红素</div>
    <div id="GGT">r-谷氨酰转肽酶</div>
    <div id="ADA">腺苷脱氨酶</div>
    <!-- <div id="GR">谷胱甘肽还原酶</div>
    <div id="TBA">总胆汁酸</div>
    <div id="TP">总蛋白</div>
    <div id="ALB">白蛋白</div>
    <div id="GLO">球蛋白</div> -->
  </div>

</template>

<script lang="ts" setup>
import {
  reactive, ref, defineComponent, inject, onMounted, defineProps, toRaw, nextTick, onUnmounted,
} from 'vue';
import {
  timeline, ALTList, ASTList, GGTList, ADAList, TBILList, DBILList, IBILList,
} from '../../utils/body/chart';

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
const echarts = inject('$echarts');
let ALT:any;
let AST:any;
let TBIL:any;
let DBIL:any;
let IBIL:any;
let GGT:any;
let ADA:any;
onMounted(() => {
  nextTick(() => {
    if (ALT !== null && ALT !== '' && ALT !== undefined) {
      ALT.dispose();
    }
    if (AST !== null && AST !== '' && AST !== undefined) {
      AST.dispose();
    }
    if (TBIL !== null && TBIL !== '' && TBIL !== undefined) {
      TBIL.dispose();
    }
    if (DBIL !== null && DBIL !== '' && DBIL !== undefined) {
      DBIL.dispose();
    }
    if (IBIL !== null && IBIL !== '' && IBIL !== undefined) {
      IBIL.dispose();
    }
    if (GGT !== null && GGT !== '' && GGT !== undefined) {
      GGT.dispose();
    }
    if (ADA !== null && ADA !== '' && ADA !== undefined) {
      ADA.dispose();
    }
    ALT = (echarts as any).init(document.getElementById('ALT'));
    AST = (echarts as any).init(document.getElementById('AST'));
    TBIL = (echarts as any).init(document.getElementById('TBIL'));
    DBIL = (echarts as any).init(document.getElementById('DBIL'));
    IBIL = (echarts as any).init(document.getElementById('IBIL'));
    GGT = (echarts as any).init(document.getElementById('GGT'));
    ADA = (echarts as any).init(document.getElementById('ADA'));

    // 谷丙转氨酶
    ALT.setOption({
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
          data: timeline,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '谷丙转氨酶',
          min: 9,
          max: 300,
          position: 'left',
          axisLabel: {
            formatter: '{value} U/L',
          },
        },
      ],
      series: [
        {
          name: '谷丙转氨酶',
          type: 'line',
          yAxisIndex: 0,
          data: ALTList,
        },
      ],
    });

    // 谷草转氨酶
    AST.setOption({
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
          data: timeline,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '谷草转氨酶',
          min: 9,
          max: 300,
          position: 'left',
          axisLabel: {
            formatter: '{value} U/L',
          },
        },
      ],
      series: [
        {
          name: '谷草转氨酶',
          type: 'line',
          yAxisIndex: 0,
          data: ASTList,
        },
      ],
    });

    // r-谷氨酰转肽酶
    GGT.setOption({
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
          data: timeline,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'r-谷氨酰转肽酶',
          min: 9,
          max: 300,
          position: 'left',
          axisLabel: {
            formatter: '{value} U/L',
          },
        },
      ],
      series: [
        {
          name: 'r-谷氨酰转肽酶',
          type: 'line',
          yAxisIndex: 0,
          data: GGTList,
        },
      ],
    });

    // 腺苷脱氨酶
    ADA.setOption({
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
          data: timeline,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '腺苷脱氨酶',
          min: 9,
          max: 300,
          position: 'left',
          axisLabel: {
            formatter: '{value} U/L',
          },
        },
      ],
      series: [
        {
          name: '腺苷脱氨酶',
          type: 'line',
          yAxisIndex: 0,
          data: ADAList,
        },
      ],
    });

    // 总胆红素
    TBIL.setOption({
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
          data: timeline,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '总胆红素',
          min: 0,
          max: 100,
          position: 'left',
          axisLabel: {
            formatter: '{value} U/L',
          },
        },
      ],
      series: [
        {
          name: '总胆红素',
          type: 'line',
          yAxisIndex: 0,
          data: TBILList,
        },
      ],
    });

    // 直接胆红素
    DBIL.setOption({
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
          data: timeline,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '直接胆红素',
          min: 0,
          max: 50,
          position: 'left',
          axisLabel: {
            formatter: '{value} U/L',
          },
        },
      ],
      series: [
        {
          name: '直接胆红素',
          type: 'line',
          yAxisIndex: 0,
          data: DBILList,
        },
      ],
    });

    // 间接胆红素
    IBIL.setOption({
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
          data: timeline,
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '间接胆红素',
          min: 0,
          max: 50,
          position: 'left',
          axisLabel: {
            formatter: '{value} U/L',
          },
        },
      ],
      series: [
        {
          name: '间接胆红素',
          type: 'line',
          yAxisIndex: 0,
          data: IBILList,
        },
      ],
    });
  });
});
onUnmounted(() => {
  ALT.dispose();
  AST.dispose();
  TBIL.dispose();
  DBIL.dispose();
  IBIL.dispose();
  GGT.dispose();
  ADA.dispose();
});
</script>

<style lang="scss" scoped>
#ALT {
  width:500px;
  height: 300px;
}
#AST {
  width:500px;
  height: 300px;
}
#TBIL {
  width:500px;
  height: 300px;
}
#DBIL {
  width:500px;
  height: 300px;
}
#IBIL {
  width:500px;
  height: 300px;
}
#GGT {
  width:500px;
  height: 300px;
}
#ADA {
  width:500px;
  height: 300px;
}
</style>
