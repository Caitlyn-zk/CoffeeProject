<template>
    <div id="vue-app">
11         <h1>动态 CSS CLASS </h1>
12         
13         <h2> 示例 1</h2>
14         <div v-bind:class="{changeColor:changeColor}">
15             <span>你妹的</span>
16         </div>
17         <!--这里绑定单击事件 相当于 给自己取反--->
18         <div v-on:click="changeColor=!changeColor" v-bind:class="{changeColor:changeColor}">
19             <span>你妹的</span>
20         </div>
21 
22         <h2 v-bind:class="{red:false}">示例 2 false  静态更改 样式</h2>
23         <h2 v-bind:class="{red:true}">示例 2 true，查看样式注意有什么不同之处</h2>
24 
25 
26         <button v-on:click="changeColor=!changeColor"> change color</button>
27         <button v-on:click="changeLength=!changeLength"> change length</button>
28         <div v-bind:class="compClasses">
29             <span>大哥哥</span>
30         </div>
31     </div>
</template>

<script>
export default {
  data () {
    return {
      changeColor:false,    
      changeLength:false
    }
         
 },
     computed:{
         compClasses (){
             return {
                 changeColor:this.changeColor,
                 changeLength:this.changeLength
             }
   } 
     } 
}

</script>

<style>

 span{
     background:red;
    display:inline-block;
     padding:10px;
     color:#fff;
     margin: 10px 0;
 }
 
.changeColor span{
     background:green;
 }
 
 .changeLength span:after{
     content:"length";
    margin-left:10px;
 }

</style>
