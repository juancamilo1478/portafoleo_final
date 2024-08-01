<template>
    <div class="container-fluid g-0" style="background: red; position: relative;">
      <div v-if="modal"    >
        <Transition name="fade">
          <div class="pop-up" @click="set_Modal" >
            <div class="pop-up-inner" @click.stop>
              <div class="pop-up-close" @click="set_Modal">&times;</div>
              <swiper :slides-per-view="1" :space-between="3" :pagination="{ clickable: true }" :navigation="true">
                <SwiperSlide v-for="photo in data.photos" :key="photo">
                  <img :src="photo" alt="" class="modal-image" />
                </SwiperSlide>
              </swiper>
              <div>
                <h5 class="modal-title title">{{ data.name }}</h5>
                <h5 class="modal-title description_item2">{{ data.framework }}</h5>
                <h5 class="modal-title description_item">{{ data.Description }}</h5>
              </div>
              <div class=" d-flex mt-3 flex-wrap" style="gap: 20px;">
                <button  @click="openLink(data.repositorie_Git)" v-if="data.repositorie_Git != null" type="button" class="btn btn-primary botton_info" ><i class="fa-brands fa-github" style="font-size: 1.4rem;"></i><h4 style="margin: auto;">GitHub</h4></button>
                <button @click="openLink(data.Deploy)"v-if="data.Deploy != null" type="button" class="btn btn-primary botton_info"><i class="fa-regular fa-window-restore" style="font-size: 1.4rem;"></i><h4 style="margin: auto;">App</h4></button>
                <button  @click="openLink(data.video)"v-if="data.video != null" type="button" class="btn btn-primary botton_info" ><i class="fa-brands fa-youtube" style="font-size: 1.4rem;"></i><h4 style="margin: auto;">Video</h4></button>
                <button type="button" class="btn btn-danger" @click="set_Modal">Cerrar</button>
              </div>
        
            </div>
          </div>
        </Transition>
      </div>
      <div class="card_view">
        <div class="container d-flex justify-content-center">
          <div style="margin-top: 20px;">
            <h1 style="text-align: center;">{{ data.name }}</h1>
            <h4 style="text-align: center; color: aqua">{{ data.framework }}</h4>
            <div style="display: flex; margin: 20px auto;" @click="set_Modal">
              <button type="button" class="btn btn-outline-info" style="margin: auto;">
                <h4 class="color_button">Leer más</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img :src="data.photos[0]" style="width: 100%;" />
    </div>
  </template>
  
  <script>
  import 'swiper/swiper-bundle.css';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    name: 'ItemProyect',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        modal: false
      };
    },
    methods: {
      set_Modal() {
        this.modal = !this.modal;
        console.log(this.modal);
      },
      openLink(data){
        window.open(data, '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .pop-up {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    height: 100vh;
    width: 100%;
    place-items: center;
    background: rgba(0, 0, 0, 0.288);
  }
  .botton_info{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .pop-up-close {
    position: absolute;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 10px;
  }
  
  .pop-up-inner {
    z-index: 10;
    position: absolute;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    border-radius: 8px;
    background: white;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 250ms ease-in-out;
  }
  
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  
  .modal-image {
    width: 100%;
    height: auto;
  }
  
  .color_button {
    margin: auto;
    font-size: 0.8rem;
    color: aqua;
    transition: 0.5s;
  }
  
  .color_button:hover {
    color: white;
  }
  
  .description_item {
    font-weight: 400;
    font-size: 0.8rem;
  }
  
  .description_item2 {
    color: rgb(134, 134, 134);
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .card_view {
    opacity: 0;
    background: rgb(253, 253, 253);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  }
  
  .card_view:hover {
    opacity: 1;
    visibility: visible;
  }
  </style>
  