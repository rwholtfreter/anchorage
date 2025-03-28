var wms_layers = [];

var lyr_anchorage_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'anchorage<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/anchorage_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17164419.785001, 8623800.474000, -16100369.712399, 9189973.718100]
        })
    });

lyr_anchorage_0.setVisible(true);
var layersList = [lyr_anchorage_0];
