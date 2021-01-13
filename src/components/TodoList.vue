<template>
<ul>
<li v-for="(todo, index) in todos" @click="deleteToDo(index)" :key="index">{{todo}}</li>
</ul>
</template>

<script type="text/javascript">
	export default {
		props:['todos'],
		methods:{
			deleteToDo(index){
			this.$emit('delete-todo', index);
		}
		}
	}
	
</script>