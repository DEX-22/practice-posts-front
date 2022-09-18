<script lang="ts" setup>
import moment from 'moment'
import { ref,computed } from 'vue'

const props = defineProps({
  post: Object
})

let date = computed(()=>{
  const date = !!parseInt(props.post.published)? props.post.published_at : props.post.create_at 
  return  moment(date).format('MMMM DD, YYYY')
})


</script>
<template>

<div class="mx-4 my-8 bg-indigo-900 rounded-xl drop-shadow-sm pb-2">
    <div class="flex flex-row text-indigo-300 font-bold p-2 ">{{props.post.author}}</div>
    <div class="flex flex-row">
      <div class="flex flex-col px-8 py-2">
        
        <p class="bg-indigo-600 text-indigo-200 rounded-xl p-2 w-custom">
          <h3 class="text-2xl text-center mb-2">{{ props.post.title}}</h3>
          {{ props.post.content }}
        </p>
      </div>
    </div>
      <div class="flex justify-end text-indigo-400 pr-3 m-2" >
        {{ date }}
      </div>
  </div>
</template>
<style>
.w-custom{
  width: 40rem;
}
</style>