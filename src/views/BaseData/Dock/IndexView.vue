<template>
  <div class="base-data-dock">
    <el-form inline :model="form" label-suffix=":" size="small">
      <el-form-item label="隶属省">
        <el-select
          v-model="form.region1"
          placeholder="请选择"
          filterable
          clearable
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="隶属市">
        <el-select
          v-model="form.region2"
          placeholder="请选择"
          filterable
          clearable
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="港口名称">
        <el-input v-model="form.harborName" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        region1: "",
        region2: "",
        harborName: "",
      },
    };
  },
  computed: {
    ...mapState(["province"]),
  },
  methods: {
    getProvince() {
      this.$store.commit("getProvince");
    },
    onSubmit() {
      console.log("submit!");
      this.getProvince();
    },
  },
};
</script>
