const headers = {
  "content-type": "application/json",
  accept: "application/json",
};

const authHeader = {};

const host = "";
const JWT_TOKEN = "";

async function handleResponse(p_response) {
  if (p_response.ok) {
    return p_response.json().catch(() => {});
  } else {
    let json = {};
    try {
      json = await p_response.json();
    } catch {}
    const error: any = new Error();
    error.response = p_response;
    error.json = json;
    error.status = p_response.status;
    throw error;
  }
}

const get = (p_route, p_useHost = true, noCache = false) => {
  const newHeaders = headers;

  if (noCache) {
    newHeaders["cache-control"] = "no-cache";
  }

  return fetch(p_useHost ? `${host}` + p_route : p_route, {
    headers: newHeaders,
  }).then((p_response) => handleResponse(p_response));
};

const post = (p_route, p_body, p_useHost = true) => {
  return fetch(p_useHost ? `${host}` + p_route : p_route, {
    headers: headers,
    method: "POST",
    body: JSON.stringify(p_body),
  }).then(async (p_response) => await handleResponse(p_response));
};

const jwtPost = (p_route, p_body, p_useHost = true) => {
  return fetch(p_useHost ? `${host}` + p_route : p_route, {
    headers: { ...headers, ...authHeader, JWT_TOKEN },
    method: "POST",
    body: JSON.stringify(p_body),
  }).then(async (p_response) => await handleResponse(p_response));
};

const jwtPut = (p_route, p_useHost = true) => {
  return fetch(p_useHost ? `${host}` + p_route : p_route, {
    headers: { ...headers, ...authHeader, JWT_TOKEN },
    method: "PUT",
  }).then(async (p_response) => await handleResponse(p_response));
};

const jwtGet = (p_route, p_useHost = true, noCache = false) => {
  const newHeaders = headers;

  if (noCache) {
    newHeaders["cache-control"] = "no-cache";
  }

  return fetch(p_useHost ? `${host}` + p_route : p_route, {
    headers: { ...headers, ...authHeader, JWT_TOKEN },
  }).then((p_response) => handleResponse(p_response));
};

export const api = {
  get,
  post,
  jwtPost,
  jwtGet,
  jwtPut,
};
