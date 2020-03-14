<template>
  <div>
    <el-table
      :data="tableData"
      :v-loading="tableLoading"
      row-key="id"
      height="100%"
      highlight-current-row
      show-summary
      border
      fit
      style="width: 100%; border:1px solid #EBEEF5; border-color: #868686"
      :cell-style="tableCellStyle"
      :header-cell-style="tableHeaderCellStyle"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    // 修改 table cell边框的背景色
    tableCellStyle() {
      return "border-color: #868686;";
    },
    // 修改 table header cell的背景色
    tableHeaderCellStyle() {
      return "border-color: #868686; color: #606266;";
    }
  }
};
</script>