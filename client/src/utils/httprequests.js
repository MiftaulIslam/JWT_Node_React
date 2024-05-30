const backendUrl = 'http://localhost:5004/'
export const getRequest = (url) => {
    return fetch(`${backendUrl}${url}`,{method:'GET', credentials:'include'})
      .then(res => res.json())
      .then(res => res)
      .catch(err => console.error(err));
  }
export const postRequest = (url, data) => {
    return fetch(`${backendUrl}${url}`, {
      method: 'POST',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err));
  }