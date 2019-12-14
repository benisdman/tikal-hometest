<template>
	<div id="app">
		<agents-table />
	</div>
</template>

<script>
import AgentsTable from "./components/agents-table.component.vue";

export default {
	name: "app",
	components: {
		AgentsTable
	}
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
