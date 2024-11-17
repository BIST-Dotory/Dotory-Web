<template>
  <div class="write-form">
    <h2>게시글 작성</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" id="title" v-model="title" required>
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea id="content" v-model="content" rows="10" required></textarea>
      </div>
      <div class="button-group">
        <button type="submit" class="submit-btn">등록</button>
        <button type="button" class="cancel-btn" @click="cancel">취소</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submitForm() {
      // Form submission logic
      console.log('제목:', this.title)
      console.log('내용:', this.content)
    },
    cancel() {
      this.title = ''
      this.content = ''
    }
  }
}
</script>

<style scoped>
.write-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button-group {
  text-align: center;
  margin-top: 20px;
}

button {
  padding: 8px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
}

.cancel-btn {
  background-color: #f44336;
  color: white;
}
</style>
