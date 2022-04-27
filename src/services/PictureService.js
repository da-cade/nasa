import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";


class PictureService {

  async getPicture(){
    const res = await api.get('')
    logger.log(res.data)
    AppState.picture = res.data
  }
}

export const pictureService = new PictureService();