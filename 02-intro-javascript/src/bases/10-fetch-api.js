
const apiKey = '8UAKyArOV82MyyYExfQcu8wNwm4G7SsI'

const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

httpCall
  .then( resp => resp.json())
  .then( ({ data }) => {
    const { url } = data.images.original;
    console.log( url )

    const img = document.createElement('img')
    img.src = url;

    document.body.appendChild(img)

  })
  .catch( console.warn );

