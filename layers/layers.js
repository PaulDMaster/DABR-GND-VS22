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

        var lyr_XYZLayer_2 = new ol.layer.Tile({
            'title': 'XYZ-Layer',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_waldsiedlungfreifl_3 = new ol.format.GeoJSON();
var features_waldsiedlungfreifl_3 = format_waldsiedlungfreifl_3.readFeatures(json_waldsiedlungfreifl_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waldsiedlungfreifl_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waldsiedlungfreifl_3.addFeatures(features_waldsiedlungfreifl_3);
var lyr_waldsiedlungfreifl_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waldsiedlungfreifl_3, 
                style: style_waldsiedlungfreifl_3,
                interactive: true,
    title: 'wald+siedlung+freifl<br />\
    <img src="styles/legend/waldsiedlungfreifl_3_0.png" /> forest<br />\
    <img src="styles/legend/waldsiedlungfreifl_3_1.png" /> freiflaeche<br />\
    <img src="styles/legend/waldsiedlungfreifl_3_2.png" /> siedlung<br />\
    <img src="styles/legend/waldsiedlungfreifl_3_3.png" /> <br />'
        });
var format_Gemeinden_4 = new ol.format.GeoJSON();
var features_Gemeinden_4 = format_Gemeinden_4.readFeatures(json_Gemeinden_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeinden_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeinden_4.addFeatures(features_Gemeinden_4);
var lyr_Gemeinden_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gemeinden_4, 
                style: style_Gemeinden_4,
                interactive: true,
                title: '<img src="styles/legend/Gemeinden_4.png" /> Gemeinden'
            });
var format_waldsiedlungfreifl_5 = new ol.format.GeoJSON();
var features_waldsiedlungfreifl_5 = format_waldsiedlungfreifl_5.readFeatures(json_waldsiedlungfreifl_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waldsiedlungfreifl_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waldsiedlungfreifl_5.addFeatures(features_waldsiedlungfreifl_5);
var lyr_waldsiedlungfreifl_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waldsiedlungfreifl_5, 
                style: style_waldsiedlungfreifl_5,
                interactive: true,
    title: 'wald+siedlung+freifl<br />\
    <img src="styles/legend/waldsiedlungfreifl_5_0.png" /> forest<br />\
    <img src="styles/legend/waldsiedlungfreifl_5_1.png" /> freiflaeche<br />\
    <img src="styles/legend/waldsiedlungfreifl_5_2.png" /> siedlung<br />\
    <img src="styles/legend/waldsiedlungfreifl_5_3.png" /> <br />'
        });
var format_Gemeinden_6 = new ol.format.GeoJSON();
var features_Gemeinden_6 = format_Gemeinden_6.readFeatures(json_Gemeinden_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeinden_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeinden_6.addFeatures(features_Gemeinden_6);
var lyr_Gemeinden_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gemeinden_6, 
                style: style_Gemeinden_6,
                interactive: true,
                title: '<img src="styles/legend/Gemeinden_6.png" /> Gemeinden'
            });
var format_Strassen_7 = new ol.format.GeoJSON();
var features_Strassen_7 = format_Strassen_7.readFeatures(json_Strassen_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strassen_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strassen_7.addFeatures(features_Strassen_7);
var lyr_Strassen_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Strassen_7, 
                style: style_Strassen_7,
                interactive: true,
                title: '<img src="styles/legend/Strassen_7.png" /> Strassen'
            });
var format_FahrradwegeNeustadt_8 = new ol.format.GeoJSON();
var features_FahrradwegeNeustadt_8 = format_FahrradwegeNeustadt_8.readFeatures(json_FahrradwegeNeustadt_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FahrradwegeNeustadt_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FahrradwegeNeustadt_8.addFeatures(features_FahrradwegeNeustadt_8);
var lyr_FahrradwegeNeustadt_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FahrradwegeNeustadt_8, 
                style: style_FahrradwegeNeustadt_8,
                interactive: true,
                title: '<img src="styles/legend/FahrradwegeNeustadt_8.png" /> Fahrradwege Neustadt'
            });
