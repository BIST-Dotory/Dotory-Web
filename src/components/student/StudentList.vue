<template>
  <div class="student-list">
    <h1>학생정보</h1>
    <ul>
      <li v-for="student in students" :key="student.id">
        <router-link :to="{ name: 'StudentDetail', params: { id: student.id } }">
          {{ student.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>