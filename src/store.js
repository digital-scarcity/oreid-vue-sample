import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const chainNetwork = 'eos_kylin'

export default new Vuex.Store({
  state: {
    busy: false,
    oreId: null,
    userInfo: null
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload
    },
    setOreId (state, payload) {
      state.oreId = payload.oreId
    },
    LOGIN (state, payload) {
      state.oreId = payload
    },
    LOGOUT (state) {
      state.oreId = null
    }
  },
  actions: {
    async login ({ commit, state }, provider) {
      try {
        let loginResponse = await state.oreId.login({ provider, chainNetwork })
        let { loginUrl } = loginResponse
        if (loginUrl) {
          window.location = loginUrl
        }
      } catch (error) {
        console.log(error)
        // this.errorMessage = error.message;
      }
    },

    async sign ({ commit, state }, payload) {
      const transaction = {
        account: 'demoapphello',
        name: 'hi',
        authorization: [{
          actor: state.userInfo.permissions[0].chainAccount,
          permission: state.userInfo.permissions[0].permission
        }],
        data: {
          user: state.userInfo.permissions[0].chainAccount
        }
      }

      let signOptions = {
        provider: payload.provider || '',
        account: state.userInfo.permissions[0].chainAccount || '',
        broadcast: true,
        chainAccount: state.userInfo.permissions[0].chainAccount || '',
        chainNetwork: state.userInfo.permissions[0].chainNetwork || '',
        state: payload.route,
        transaction,
        accountIsTransactionPermission: false,
        returnSignedTransaction: false
      }
      const signResponse = await state.oreId.sign(signOptions)
      const { signUrl } = signResponse || {}
      if (signUrl) {
        window.location = signUrl
      }
    },

    async loadUser ({ commit, state }, account) {
      commit('setUserInfo', await state.oreId.getUserInfoFromApi(account))
    },

    logout (context) {
      context.state.oreId.logout()
      context.commit('LOGOUT')
    }

  },
  getters: {
    getUserInfo: state => {
      return state.userInfo
    },
    getOreId: state => {
      return state.oreId
    }
  }
})