var format_RadwegeUmfrage_9 = new ol.format.GeoJSON();
var features_RadwegeUmfrage_9 = format_RadwegeUmfrage_9.readFeatures(json_RadwegeUmfrage_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadwegeUmfrage_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadwegeUmfrage_9.addFeatures(features_RadwegeUmfrage_9);
var lyr_RadwegeUmfrage_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RadwegeUmfrage_9, 
                style: style_RadwegeUmfrage_9,
                interactive: true,
                title: '<img src="styles/legend/RadwegeUmfrage_9.png" /> Radwege Umfrage'
            });
var format_ZusammengefassterLayer_10 = new ol.format.GeoJSON();
var features_ZusammengefassterLayer_10 = format_ZusammengefassterLayer_10.readFeatures(json_ZusammengefassterLayer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZusammengefassterLayer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZusammengefassterLayer_10.addFeatures(features_ZusammengefassterLayer_10);
var lyr_ZusammengefassterLayer_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZusammengefassterLayer_10, 
                style: style_ZusammengefassterLayer_10,
                interactive: true,
                title: '<img src="styles/legend/ZusammengefassterLayer_10.png" /> Zusammengefasster Layer'
            });
var group_Strassen = new ol.layer.Group({
                                layers: [lyr_Strassen_7,lyr_FahrradwegeNeustadt_8,lyr_RadwegeUmfrage_9,],
                                title: "Strassen"});
var group_Karten = new ol.layer.Group({
                                layers: [lyr_DigitaleTopographischeKarte125000Farbe_0,lyr_DigitaleRegionalkarte1100000_1,lyr_XYZLayer_2,lyr_waldsiedlungfreifl_5,lyr_Gemeinden_6,],
                                title: "Karten"});

