var map = new ol.Map({
  target: document.getElementById('map'),
  controls: ol.control.defaults({
    attribution: false,
    logo: false,
    zoom: false
  }),
  layers: [
    new ol.layer.TileLayer({
      id: 'standard',
      visible: true,
      source: new ol.source.OSM()
    }),
    new ol.layer.TileLayer({
      id: 'cycle',
      visible: false,
      source: new ol.source.OSM({
        url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
      })
    }),
    new ol.layer.TileLayer({
      id: 'transport',
      visible: false,
      source: new ol.source.OSM({
        url: 'http://{a-c}.tile.opencyclemap.org/transport/{z}/{x}/{y}.png'
      })
    }),
    new ol.layer.TileLayer({
      id: 'mapquest',
      visible: false,
      source: new ol.source.MapQuestOSM()
    })
  ],
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});

var view = map.getView();

// var geolocation = new ol.Geolocation({
//   tracking: false
// });

// geolocation.on('tracking_changed', function() {
//   // FIXME: check errors
//   if (this.getTracking()) {
//     $('.ol-location').addClass('tracking');
//   } else {
//     $('.ol-location').removeClass('tracking');
//   }
// });
// geolocation.on('position_changed', function() {
//   map.addPreRenderFunction(ol.animation.pan({
//     duration: 1000,
//     source: view.getCenter()
//   }));
//   view.setCenter(geolocation.getPosition());
//   // FIXME: zoom if needed
//   view.once('center_changed', function() {
//     geolocation.setTracking(false);
//   });
// });

// geolocation.bindTo('projection', view);
// $('.ol-location').click(function() {
//   geolocation.setTracking(!geolocation.getTracking());
// });

// // $(map.getTarget()).find('[data-ol-control]').each(function() {
// //   var control = $(this).data('ol-control');
// // });
