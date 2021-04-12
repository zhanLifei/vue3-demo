<template>
  <div class="hello">
    <h3 style="margin: 20px 0;">{{ msg }}</h3>
    <ul class="info">
        <li><slot name="content"></slot></li>
        <li><slot name="content1"></slot></li>
        <li><slot name="content2"></slot></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props){
    // 传入 props 可以 输出值
    console.log('接收props值',props)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .info{
        color: #999;
        font-size: 14px;
        padding-left: 15px;
        border-left: 4px solid #4cc089;
    }
</style>
