<template>
	<v-container fill-height fluid class="search-result">
		<v-layout align-center justify-center wrap>
			<v-flex md12 class="block">
				<h1>Search results for your research</h1>
			</v-flex>
			<v-flex md12 class="block">
				<v-container fluid wrap>
					<v-layout>
						<v-flex xl12 lg12 md12 sm12 xs12>
							<v-card >
								<v-list>
									<v-list-tile
									v-for="item in items"
									:key="item.title">
										<v-list-tile-content>
											<v-list-tile-title v-text="item.title"></v-list-tile-title>
										</v-list-tile-content>
									</v-list-tile>
								</v-list>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>

			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data () {
    return {
      items: [
		{ title: 'Cancer du sein'},
		{ title: 'Le cancer du sein'},
		{ title: 'The breast cancer'}
      ]
    }
  }
}
</script>


<style lang="css">
.block {
	display: block;
	margin: 5vh
}

.red {
	background-color: red;
}
</style>
