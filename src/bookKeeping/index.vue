<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <!-- Form -->
          <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
          <el-dialog title="添加资金消费记录" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="金额" :label-width="formLabelWidth">
                <el-input v-model="form.value" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="消费类型" :label-width="formLabelWidth">
                <el-select v-model="form.paymentTypeId" placeholder="消费类型">
                  <el-option
                    v-for="paymentType in paymentTypeList"
                    :key="paymentType.id"
                    :label="paymentType.value"
                    :value="paymentType.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="消费渠道" :label-width="formLabelWidth">
                <el-select v-model="form.paymentChannelId" placeholder="消费渠道">
                  <el-option
                    v-for="paymentChannel in paymentChannelList"
                    :key="paymentChannel.id"
                    :label="paymentChannel.value"
                    :value="paymentChannel.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="消费用途" :label-width="formLabelWidth">
                <el-select v-model="form.paymentUseId" placeholder="消费渠道">
                  <el-option
                    v-for="paymentUse in paymentUseList"
                    :key="paymentUse.id"
                    :label="paymentUse.value"
                    :value="paymentUse.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitData()">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="time" label="日期" width="180"></el-table-column>
      <el-table-column prop="value" label="金额" width="180"></el-table-column>
      <el-table-column prop="paymentTypeValue" label="消费类型"></el-table-column>
      <el-table-column prop="paymentChannelValue" label="消费渠道"></el-table-column>
      <el-table-column prop="paymentUseValue" label="消费用途"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tableData: [{}],
      paymentTypeList: [],
      paymentChannelList: [],
      paymentUseList: [],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        value: "",
        paymentTypeId: "",
        paymentChannelId: "",
        paymentUseId: ""
      }
    };
  },
  methods: {
    init: function() {
      var _this = this;
      this.axios
        .get("/service/bookKeeping")
        .then(response => {
          _this.tableData = response.data;
        });

      this.axios
        .get("/service/paymentType")
        .then(response => {
          _this.paymentTypeList = response.data;
        });

      this.axios
        .get("/service/paymentChannel")
        .then(response => {
          _this.paymentChannelList = response.data;
        });

      this.axios
        .get("/service/paymentUse")
        .then(response => {
          _this.paymentUseList = response.data;
        });
    },
    submitData: function() {
      var _this = this;
      this.axios
        .post("/service/bookKeeping", _this.form)
        .then(response => {
          _this.dialogFormVisible = false;
          this.axios
            .get("/service/bookKeeping")
            .then(response => {
              _this.tableData = response.data;
            });
        });
    }
  },
  created() {
    this.init();
  }
};
</script>


<style>
.el-row {
  margin-bottom: 20px;
  /* last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fa0255;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>