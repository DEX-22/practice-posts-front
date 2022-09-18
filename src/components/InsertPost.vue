<script lang="ts" setup>
import { postStore } from '../store/post.store';

const pStore = postStore()


</script>
<template>
    <div class="flex flex-col items-center ">
            <div class="flex flex-row justify-around text-indigo-900 font-bold text-4xl m-3">
                <h3>
                    New post
                </h3>
            </div>
            <div class="container-input">
                <label class="label"> Author: </label>
                <input v-model="pStore.post.author" type="text" class="input"/>
            </div>
            <div class="container-input">
                <label class="label"> Title: </label>
                <input v-model="pStore.post.title" type="text" class="input"/>
            </div>
        
            <div class="container-input">
                <label class="label"> Message: </label>
                <textarea v-model="pStore.post.content" rows="3" class="text-area"/>
            </div>
        <div class="flex">
            <button class="btn" @click="pStore.insertPost">
                Enviar
            </button>
        </div>
    </div>
</template>
<style lang="postcss" scoped>
.container-input{
    @apply flex flex-col w-3/5 my-2
}
.input{
    @apply border-2 bg-indigo-400 h-12 rounded-xl w-full text-white text-xl px-2;
}
.text-area{
    @apply border-2 bg-indigo-400 h-36 rounded-xl w-full text-white text-lg px-2;
}
.label{
    @apply text-indigo-900 font-semibold text-xl;
}
.btn{
    @apply rounded-3xl bg-indigo-700 text-indigo-200 text-2xl font-semibold px-8 py-2 m-4;
}
</style>