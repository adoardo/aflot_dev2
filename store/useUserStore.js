import {defineStore} from 'pinia';
import api from '@/api/api'

export const useUsersStore = defineStore('global/user', {
    state: () => ({
        user: {
            info: {
                first_name: '',
                last_name: '',
                email: ''
            }
        },
        userProfileId: '',
        authErrorMsg: false,
        authenticated: false,
        loading: false,
        token: false,
        userdata: {
            info: {
                first_name: '',
                last_name: '',
                email: ''
            }
        },
        encemail: false,
        decemail: false,
        socialsAuth: {
            telegram_id: '',
            vk_id: '',
            is_vk: false,
            is_tg: false,
        },
        authRole: 'user'
    }),
    actions: {
        async setAuthRole(role) {
          if (role == 'seilor') {
            this.authRole = 'user'
          } else {
            this.authRole = 'company'
          }
        },
        async signIn(user, type) {
            // if (user.password.length < 7) {
            //     this.authErrorMsg = 'Слишком короткий пароль (мин. длина 8 символов).';
            //     return false;
            // }
            // if (user.password !== user.confirm_password) {
            //     this.authErrorMsg = 'Введенные пароли не совпадают.';
            //     return false;
            // }

            const result = {
                user: false,
                state: true
            }

            try {
                const {data} = await api.post('/register/' + this.authRole, user);
                this.userdata = data;
                this.authErrorMsg = false;

                //const {emailData} = await api.post('/register/' + this.authRole, user);
                const {emailData} = await fetch('https://xn--b1afk4ade.xn--80awjqh.xn--p1ai/email/index.php', {method:"POST", body:imageSrc.value[0]})
                    .then(response => {
                        if (response.ok) return response;
                        else throw Error(`Server returned ${response.status}: ${response.statusText}`)
                    })
                    .then(response => console.log(response.text()))
                    .catch(err => {
                        alert(err);
                    });



                this.login(user, this.authRole);

                return data;
            } catch (error) {
                if (error.response) {
                    this.authErrorMsg = error.response.data.detail
                }

                console.log(error);
                return error
            }
        },
        async setUser(data) {
            this.user = data;
            this.authenticated = true;

            this.userProfileId = '';

            try {
                const {data} = await api.get('/user_profile_id?id='+this.user.info.id)
                console.log('user profile id: ', data);

                this.userProfileId = data
            } catch (error) {
                console.log(error);
            };
        },
        async login(user) {
            try {
                await api.post('/token', user, {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then((data) => {
                    this.authErrorMsg = false;
                    console.log('login data', data.data)
                    this.setUser(data.data)
                    this.encemail = btoa(data.data.info.email)
                    this.decemail = atob(this.encemail)
                    return true;
                })

            } catch (error) {
                if (error.response.data) {
                    let ev = error.response.data.detail;
                    ev = ev.replace("200:", "");
                    ev = ev.replace("401:", "");
                    this.authErrorMsg = ev;
                }
                console.log(error);
                return error
            }
            ;
        },
        async logout() {
            this.user = {
                info: {
                    first_name: '',
                    last_name: '',
                    email: ''
                }
            };
            this.authenticated = false;
            this.userdata = {
                info: {
                    first_name: '',
                    last_name: '',
                    email: ''
                }
            };
            this.token = false;
            window.location.href = '/';
        },
        async refreshToken(token) {
            //console.log('store', token.user)
            try {
                const {data} = await api.post('/refresh_token', token)
                this.user = data
            } catch (error) {
                console.log(error);
            };
        },
        async resetSocialsAuth() {
            this.socialsAuth = {
                telegram_id: '',
                vk_id: '',
                is_vk: false,
                is_tg: false,
            }
        },
        async setFormVK(id) {
            this.socialsAuth.is_vk = true;
            this.socialsAuth.vk_id = id;
        },
        async setFormTG(id) {
            this.socialsAuth.is_tg = true;
            this.socialsAuth.telegram_id = id;
        },
        async setCEmail(hash) {
            this.CEmail = hash
        },
        async isSoc() {
            if (this.socialsAuth.is_tg || this.socialsAuth.is_vk) {
                return true;
            } else {
                return false;
            }
        },
        async getSocData() {
            return this.socialsAuth;
        },
        // async isVk() {
        //   return this.socialsAuth.is_vk
        // },
        // async isTg() {
        //   return this.socialsAuth.is_tg
        // }
    },
    persist: {
        storage: persistedState.localStorage,
    },
    getters: {
        authError: (state) => state.authErrorMsg,
        userAuth: (state) => state.user,
        userInfo: (state) => state.user,
        isAuth: (state) => state.authenticated,
        isVk: (state) => {
            return state.socialsAuth.is_vk
        },
        isTg: (state) => {
            return state.socialsAuth.is_tg
        },
    }


});

export const useUsersStoreRefs = () => storeToRefs(useUsersStore());
