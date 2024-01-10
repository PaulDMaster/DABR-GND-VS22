var wms_layers = [];

var lyr_DigitaleTopographischeKarte125000Farbe_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://isk.geobasis-bb.de/mapproxy/dtk25farbe/service/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "bb_dtk25_farbe",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Digitale Topographische Karte 1:25 000 Farbe",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DigitaleTopographischeKarte125000Farbe_0, 0]);
var lyr_DigitaleRegionalkarte1100000_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://isk.geobasis-bb.de/mapproxy/rk100/service/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "rk100",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Digitale Regionalkarte 1:100 000",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DigitaleRegionalkarte1100000_1, 0]);

        var lyr_OpenStreetMapKarte_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap Karte',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gemeinden_3 = new ol.format.GeoJSON();
var features_Gemeinden_3 = format_Gemeinden_3.readFeatures(json_Gemeinden_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeinden_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeinden_3.addFeatures(features_Gemeinden_3);
var lyr_Gemeinden_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gemeinden_3, 
                style: style_Gemeinden_3,
                interactive: false,
                title: '<img src="styles/legend/Gemeinden_3.png" /> Gemeinden'
            });
var format_RadwegeUmfrage_4 = new ol.format.GeoJSON();
var features_RadwegeUmfrage_4 = format_RadwegeUmfrage_4.readFeatures(json_RadwegeUmfrage_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadwegeUmfrage_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadwegeUmfrage_4.addFeatures(features_RadwegeUmfrage_4);
var lyr_RadwegeUmfrage_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RadwegeUmfrage_4, 
                style: style_RadwegeUmfrage_4,
                interactive: true,
                title: '<img src="styles/legend/RadwegeUmfrage_4.png" /> Radwege Umfrage'
            });
var format_ErfassteRadwege_5 = new ol.format.GeoJSON();
var features_ErfassteRadwege_5 = format_ErfassteRadwege_5.readFeatures(json_ErfassteRadwege_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErfassteRadwege_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErfassteRadwege_5.addFeatures(features_ErfassteRadwege_5);
var lyr_ErfassteRadwege_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ErfassteRadwege_5, 
                style: style_ErfassteRadwege_5,
                interactive: true,
                title: '<img src="styles/legend/ErfassteRadwege_5.png" /> Erfasste Radwege'
            });

lyr_DigitaleTopographischeKarte125000Farbe_0.setVisible(true);lyr_DigitaleRegionalkarte1100000_1.setVisible(true);lyr_OpenStreetMapKarte_2.setVisible(true);lyr_Gemeinden_3.setVisible(true);lyr_RadwegeUmfrage_4.setVisible(true);lyr_ErfassteRadwege_5.setVisible(true);
var layersList = [lyr_DigitaleTopographischeKarte125000Farbe_0,lyr_DigitaleRegionalkarte1100000_1,lyr_OpenStreetMapKarte_2,lyr_Gemeinden_3,lyr_RadwegeUmfrage_4,lyr_ErfassteRadwege_5];
lyr_Gemeinden_3.set('fieldAliases', {});
lyr_RadwegeUmfrage_4.set('fieldAliases', {'id': 'id', 'Verbindung': 'Verbindung', });
lyr_ErfassteRadwege_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Länge': 'Länge', 'ID_2': 'ID_2', 'Fahrradweg': 'Fahrradweg', 'Radwegbreite': 'Radwegbreite', 'Verkehrsart': 'Verkehrsart', 'Beschilderung': 'Beschilderung', 'Abstand Autot.': 'Abstand Autot.', 'Netzanbindung': 'Netzanbindung', 'Sicherheit': 'Sicherheit', 'Laternen': 'Laternen', 'Anmerkungen': 'Anmerkungen', 'Oberflaechenqualitaet': 'Oberflaechenqualitaet', 'Zustand': 'Zustand', });
lyr_Gemeinden_3.set('fieldImages', {});
lyr_RadwegeUmfrage_4.set('fieldImages', {'id': 'TextEdit', 'Verbindung': 'TextEdit', });
lyr_ErfassteRadwege_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Länge': 'TextEdit', 'ID_2': 'Range', 'Fahrradweg': 'TextEdit', 'Radwegbreite': 'TextEdit', 'Verkehrsart': 'Range', 'Beschilderung': 'Range', 'Abstand Autot.': 'TextEdit', 'Netzanbindung': 'Range', 'Sicherheit': 'TextEdit', 'Laternen': 'TextEdit', 'Anmerkungen': 'TextEdit', 'Oberflaechenqualitaet': 'TextEdit', 'Zustand': '', });
lyr_Gemeinden_3.set('fieldLabels', {});
lyr_RadwegeUmfrage_4.set('fieldLabels', {'id': 'no label', 'Verbindung': 'no label', });
lyr_ErfassteRadwege_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Länge': 'inline label', 'ID_2': 'no label', 'Fahrradweg': 'inline label', 'Radwegbreite': 'inline label', 'Verkehrsart': 'inline label', 'Beschilderung': 'inline label', 'Abstand Autot.': 'inline label', 'Netzanbindung': 'inline label', 'Sicherheit': 'inline label', 'Laternen': 'inline label', 'Anmerkungen': 'inline label', 'Oberflaechenqualitaet': 'inline label', 'Zustand': 'inline label', });
lyr_ErfassteRadwege_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});