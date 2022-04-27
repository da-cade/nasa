<template>
  <main class="potd" :style="{'background-image': `url(${picture.hdurl})`}">
    <div class="container-fluid">
      <div class="row full-height align-items-center">
        <div class="col-4 d-flex full-height align-items-center">
          <div class="d-flex flex-column justify-content-around full-height">
            <div class="d-flex">
              <h2 class="frosted text-light">{{picture.title}}</h2>
              <p class="frosted text-light">{{picture.date}}</p>
            </div>
            <div class="d-flex">
              <p class="frosted text-light">{{picture.copyright}}</p>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="frosted text-light mb-5">
            <p>{{picture.explanation}}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { pictureService } from "../services/PictureService"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
export default {
  name: 'Home',
  setup(){
    onMounted(() => {
      try {
        pictureService.getPicture()
      } catch (error) {
        logger.log(error)
        Pop.error(error.message, 'error')
      }
    });

    return {
      picture: computed(() => AppState.picture), 
    }
  }
}
</script>

<style scoped lang="scss">
  .potd{
    min-height: 100vh;
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .full-height{
    min-height: 100vh;
  }
  .frosted{
    margin: 2rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.459)
  }
</style>
