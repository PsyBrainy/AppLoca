

const URL_MENSAJES_API = "http://192.168.0.106:8080/mensaje"

const getMensajes = () => {

    return fetch(URL_MENSAJES_API)
    .then((response) => response.json())
}

const saveMensaje = (mensaje) => {

    return fetch(URL_MENSAJES_API, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mensaje),
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
}


export { getMensajes , saveMensaje }