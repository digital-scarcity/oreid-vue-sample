<template>
    <el-container >
    <el-main >

    <el-row>
        <el-col :span="16">
            <el-card :body-style="{ padding: '30px' }" >
            <div v-if="getUserInfo">
              <el-button @click.prevent="handleLogout('google')" type="primary">Log Out</el-button>
              <span class="nav-label">Logged in as {{ getUserInfo.email }}</span>
              <el-button @click.prevent="handleSign('google')" type="primary">Sign Transaction</el-button>
            </div>
            <div v-else>
                <el-button @click.prevent="handleLogin('google')" type="primary">Login with Google</el-button>
            </div>
            </el-card>
        </el-col>
    </el-row>

    <el-row>
        <el-col :span="16">
            <el-card :body-style="{ padding: '30px' }" >
            <el-button @click.prevent="$router.push( {name: 'home'} )" type="primary">Home</el-button>
            <el-button @click.prevent="$router.push( {name: 'profile'} )" type="primary">Profile</el-button>
            <el-button @click.prevent="$router.push( {name: 'route3'} )" type="primary">Page 3</el-button>
            <el-button @click.prevent="$router.push( {name: 'route4'} )" type="primary">Page 4</el-button>
            </el-card>
        </el-col>
    </el-row>

    <div v-if="transactionId">

      <el-row>
        <el-col :span="16">
          <el-card :body-style="{ padding: '15px' }" class="trx-id-box" >
            <span>View Transaction on Block Explorer: </span> <br/>
            <a :href="getTrxUrl(transactionId)">{{ getTrxUrl(transactionId) }}</a>
          </el-card>
        </el-col>
      </el-row>
    </div>

    </el-main>
    </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { OreId } from 'eos-auth'
import scatterProvider from 'eos-transit-scatter-provider'
import ledgerProvider from 'eos-transit-ledger-provider'
import lynxProvider from 'eos-transit-lynx-provider'
import meetoneProvider from 'eos-transit-meetone-provider'
import tokenpocketProvider from 'eos-transit-tokenpocket-provider'
import { oreidConfig } from '../../config'

const eosTransitWalletProviders = [
  scatterProvider(),
  // ledgerProvider(),
  ledgerProvider({ pathIndexList: [ 0, 1, 2, 35 ] }),
  lynxProvider(),
  meetoneProvider(),
  tokenpocketProvider()
]

export default {
  name: 'Navigation',

  data () {
    return {
      errorMessage: '',
      signedTransaction: '',
      transactionId: ''
    }
  },

  methods: {
    async handleLogin (provider) {
      this.$store.dispatch('login', provider)
    },

    async handleLogout () {
      this.$store.dispatch('logout')
    },

    async handleSign (provider) {
      const currentRouteName = this.$router.currentRoute.name
      this.$store.dispatch('sign', { provider: provider, route: currentRouteName })
    },

    getTrxUrl (trxId) {
      return 'https://kylin.eosq.app/tx/' + trxId
    }
  },

  async mounted () {
    if (this.$route.query.state) {
      this.$router.push({ name: this.$route.query.state, query: this.$route.query })
    }

    if (!this.getOreId) {
      const newOreId = new OreId({ appName: oreidConfig.appName,
        appId: oreidConfig.appId,
        apiKey: oreidConfig.apiKey,
        oreIdUrl: oreidConfig.oreIdUrl,
        authCallbackUrl: oreidConfig.authCallbackUrl,
        signCallbackUrl: oreidConfig.signCallbackUrl,
        backgroundColor: oreidConfig.backgroundColor,
        eosTransitWalletProviders,
        setBusyCallback: this.setBusyCallback })
      this.$store.commit('setOreId', {
        oreId: newOreId
      })
    }

    const url = window.location.href
    const localStorageKey = 'oreid.' + oreidConfig.appId + '.user'

    if (this.$route.query.account) {
      const { account } = await this.getOreId.handleAuthResponse(url)
      this.$store.dispatch('loadUser', account)
    } else if (localStorage.getItem(localStorageKey)) {
      const storageObject = JSON.parse(localStorage.getItem(localStorageKey))
      this.$store.dispatch('loadUser', storageObject.accountName)
    }

    if (this.$route.query.transaction_id) {
      const signedResponse = await this.getOreId.handleSignResponse(url)

      if (!signedResponse.errors) {
        const h = this.$createElement
        this.$notify({
          title: 'Transaction Completed',
          message: h('i', { style: 'color: red' }, 'Click the link to view your transaction on a block explorer'),
          duration: 0
        })
        if (signedResponse.transactionId) this.transactionId = signedResponse.transactionId
      } else {
        this.errorMessage = signedResponse.errors.join(', ')
      }
    }
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

  .nav-label {
    display: inline-block;
    width: 355px;
  }

</style>
