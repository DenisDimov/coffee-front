<template>
    <el-form size="large" ref="ruleFormRef" :model="form" style="margin: 30px 0 0 20px" :rules="rules">
        <el-form-item label="Номер карты" prop="card_number">
            <el-input style="width: 150px; margin-right: 20px; " v-model="form.card_number" />
            <el-button color="#545c64" @click="handleGetCardNumber">Получить номер карты</el-button>
        </el-form-item>
        <el-form-item label="Сумма" prop="sum">
            <el-input autofocus="false" style="width: 150px; margin: 0 20px 0 37px;" v-model.number="form.sum" />
        </el-form-item>
        <el-button color="#545c64" @click="submitForm(ruleFormRef)">Пополнить</el-button>
    </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { FormInstance, RuleForm } from 'element-plus'


const ruleFormRef = ref<FormInstance>()
const form = ref({
    card_number: '',
    sum: null
})

const rules = ref<RuleForm>({
    card_number: [
        {
            required: true,
            message: 'Нажмите кнопку "Получить номер карты"',
            trigger: 'change',
        },
    ],
    sum: [
        { required: true, message: 'Поле обязательно к заполнению' },
        { type: 'number', message: 'Поле должно быть числом' },
    ]
})

const handleGetCardNumber = () => {

}

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {

            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>


<style>
.el-form-item__error {
    margin: 0 20px 0 37px;
}
</style>