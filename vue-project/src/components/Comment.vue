
<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const comments = ref([])

async function getComments() {
  const { data } = await supabase.from('comments').select()
  comments.value = data
}

onMounted(() => {
  getComments()
})
</script>

<style>
/* Center everything */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  margin-top: 20px;
}

/* Comment Box */
.comment-box {
  background-color: #800020;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.comment-box input,
.comment-box textarea {
  width: 100%;
  margin: 5px 0;
  padding: 5px;
}

.comment-box button {
  width: 100%;
  padding: 5px;
  background-color: white;
  color: #800020;
  border: none;
  cursor: pointer;
}
</style>
