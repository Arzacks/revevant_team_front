<template>
	<v-container fill-height fluid class="Search">
		<v-layout align-start justify-center wrap>
			<v-flex md12 class="block">
				<h1>Search a document from keywords</h1>
			</v-flex>
			<v-flex md4 class="block">
				<v-combobox
				v-model="chips"
				:items="items"
				label=""
				chips
				clearable
				solo
				multiple>
					<template v-slot:selection="data">
						<v-chip
						:selected="data.selected"
						close
						@input="remove(data.item)">
							<strong>{{ data.item }}</strong><br/>
						</v-chip>
					</template>
				</v-combobox>
			</v-flex>
			<v-flex md1 class="search-button">
				<v-btn flat to="/ResultResearch">Search
					<font-awesome-icon icon="search" class="srch-icon"/>
				</v-btn>
			</v-flex>	
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
		return {
		chips: [],
		items: []
		}
	},

	methods: {
		remove (item) {
		this.chips.splice(this.chips.indexOf(item), 1)
		this.chips = [...this.chips]
		}
  	}
}
</script>


<style lang="css">
.block {
	display: block;
	margin: 5vh
}

.search-button {
	margin: 5vh;
}

.srch-icon {
	margin-left: 5px;
}

</style>
