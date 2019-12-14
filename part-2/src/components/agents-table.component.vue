<template>
	<div class="agents-table-container">
		<table class="agents-table">
			<tr>
				<th class="agents-table__header">Agent ID</th>
				<th class="agents-table__header">Country</th>
				<th class="agents-table__header">Address</th>
				<th class="agents-table__header">Date</th>
			</tr>
			<!-- loops through sorted missions and write rows -->
			<tr v-for="(mission, index) in missionsByDateAsc" :key="index">
				<td class="agents-table__cell">{{ mission.agent }}</td>
				<td class="agents-table__cell">{{ mission.country }}</td>
				<td class="agents-table__cell">{{ mission.address }}</td>
				<td class="agents-table__cell">{{ mission.date }}</td>
			</tr>
		</table>
		<div class="missions-counter">{{ missions.length }} missions</div>
	</div>
</template>

<script>
import * as missions from "./../mock-data/missions.json";
export default {
	name: "agents-table",
	data: () => {
		return { missions: missions.default };
	},
	computed: {
		// sort missions by date ascending
		missionsByDateAsc() {
			return [...this.missions].sort((a, b) => {
				return Date.parse(a.date) - Date.parse(b.date);
			});
		}
	}
};
</script>

<style lang="scss">
.agents-table-container {
	width: 1080px;
	margin: auto;
}
.agents-table {
	background: #fafafa;
	width: 100%;
	border: 1px solid #cfcfcf;
	text-align: left;
	&__header {
		border-bottom: 1px solid #cfcfcf;
		border-right: 1px solid #dfdfdf;
		padding: 5px 7px;
	}
	&__cell {
		background: #ffffff;
		padding: 5px 7px;
		border-bottom: 1px solid #cfcfcf;
	}
}
.missions-counter {
	padding: 5px 7px;
	text-align: right;
	border: 1px solid #cfcfcf;
	background: #fafafa;
}
</style>