lyr_DigitaleTopographischeKarte125000Farbe_0.setVisible(true);lyr_DigitaleRegionalkarte1100000_1.setVisible(true);lyr_XYZLayer_2.setVisible(true);lyr_waldsiedlungfreifl_3.setVisible(true);lyr_Gemeinden_4.setVisible(true);lyr_waldsiedlungfreifl_5.setVisible(true);lyr_Gemeinden_6.setVisible(true);lyr_Strassen_7.setVisible(true);lyr_FahrradwegeNeustadt_8.setVisible(true);lyr_RadwegeUmfrage_9.setVisible(true);lyr_ZusammengefassterLayer_10.setVisible(true);
var layersList = [group_Karten,group_Strassen,lyr_ZusammengefassterLayer_10];
lyr_waldsiedlungfreifl_3.set('fieldAliases', {'LANDUSE': 'LANDUSE', 'COUNT': 'COUNT', 'ID': 'ID', });
lyr_Gemeinden_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEMTEXT': 'GEMTEXT', 'KREISTEXT': 'KREISTEXT', 'Fl_ha': 'Fl_ha', });
lyr_waldsiedlungfreifl_5.set('fieldAliases', {'LANDUSE': 'LANDUSE', 'COUNT': 'COUNT', 'ID': 'ID', });
lyr_Gemeinden_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEMTEXT': 'GEMTEXT', 'KREISTEXT': 'KREISTEXT', 'Fl_ha': 'Fl_ha', });
lyr_Strassen_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WDM': 'WDM', 'Shape_Leng': 'Shape_Leng', 'Quelle': 'Quelle', 'path': 'path', 'Code': 'Code', 'Strassenna': 'Strassenna', 'Laengen-Ha': 'Laengen-Ha', 'Seitenarme': 'Seitenarme', 'Ursprung-L': 'Ursprung-L', 'Kontrolle': 'Kontrolle', 'Datum': 'Datum', 'Schaden': 'Schaden', 'Art': 'Art', 'Code-Neu': 'Code-Neu', 'QGIS-Laeng': 'QGIS-Laeng', });
lyr_FahrradwegeNeustadt_8.set('fieldAliases', {'id': 'id', 'Länge': 'Länge', 'Belag': 'Belag', 'Beleuchtun': 'Beleuchtun', 'AbstandFB': 'AbstandFB', 'Breite': 'Breite', 'Verkehrmix': 'Verkehrmix', 'Netzbind': 'Netzbind', 'Sichherhei': 'Sichherhei', 'Zustand': 'Zustand', 'Schilder': 'Schilder', });
lyr_RadwegeUmfrage_9.set('fieldAliases', {'id': 'id', });
lyr_ZusammengefassterLayer_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Länge': 'Länge', 'ID_2': 'ID_2', 'Fahrradweg': 'Fahrradweg', 'Oberfl�chenquali': 'Oberfl�chenquali', 'Radwegbreite': 'Radwegbreite', 'Verkehrsart': 'Verkehrsart', 'Beschilderung': 'Beschilderung', 'Abstand Autot.': 'Abstand Autot.', 'Netzanbindung': 'Netzanbindung', 'Zustand_2': 'Zustand_2', 'Sicherheit': 'Sicherheit', 'Laternen': 'Laternen', 'Anmerkungen': 'Anmerkungen', });
lyr_waldsiedlungfreifl_3.set('fieldImages', {'LANDUSE': 'TextEdit', 'COUNT': 'TextEdit', 'ID': 'Range', });
lyr_Gemeinden_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'GEMTEXT': 'TextEdit', 'KREISTEXT': 'TextEdit', 'Fl_ha': 'TextEdit', });
lyr_waldsiedlungfreifl_5.set('fieldImages', {'LANDUSE': 'TextEdit', 'COUNT': 'TextEdit', 'ID': 'Range', });
lyr_Gemeinden_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'GEMTEXT': 'TextEdit', 'KREISTEXT': 'TextEdit', 'Fl_ha': 'TextEdit', });
lyr_Strassen_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'WDM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Quelle': 'TextEdit', 'path': 'TextEdit', 'Code': 'TextEdit', 'Strassenna': 'TextEdit', 'Laengen-Ha': 'TextEdit', 'Seitenarme': 'TextEdit', 'Ursprung-L': 'TextEdit', 'Kontrolle': 'CheckBox', 'Datum': 'DateTime', 'Schaden': 'CheckBox', 'Art': 'ValueMap', 'Code-Neu': 'TextEdit', 'QGIS-Laeng': 'Range', });
lyr_FahrradwegeNeustadt_8.set('fieldImages', {'id': 'TextEdit', 'Länge': '', 'Belag': '', 'Beleuchtun': '', 'AbstandFB': '', 'Breite': '', 'Verkehrmix': '', 'Netzbind': '', 'Sichherhei': '', 'Zustand': '', 'Schilder': '', });
lyr_RadwegeUmfrage_9.set('fieldImages', {'id': 'TextEdit', });
lyr_ZusammengefassterLayer_10.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Länge': 'TextEdit', 'ID_2': 'Range', 'Fahrradweg': 'TextEdit', 'Oberfl�chenquali': 'TextEdit', 'Radwegbreite': 'TextEdit', 'Verkehrsart': 'Range', 'Beschilderung': 'Range', 'Abstand Autot.': 'TextEdit', 'Netzanbindung': 'Range', 'Zustand_2': 'Range', 'Sicherheit': 'TextEdit', 'Laternen': 'TextEdit', 'Anmerkungen': 'TextEdit', });
lyr_waldsiedlungfreifl_3.set('fieldLabels', {});
lyr_Gemeinden_4.set('fieldLabels', {});
lyr_waldsiedlungfreifl_5.set('fieldLabels', {});
lyr_Gemeinden_6.set('fieldLabels', {});
lyr_Strassen_7.set('fieldLabels', {});
lyr_FahrradwegeNeustadt_8.set('fieldLabels', {});
lyr_RadwegeUmfrage_9.set('fieldLabels', {});
lyr_ZusammengefassterLayer_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Länge': 'no label', 'ID_2': 'no label', 'Fahrradweg': 'no label', 'Oberfl�chenquali': 'no label', 'Radwegbreite': 'no label', 'Verkehrsart': 'no label', 'Beschilderung': 'no label', 'Abstand Autot.': 'no label', 'Netzanbindung': 'no label', 'Zustand_2': 'no label', 'Sicherheit': 'no label', 'Laternen': 'no label', 'Anmerkungen': 'no label', });
lyr_ZusammengefassterLayer_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});