<template>
    <el-form class="demo-ruleForm" :model="form" label-width="140px" style="margin-top: 30px;" :rules="rules"
        ref="ruleFormRef">
        <el-form-item label="Номер карты" prop="card_number">
            <el-input style="width: 150px; margin: 0 20px 0 20px;" v-model="form.card_number" />
            <el-button color="#545c64" @click="handleGetCardNumber">Получить номер карты</el-button>
        </el-form-item>
        <el-form-item label="ФИО полностью" prop="name">
            <el-input style="width: 35%; margin-left: 20px;" v-model="form.name" />
        </el-form-item>
        <el-form-item label="Номер телефона" prop="phone">
            <el-input style="width: 35%; margin-left: 20px;" v-model="form.phone" />
        </el-form-item>
        <div style="margin-left: 20px; margin-top: 40px;">
            <el-button color="#545c64" @click="submitForm(ruleFormRef)">
                Зарегистрировать
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">Стереть</el-button>
        </div>

    </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { FormInstance, FormRules, RuleForm, Ref } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const rules = ref<RuleForm>({
    card_number: [
        { required: true, message: 'Поле обязательно к заполнению, нажмите кнопку "Получить номер карты"' },
        // { type: 'number', message: 'Только числовое значение' },
    ],
    name: [
        {
            required: true,
            message: 'Введите имя полностью в формате "Иванов Иван Иванович"',
            trigger: 'change',
        },
    ],
    phone: [
        {
            required: true,
            message: 'Поле обязательно к заполнению',
            trigger: 'change',
        },
        { required: true, pattern: /\+7\(\d{3}\)\d{3}\d{2}\d{2}/g, message: 'Введите номер в формате "+7(999)999-99-99"', trigger: 'change' }
    ]
})
const handleGetCardNumber = () => {

}

const form = ref({
    card_number: '',
    name: '',
    phone: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid: any, fields: any) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>