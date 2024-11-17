<template>
  <div class="outing-list">
    <h1>외출/외박</h1>
    <ul>
      <li v-for="outing in outings" :key="outing.id">
        <router-link :to="{ name: 'OutingDetail', params: { id: outing.id } }">
          {{ outing.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>