<template>
  <div class="notice-list">
    <h1>공지사항</h1>
    <ul>
      <li v-for="notice in notices" :key="notice.id">
        <router-link :to="{ name: 'NoticeDetail', params: { id: notice.id }}">
          {{ notice.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>