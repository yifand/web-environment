<template>
  <div>
    hello
    <!-- <HelloWorld></HelloWorld> -->
    <swiperCom ></swiperCom>
  </div>
</template>

<script>
import { searchCarById } from '@/http/api'
import swiperCom from '@/components/swiperCom'
export default {
  components:{
    swiperCom
  },
  data(){
    return {
      id: this.$route.params.id == ":id" ? false : this.$route.params.id
    }
  },
  methods:{
    testrequest(){
      let params = {
        id:this.id
      }
      console.log(1)
      searchCarById(params).then(res=>{
        console.log(res)
      })
    }
  },
  created(){
    this.testrequest()
  }
}
</script>

<style>

</style>
