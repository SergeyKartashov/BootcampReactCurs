const main_url = "https:\\some_url"; /* URL of backend */

export function Fetch(options) {
    return options.data;
    /*return fetch (main_url, {
      headers: {
          'Content-Type': 'application/json; charset=UTF-8'
      },
      ...options
    })*/
}