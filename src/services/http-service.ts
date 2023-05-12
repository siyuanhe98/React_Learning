import apiClient from './api-client'
// generic HTTP service

interface Entity {
  id: number
}

class HttpService {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll<T>() {
    const controller = new AbortController()
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    })
    // When we send HTTP requests with the effect hook, we should provide a clean-up function to cancel the request
    // if the component is unmounted before the response is received. This is important to prevent errors,
    // especially if the user navigates to a different page while the request is still pending.
    return { request, cancel: () => controller.abort() }
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + '/' + id)
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity)
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + '/' + entity.id, entity)
  }
}

const create = (endpoint: string) => new HttpService(endpoint)

export default create
