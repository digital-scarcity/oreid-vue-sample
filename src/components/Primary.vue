<template>

  <h1> This is the primary home page.</h1>

</template>

<script>

export default {
  name: 'Primary',

  data () {
    return {
      errorMessage: '',
      signedTransaction: '',
      transactionId: ''
    }
  }
}

</script>

<style>

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
      font-size: 18px;
  }

  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 400px;
    height: 550px;
  }

  .box-card-ore {
    width: 800px;
    height: 550px;
  }

  .box-card-ore-big {
    width: 1200px;
  }

  .demo-input-label {
    display: inline-block;
    width: 105px;
  }

  .demo-input-label-ore {
    display: inline-block;
    width: 155px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
</style>
