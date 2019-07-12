<template>
	<v-container fill-height fluid class="Search">
		<v-layout align-center justify-center wrap>
			<v-flex md12 class="block">
				<h1>Search a document</h1>
			</v-flex>
			<v-flex md4 class="block">
				<v-form>
					<v-text-field
					label = "Name of the Document"
					required
					>
					</v-text-field>
				</v-form>
			</v-flex>
			<v-flex md1>
				<v-btn flat>Search
					<font-awesome-icon icon="search" class="srch-icon"/>
				</v-btn>
			</v-flex>	
		</v-layout>
	</v-container>
</template>

<script>
// export default{
	// data () {
	// 	search: null
	// 	return search
	// },
	// methods: {
	// 	fonction: function(){
	// 		if (!this.search)
	// 			alert("The field is empty");
	// 		alert(this.search);
	// 	}
	// }
// };
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
