<template>
  <transition name="fade">
    <div :class="{'modal' : !isCurrentOpen , 'modal-open': isCurrentOpen}" v-if="isCurrentOpen">
      <div class="modal__backdrop" @click="close"/>

      <div class="modal__dialog">
        <div class="modal__header">
          <h3>{{labelModal}}</h3>
          <i class="bx bx-x bx-lg modal__close" @click="closeModal"> </i>
        </div>

        <div class="modal__body">
          <slot name="body"/>
        </div>

        <div class="modal__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
//TODO: Import data from store
import BaseButton from '../BaseButton';
import { createNamespacedHelpers } from "vuex";
const {
    mapGetters: mapGettersEditorModal,
    mapActions: mapActionsEditorModal
} = createNamespacedHelpers("editorModal");

export default {
    name: "Modal",
    components: {
        BaseButton
    },
    props:{
      labelModal:{
        type:String,
        required:true,
      }
    },
    computed: {
        ...mapGettersEditorModal(["isCurrentOpen"])
    },
    methods: {
        ...mapActionsEditorModal([
            "openModal",
            "closeModal",
            "setEditor",
            "updateEditor"
        ]),
        openModal(payload){
          document.querySelector("body").classList.add("overflow-hidden");
          this.openModal();
          this.setEditor(payload);
        },
        close(){
            document.querySelector("body").classList.remove("overflow-hidden");
            this.closeModal();
        },

        //TODO: Save data to DB Async
        //TODO: Cancel Button
    }
};
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  &-open{
    display: flex;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
  }
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index:3;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
    margin:1rem;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>