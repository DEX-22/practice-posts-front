<script setup lang="ts">
import Post from './components/Post.vue'
import InsertPost from './components/InsertPost.vue'
import { onBeforeMount, reactive } from 'vue';
import {postStore} from './store/post.store'

const pStore = postStore()



onBeforeMount( ()=>{
   pStore.fillPosts()
})

</script>

<template>

  <div class="container mx-auto py-16">
    <div class="flex flex-row ">
      <div class="flex flex-col w-1/2 ">
        <InsertPost />
      </div> 
      <div v-if="pStore.posts.length > 0" class="flex-col w-1/2 overflow-y-scroll h-148 scroll-smooth scroll-m-0 scroll-p-0">
        <Post v-for="post in pStore.posts" :post="post"/>
      </div>
    </div>

  </div>


</template>

<style scoped>
.h-148{
  height: 48rem;
}
</style>
