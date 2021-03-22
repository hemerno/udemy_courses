// map
mapboxgl.accessToken =
  'pk.eyJ1IjoiaGVtZXJubyIsImEiOiJjazQ1ZGt4cTMwNWc4M2ZydjQ3ZTE2Mm5zIn0.ORARfzj-L2iSgi9M-mGllg';

const moscow = [48.144937, 11.551311];
const map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/hemerno/ck45dmagd1and1co58fwso2av',
  center: moscow,
  zoom: 10,
});

// Sticky menu opacity
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.8;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// JQuery Smooth Scroll
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
