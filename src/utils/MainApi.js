class MainApi {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }

  getSearchId() {
    return fetch(`${this.url}/search`, {
      method: 'GET',
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  getTickets(id) {
    return fetch(`${this.url}/tickets?searchId=${id}`, {
      method: 'GET',
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
}

export default new MainApi({
  url: 'https://front-test.beta.aviasales.ru',
  // headers: {
  //   'Content-Type': 'application/json',
  // }
})