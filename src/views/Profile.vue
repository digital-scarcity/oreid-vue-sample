<template>
  <div>
    <Navigation />

    <el-header><h1>A Profile Page</h1></el-header>

      <el-container >
    <el-main >

    <div v-if="getUserInfo">

      <el-row>
        <el-col :span="8">
          <el-card :body-style="{ padding: '15px' }" class="box-card">
            <div slot="header" class="clearfix">
            <span><h3>Data from OAuth Provider</h3></span>
            </div>
            <img :src="getUserInfo.picture" class="image" style=width:25,height:25>

            <span class="demo-input-label">Name :</span>
            <span class="demo-input-label">{{getUserInfo.name}}</span> <br/>
            <span class="demo-input-label">Email :</span>
            <span class="demo-input-label">{{getUserInfo.email}}</span> <br/>
            <span class="demo-input-label">Username :</span>
            <span class="demo-input-label">{{getUserInfo.username}}</span> <br/>
          </el-card>
        </el-col>

        <el-col :span="16">
          <el-card :body-style="{ padding: '15px' }" class="box-card-ore">
            <div slot="header" class="clearfix">
                <span><h3>Data from ORE ID</h3></span>
            </div>
            <span class="demo-input-label-ore">Account Name:</span>
            <span class="demo-input-label-ore">{{getUserInfo.accountName}}</span> <br/>
            <span class="demo-input-label-ore">Chain Account:</span>
            <span class="demo-input-label-ore">{{getUserInfo.permissions[0].chainAccount}}</span> <br/>
            <span class="demo-input-label-ore">Chain Network:</span>
            <span class="demo-input-label-ore">{{getUserInfo.permissions[0].chainNetwork}}</span> <br/>
            <span class="demo-input-label-ore">Public Key :</span>
            <span class="demo-input-label-ore">{{getUserInfo.permissions[0].publicKey}}</span> <br/>
            <span class="demo-input-label-ore">Permission :</span>
            <span class="demo-input-label-ore">{{getUserInfo.permissions[0].permission}}</span> <br/>
            <span class="demo-input-label-ore">isDefault :</span>
            <span class="demo-input-label-ore">{{getUserInfo.permissions[0].isDefault}}</span> <br/>
            <span class="demo-input-label-ore">Priv. Key External :</span>
            <span class="demo-input-label-ore">{{getUserInfo.permissions[0].privateKeyStoredExterally}}</span> <br/><br/>
            <!-- <span class="demo-input-label-ore">ORE ID Options :</span>
            <el-input
              type="textarea"
              :rows="8"
              :value=JSON.stringify(getOreId.options)>
            </el-input> -->
          </el-card>
        </el-col>
      </el-row>

      <!-- <el-row>
          <el-col :span="20">
          <el-card :body-style="{ padding: '15px' }" class="box-card-big">
            <div slot="header" class="clearfix">
            <span><h3>Complete ORE ID Object</h3></span>
            </div>
            <el-input
              type="textarea"
              :rows="35"
              :value=JSON.stringify(getOreId)>
            </el-input>
          </el-card>
        </el-col>
      </el-row> -->
    </div>

    </el-main>
  </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'profile',
  components: {
    Navigation
  },

  computed: {
    ...mapGetters([
      'getOreId',
      'getUserInfo'
    ])
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
