<script setup lang="ts">
import {ref} from 'vue'
let title=ref("卡片")
defineOptions({
  name: 'WmCard',
})
</script>

<template>
  <div>
    <p>{{title}}</p>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </div>
</template>

