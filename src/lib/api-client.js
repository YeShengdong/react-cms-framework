/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import enableMock from '../mock';

class ApiClient {
  constructor() {
    this.baseURL = 'https://some-domain.com/api/';
    this.initAxiosInstance();
    enableMock({ baseURL: this.baseURL, timeout: 600 });
  }

  initAxiosInstance() {
    const api = axios.create({
      baseURL: this.baseURL,
    });

    api.interceptors.request.use((config) => {
      //
      return config;
    }, (error) => {
      //
      return Promise.reject(error);
    });

    api.interceptors.response.use((response) => {
      //
      return response;
    }, (error) => {
      //
      return Promise.reject(error);
    });

    this.api = api;
  }

  get(options) {
    options.method = 'get';
    return this.request(options);
  }

  post(options) {
    options.method = 'post';
    return this.request(options);
  }

  request(options) {
    return this.api(options);
  }
}

export default new ApiClient();
export {
  ApiClient,
};
