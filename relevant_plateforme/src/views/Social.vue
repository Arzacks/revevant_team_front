<template>
  <div class="Social" >
    <h1>This is a Social page</h1>
    <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="i in friend" :key="`6${i}`" xs5>
            <v-card dark color="#1976d2" >
              <flat tile class="d-flex">
                <v-img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" aspect-ratio="1"></v-img>
                <h1 >{{ i.firstname }} {{ i.lastname }}</h1>
              </flat>
            </v-card>
          </v-flex>
        </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      friend: [{
        firstname: 'john',
        lastname: 'Doe',
      },
      {
        firstname: 'Paul',
        lastname: 'Martin',
      },
      ]
    }
  }
}
</script>