<template>
  <div class="manage">
    <!-- 操作按钮 -->
    <el-button type="primary" @click="handleAddBtnClick">新增</el-button>
    <!-- 数据表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="90"></el-table-column>
      <el-table-column prop="name" label="书名"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="memo" label="备注"></el-table-column>
      <el-table-column prop="create_date" label="创建时间">
        <template slot-scope="scope">
        <el-button  type="text" size="small" @click="handleDelClick(scope.row)">删除</el-button>
        <el-button type="text" size="small" @click="handleEditClick(scope.row)">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
    <!-- 对话框 -->
    <el-dialog title="请输入书籍信息" :visible.sync="dialogVisible" width="30%">
       <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="书名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="出版号">
        <el-input v-model="form.isbn"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.memo"></el-input>
      </el-form-item>
    </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
// 引入数据格式化工具qs
import Qs from 'qs';
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false, //diag弹框默认不显示
      form: {
        id:'',
        name: '',
        author: '',
        isbn: '',
        price: null,
        memo: '',
      }
    };
  },
  created() {
    //  容错处理，出错时抛出异常
    this.getTableData();
  },
  methods: {
    //  封装获取数据的方法 getTableData()
    getTableData() {
      try {
        this.$http.get("http://127.0.0.1:8080/PHP/bookList").then((res) => {
          const data = res.data || [];
          //  若返回数据出错或为空时，为默认数据[]
          this.tableData = data;
        });
      } catch (error) {
        console.error(error);
      }
    },
    handleAddBtnClick() {
      // console.log(this.form);
      // 点击新增按钮时先清除表单
      this.form = {};
      // 点击新增按钮时显示弹出框
      this.dialogVisible = true;
    },
    handleSubmit() {
      // 提交前判断图书信息输入是否完整
      const {name,author,isbn,price} = this.form;
      if(!name|| !author || !isbn || !isbn || !price) {
        this.$message("请输入完整的图书信息");
        return;
      }
     this.dialogVisible = false;
    //  模拟表单提交数据
      const formData = this.form;
      this.$http({
        method: "post",
        //新增时不需要id，而编辑需要id，通过3目运算符判断
        url: this.form.id ? 'http://127.0.0.1:8080/PHP/bookModify' : 'http://127.0.0.1:8080/PHP/bookAdd',
        data: formData,
        // 对数据进行格式化
        transformRequest: [
          function(data) {
            return Qs.stringify(data);
          },
        ],
        // 请求头
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
      }).then(() => {
        // 修改成功后刷新表格数据
        this.getTableData();
        // 方式二
        // this.tableData.push(formData);
      });
    },
    handleEditClick(obj) {
      const {id,name,author,isbn,price,memo} = obj;
      this.form.id = id;
      this.form.name = name;
      this.form.author = author;
      this.form.isbn = isbn;
      this.form.price = price;
      this.form.memo = memo;
      this.dialogVisible = true;
    },
    handleDelClick(obj) {
      const id = obj.id;
      const url = `http://127.0.0.1:8080/PHP/bookDel/${id}`;
      this.$http.get(url).then(() => {
        // 删除成功后刷新表格数据
        this.getTableData();
        // 方式二
        // this.tableData.push(formData);
      });
    }
  },
};
</script>
<style lang="scss" scoped>
.manage {
  margin: 10px;
  .el-button {
    margin-bottom: 10px;
    padding: 8px 16px;
  }
}
</style>