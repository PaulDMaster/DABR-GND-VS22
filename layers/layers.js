var wms_layers = [];


        var lyr_OpenStreetMapKarte_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap Karte',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Gemeinden_1 = new ol.format.GeoJSON();
var features_Gemeinden_1 = format_Gemeinden_1.readFeatures(json_Gemeinden_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeinden_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeinden_1.addFeatures(features_Gemeinden_1);
var lyr_Gemeinden_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gemeinden_1, 
                style: style_Gemeinden_1,
                interactive: false,
                title: '<img src="styles/legend/Gemeinden_1.png" /> Gemeinden'
            });
var format_RadwegeUmfrage_2 = new ol.format.GeoJSON();
var features_RadwegeUmfrage_2 = format_RadwegeUmfrage_2.readFeatures(json_RadwegeUmfrage_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadwegeUmfrage_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadwegeUmfrage_2.addFeatures(features_RadwegeUmfrage_2);
var lyr_RadwegeUmfrage_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RadwegeUmfrage_2, 
                style: style_RadwegeUmfrage_2,
                interactive: true,
                title: '<img src="styles/legend/RadwegeUmfrage_2.png" /> Radwege Umfrage'
            });
var format_ErfassteRadwege_3 = new ol.format.GeoJSON();
var features_ErfassteRadwege_3 = format_ErfassteRadwege_3.readFeatures(json_ErfassteRadwege_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ErfassteRadwege_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ErfassteRadwege_3.addFeatures(features_ErfassteRadwege_3);
var lyr_ErfassteRadwege_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ErfassteRadwege_3, 
                style: style_ErfassteRadwege_3,
                interactive: true,
                title: '<img src="styles/legend/ErfassteRadwege_3.png" /> Erfasste Radwege'
            });

lyr_OpenStreetMapKarte_0.setVisible(true);lyr_Gemeinden_1.setVisible(true);lyr_RadwegeUmfrage_2.setVisible(true);lyr_ErfassteRadwege_3.setVisible(true);
var layersList = [lyr_OpenStreetMapKarte_0,lyr_Gemeinden_1,lyr_RadwegeUmfrage_2,lyr_ErfassteRadwege_3];
lyr_Gemeinden_1.set('fieldAliases', {});
lyr_RadwegeUmfrage_2.set('fieldAliases', {'id': 'id', 'Verbindung': 'Verbindung', });
lyr_ErfassteRadwege_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Länge': 'Länge', 'ID_2': 'ID_2', 'Fahrradweg': 'Fahrradweg', 'Radwegbreite': 'Radwegbreite', 'Verkehrsart': 'Verkehrsart', 'Beschilderung': 'Beschilderung', 'Abstand Autot.': 'Abstand Autot.', 'Netzanbindung': 'Netzanbindung', 'Zustand_2': 'Zustand_2', 'Sicherheit': 'Sicherheit', 'Laternen': 'Laternen', 'Anmerkungen': 'Anmerkungen', 'Oberflaechenqualitaet': 'Oberflaechenqualitaet', });
lyr_Gemeinden_1.set('fieldImages', {});
lyr_RadwegeUmfrage_2.set('fieldImages', {'id': 'TextEdit', 'Verbindung': 'TextEdit', });
lyr_ErfassteRadwege_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Länge': 'TextEdit', 'ID_2': 'Range', 'Fahrradweg': 'TextEdit', 'Radwegbreite': 'TextEdit', 'Verkehrsart': 'Range', 'Beschilderung': 'Range', 'Abstand Autot.': 'TextEdit', 'Netzanbindung': 'Range', 'Zustand_2': 'Range', 'Sicherheit': 'TextEdit', 'Laternen': 'TextEdit', 'Anmerkungen': 'TextEdit', 'Oberflaechenqualitaet': 'TextEdit', });
lyr_Gemeinden_1.set('fieldLabels', {});
lyr_RadwegeUmfrage_2.set('fieldLabels', {'id': 'no label', 'Verbindung': 'no label', });
lyr_ErfassteRadwege_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Länge': 'inline label', 'ID_2': 'no label', 'Fahrradweg': 'inline label', 'Radwegbreite': 'inline label', 'Verkehrsart': 'inline label', 'Beschilderung': 'inline label', 'Abstand Autot.': 'inline label', 'Netzanbindung': 'inline label', 'Zustand_2': 'inline label', 'Sicherheit': 'inline label', 'Laternen': 'inline label', 'Anmerkungen': 'inline label', 'Oberflaechenqualitaet': 'inline label', });
lyr_ErfassteRadwege_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});