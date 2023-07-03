<template>
    <div class="h-6" />
    <el-menu :router="true" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/register">Регистрация</el-menu-item>
        <el-menu-item index="/replenishment">Пополнение карты</el-menu-item>
        <el-menu-item index="/transaction">Транзакции общие</el-menu-item>
        <el-menu-item index="/personal">Личный кабинет</el-menu-item>
    </el-menu>
</template>
  
<script lang="ts" setup>

</script>

<style></style>