function createOptionsWithMethod(method, body) {
  const token = localStorage.getItem('session');
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
}

export function fetchJSON(url) {
  return fetch(url)
    .then(res => res.json());
}

export function postJSON(url, body) {
  return fetch(url, createOptionsWithMethod('POST', body))
    .then(res => res.json());
}

export function deleteJSON(url, body) {
  return fetch(url, createOptionsWithMethod('DELETE', body))
    .then(res => res.json());
}
