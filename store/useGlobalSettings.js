import { defineStore } from 'pinia';
import api from '@/api/api'

export const useGlobalSettings = defineStore('settings', {
    state: () => ({
        settings: {
            jobs: [],
            ships: [],
            contract_duration: [],
            sailorTariffs: [],
            companyTariffs: [],
        },
        afNotification: {
            title: '',
            desc: '',
            show: false
        },
        currentVacancy: '',
        currentShip: {
            dwt: "-",
            imo: "-",
            kw: "-",
            length: "-",
            ship_type: "-",
            vessel_name: "-",
            width: "-",
            year_built: "-",
            _id: ""
        }
    }),
    actions: {
        async getJobs() {
            const response = await api.get('/available-jobs')
            this.settings.jobs = response.data.data[0].option_values;
            return response.data
        },
        async getShipTypes() {
            const response = await api.get('/ship-types')
            this.settings.ships = response.data.data[0].option_values;
        },
        async getContractDuration() {
            const response = await api.get('/contract-duration')
            this.settings.contract_duration = response.data.data[0].option_values;
        },
        async getSailorTariffs() {
            const response = await api.get('/tariffs/sailor')
            this.settings.sailorTariffs = response.data.data;
        },
        async getCompanyTariffs() {
            const response = await api.get('/tariffs/company')
            this.settings.companyTariffs = response.data.data;
        },
        async setCurrentShip(data) {
            this.currentShip = data
        },
        async setCurrentVacancy(id) {
            this.currentVacancy = id
        },
        async setAfNotification(title, desc, show) {
            this.afNotification = {
                title: title,
                desc: desc,
                show: show
            }
        }
    },
    getters: {
        getCurrentShip: (state) => state.currentShip,
        getAfShips: (state) => state.settings.ships,
        getAfJobs: (state) => state.settings.jobs,
        getAfContractDuration: (state) => state.settings.contract_duration,
        getAfSailorTariffs: (state) => state.settings.sailorTariffs,
        getAfCompanyTariffs: (state) => state.settings.companyTariffs,
        getAfNotification: (state) => state.settings.afNotification,
    }


});

export const useGlobalSettingsRefs = () => storeToRefs(useGlobalSettings());
