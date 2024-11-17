<template>
  <div class="suggest-list">
    <h1>건의사항</h1>
    <ul>
      <li v-for="suggest in suggests" :key="suggest.id">
        <router-link :to="{ name: 'SuggestDetail', params: { id: suggest.id }}">
          {{ suggest.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>