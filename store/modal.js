import { defineStore } from 'pinia';

export const useModalStore = defineStore('global/modal', {
  state: () => ({
    modals: {
      lk: false,
      menu: false,
      company: false,
      seilor: false,
      authCompany: false,
      authSeilor: false,
      existingship: false,
      newship: false,
      shipinfo: false,
      errorReporting: false,
      modalResponse: false,
      approveemail: false,
      approvetg: false,
      approvevk: false,
      changepassword: false,
      modalSeilorRegLogin: false,
      modalAuthVerify: false,
      commonmodal: false,
      commonmodalmsg: '',
      msocwhois: false,
      shipinfodefault: false,
      afnotifications: false,
      afnotificationsmsg: {
        title: '',
        desc: ''
      }
    },
  }),
  actions: {
    toggleModal(modalName) {
      if (this.modals.hasOwnProperty(modalName)) {
        this.modals[modalName] = !this.modals[modalName];
      }
    },
    closeModal(modalName) {
      if (this.modals.hasOwnProperty(modalName)) {
        this.modals[modalName] = false;
      }
    },
    openModal(modalName) {
      if (this.modals.hasOwnProperty(modalName)) {
        this.modals[modalName] = true;
      }
    },
    openModalCommon(msg) {
      this.modals.commonmodalmsg = msg.replace("200:", "");
      this.modals.commonmodalmsg = msg.replace("401:", "");
      this.modals.commonmodal = true;
    },
    openModalAfNotifications(title, desc) {
      this.modals.afnotificationsmsg = {
        title: title,
        desc: desc
      }
      this.modals.afnotifications = true;
      return '2222222222222222222';
    },
    removeAllModals() {
      Object.keys(this.modals).forEach((key) => {
        this.modals[key] = false;
      });
    }
  },
});

export const useModalStoreRefs = () => storeToRefs(useModalStore());
