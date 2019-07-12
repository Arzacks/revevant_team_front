<template>
	<v-container fill-height fluid class="search-result">
		<v-layout align-center justify-center wrap>
			<v-flex md12 class="block">
				<h1>Search result for " {{ search }} "</h1>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
	}
};
</script>

<style lang="css">
.block {
	display: block;
	margin: 5vh
}

.srch-icon {
	margin-left: 5px;
}
</style>
