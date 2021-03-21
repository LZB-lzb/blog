<template>
  <div>
    <div id="home">
      <div>
        <img src="../../assets/images/logo.png" alt="" />
      </div>
      <div>
        <h1>Vue博客平台</h1>
        <h4>一个专注于学习的博客平台</h4>
      </div>
    </div>
    <div id="butt"><el-link type="primary" href="#/edit">让我们发表第一篇博客吧！</el-link></div>
  </div>
</template>
<style scoped lang="less">
#home {
  width: 82vw;
  display: flex;
  justify-content: center;
  div {
    margin: 4%;
    h1 {
      margin-top: 20%;
    }
  }
}
#butt{
     width: 82vw;
  display: flex;
  justify-content: center;
}
</style>