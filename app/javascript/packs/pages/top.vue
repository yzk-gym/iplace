<template>
  <div>
    <h1>お気に入りのスペースを登録しよう！</h1>
    <p>誰かに進めたい場所はありませんか？</p>
    <description context="デートする時のおすすめスポットを知りたい！"
                 text="ネットで調べてもどのあたりなのかいまいちわからない。。。">
      
    </description>
  </div>
</template>

<script>
  import Header from '../compoents/header';
  import Description from "../compoents/description";
  
  export default {
    name: 'Top',
    components: {
      Description,
      Header
    },
  }
</script>