<template>
    <div id="middle">
        <div id="rotation_chart">
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :loop="true"
                    :pagination="{
                        clickable: true,
                    }"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="mySwiper"
                >
                <swiper-slide>
                    <div class="pictures">
                        <img src="../assets/img/1.png" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="pictures">
                        <img src="../assets/img/2.png" alt="">
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="pictures">
                        <img src="../assets/img/3.png" alt="">
                    </div>
                </swiper-slide>
                
            </swiper>
        </div>
    </div>
    <!-- <div id="content">hello!I'm page of homeView...</div> -->

</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style scoped>

.pictures {
    padding: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

}

.pictures img {
    width: 60%;
    height: auto;
}

#rotation_chart {
    margin: auto;
    width: 80%;
    height: auto;
    /* display: flex; */
    /* flex-direction: column; */
    align-items: center;
}

#middle {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
    /* background-image: linear-gradient(gray,white); */
    background-color: white;
}

#logo {
    width:60%;
    height:auto;
    display:flex;
    justify-items: center;
    margin: 5px;
    flex-direction:column;
    vertical-align: center;
    align-items:center;
}

#content {
    display: flex;
    margin-top: 0;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

</style>