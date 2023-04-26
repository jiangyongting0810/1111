import { AxiosResponse } from "axios";
import { http } from "./Http"

export let mePromise:Promise<AxiosResponse<{
  resourece: {
      id: number;
  };
}>>| undefined

export const refreshMe = () => {
  mePromise = http.get<{resourece:{id:number}}>('/me')
  return mePromise
}

export const fetchMe = refreshMe