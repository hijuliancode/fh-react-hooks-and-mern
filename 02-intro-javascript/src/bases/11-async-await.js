const getImagen = async() => {
  try {
    const apiKey = '8UAKyArOV82MyyYExfQcu8wNwm4G7SsI';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();
    const { url } = data.images.original;

    console.log(data)

    const img = document.createElement('img')
    img.src = url;
    document.body.appendChild(img)
  } catch (error) {
    // Manejo del error
    console.log('error => ', error)
  }

}

getImagen()