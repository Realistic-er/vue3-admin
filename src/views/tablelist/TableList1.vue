<template>
  <div class="tablelist1">
    <!-- 点击新增按钮 -->
    <el-button type="primary"
      class="btn"
      @click="adddialog">新增</el-button>
      <el-table
      :data="tableData"
      :border="true"
      style="width: 100%"
    >
    <el-table-column prop="name" label="名称" width="100"/>
    <!--  -->
    <el-table-column prop="image" label="图片">
      <template #default="scope">
        <el-image
        v-for="(o, i) in scope.row.image" :key="i" style="width:40px;height:40px;"
        :src="o" :preview-src-list="previewImgs(o, scope.row.image)"
        :preview-teleported=true></el-image>
      </template>
    </el-table-column>
    <!--  -->
    <el-table-column prop="inputtime" label="进货时间" width="+"/>
    <el-table-column prop="inputnumber" label="进货数量" sortable
    :sort-method="sortInput" width="130" />
    <el-table-column prop="buffer" label="库存" sortable
    :sort-method="sortBuffer" width="100"/>
    <el-table-column prop="price" label="价格" width="100"/>
    <el-table-column prop="sales" label="销量" sortable
    :sort-method="sortSales" width="100"/>
    <el-table-column prop="notes" label="备注"/>
    </el-table>
    <!--  -->
    <el-dialog v-model="dialogTableVisible" title="添加商品" :close-on-click-modal="false">
      <AddDialog @changedialog="changedialog"/>
    </el-dialog>
    <!--  -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineComponent } from 'vue';
import AddDialog from '../../components/table/AddDialog.vue';

interface tableproperty {
  prop: string,
  label: string,
  sortable: boolean,
  width: number,
}
interface User {
  name: string
  image: string[]
  inputtime: string
  inputnumber: number,
  buffer: number
  price: number
  sales: number
  notes: string
}
const propertyData: tableproperty[] = [
  {
    prop: 'name',
    label: '名称',
    sortable: false,
    width: 100,
  },
  {
    prop: 'image',
    label: '图片',
    sortable: false,
    width: 180,
  },
  {
    prop: 'inputtime',
    label: '进货时间',
    sortable: false,
    width: 100,
  },
  {
    prop: 'buffer',
    label: '库存',
    sortable: true,
    width: 100,
  },
  {
    prop: 'price',
    label: '价格',
    sortable: false,
    width: 100,
  },
  {
    prop: 'sales',
    label: '销量',
    sortable: false,
    width: 100,
  },
  {
    prop: 'notes',
    label: '备注',
    sortable: false,
    width: 100,
  },
];
const tableData: User[] = [
  {
    name: '海澜之家',
    image: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    ],
    inputtime: '2022-05-10',
    inputnumber: 500,
    buffer: 300,
    price: 199,
    sales: 200,
    notes: '口碑比较好,受大众喜欢',
  },
  {
    name: '鸿星尔克',
    image: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    ],
    inputtime: '2022-05-10',
    inputnumber: 400,
    buffer: 300,
    price: 99,
    sales: 100,
    notes: '国产潮牌',
  },
  {
    name: '安踏',
    image: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    ],
    inputtime: '2022-05-11',
    inputnumber: 300,
    buffer: 20,
    price: 299,
    sales: 180,
    notes: '衣服设计新颖,亮点很多',
  },
  {
    name: '李宁',
    image: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    ],
    inputtime: '2022-05-20',
    inputnumber: 300,
    buffer: 18,
    price: 499,
    sales: 282,
    notes: '比较好卖的运动品牌',
  },
  {
    name: '花花公子',
    image: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    ],
    inputtime: '2022-06-18',
    inputnumber: 600,
    buffer: 300,
    price: 69,
    sales: 300,
    notes: '性价比比较高',
  },
  {
    name: 'Malbon',
    image: [
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
      'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    ],
    inputtime: '2022-06-19',
    inputnumber: 500,
    buffer: 190,
    price: 899,
    sales: 310,
    notes: '韩国品牌,较受国人喜欢',
  },
];
// 进货数量的排序
const sortInput = (a, b) => (a.inputnumber - b.inputnumber);
// 库存的排序
const sortBuffer = (a, b) => (a.buffer - b.buffer);
// 销量的排序
const sortSales = (a, b) => (a.sales - b.sales);
// 图片预览数组
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg';
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
];
// 图片预览展开的是预览数组的第一个元素，思路就是如何将点击的元素放在第一位
const previewImgs = (img, imgs) => {
  const index = imgs.indexOf(img);
  // ['a','b','c','d','e']
  // 比如说点击的是c
  const frontArr = imgs.slice(0, index);
  const behindArr = imgs.slice(index, imgs.length);
  const list = behindArr.concat(frontArr);
  return list;
};
//
const dialogTableVisible = ref(false);
const adddialog = () => {
  dialogTableVisible.value = !dialogTableVisible.value;
};
const changedialog = () => {
  dialogTableVisible.value = !dialogTableVisible.value;
};
</script>

<style lang="scss" scoped>
@import '../../style/tablelist1.scss'
</style>
