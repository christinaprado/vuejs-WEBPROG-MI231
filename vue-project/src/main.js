import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import FoodItem3 from './components/FoodItem3.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import Comment from './components/Comment.vue'
import Commentform from './components/CommentForm.vue'  // Wrong casing

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('food-item3', FoodItem3)
app.component('personal-profile', PersonalProfile)
app.component('comment', Comment)
app.component('comment-form', CommentForm) // `CommentForm` is undefined

app.mount('#app')