var wms_layers = [];


        var lyr_XYZLayer_0 = new ol.layer.Tile({
            'title': 'XYZ Layer',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}@2x.png'
            })
        });
var format_CO_1 = new ol.format.GeoJSON();
var features_CO_1 = format_CO_1.readFeatures(json_CO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CO_1.addFeatures(features_CO_1);
var lyr_CO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CO_1, 
                style: style_CO_1,
                popuplayertitle: "CO",
                interactive: true,
                title: '<img src="styles/legend/CO_1.png" /> CO'
            });
var format_IA_2 = new ol.format.GeoJSON();
var features_IA_2 = format_IA_2.readFeatures(json_IA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IA_2.addFeatures(features_IA_2);
var lyr_IA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IA_2, 
                style: style_IA_2,
                popuplayertitle: "IA",
                interactive: true,
                title: '<img src="styles/legend/IA_2.png" /> IA'
            });
var format_NH_3 = new ol.format.GeoJSON();
var features_NH_3 = format_NH_3.readFeatures(json_NH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NH_3.addFeatures(features_NH_3);
var lyr_NH_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NH_3, 
                style: style_NH_3,
                popuplayertitle: "NH",
                interactive: true,
                title: '<img src="styles/legend/NH_3.png" /> NH'
            });
var format_VA_4 = new ol.format.GeoJSON();
var features_VA_4 = format_VA_4.readFeatures(json_VA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VA_4.addFeatures(features_VA_4);
var lyr_VA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VA_4, 
                style: style_VA_4,
                popuplayertitle: "VA",
                interactive: true,
                title: '<img src="styles/legend/VA_4.png" /> VA'
            });
var format_MN_5 = new ol.format.GeoJSON();
var features_MN_5 = format_MN_5.readFeatures(json_MN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MN_5.addFeatures(features_MN_5);
var lyr_MN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MN_5, 
                style: style_MN_5,
                popuplayertitle: "MN",
                interactive: true,
                title: '<img src="styles/legend/MN_5.png" /> MN'
            });
var format_ME_6 = new ol.format.GeoJSON();
var features_ME_6 = format_ME_6.readFeatures(json_ME_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ME_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ME_6.addFeatures(features_ME_6);
var lyr_ME_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ME_6, 
                style: style_ME_6,
                popuplayertitle: "ME",
                interactive: true,
                title: '<img src="styles/legend/ME_6.png" /> ME'
            });
var format_MA_7 = new ol.format.GeoJSON();
var features_MA_7 = format_MA_7.readFeatures(json_MA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MA_7.addFeatures(features_MA_7);
var lyr_MA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MA_7, 
                style: style_MA_7,
                popuplayertitle: "MA",
                interactive: true,
                title: '<img src="styles/legend/MA_7.png" /> MA'
            });
var format_WA_8 = new ol.format.GeoJSON();
var features_WA_8 = format_WA_8.readFeatures(json_WA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_8.addFeatures(features_WA_8);
var lyr_WA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_8, 
                style: style_WA_8,
                popuplayertitle: "WA",
                interactive: true,
                title: '<img src="styles/legend/WA_8.png" /> WA'
            });
var format_VT_9 = new ol.format.GeoJSON();
var features_VT_9 = format_VT_9.readFeatures(json_VT_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VT_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VT_9.addFeatures(features_VT_9);
var lyr_VT_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VT_9, 
                style: style_VT_9,
                popuplayertitle: "VT",
                interactive: true,
                title: '<img src="styles/legend/VT_9.png" /> VT'
            });
var format_OR_10 = new ol.format.GeoJSON();
var features_OR_10 = format_OR_10.readFeatures(json_OR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OR_10.addFeatures(features_OR_10);
var lyr_OR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OR_10, 
                style: style_OR_10,
                popuplayertitle: "OR",
                interactive: true,
                title: '<img src="styles/legend/OR_10.png" /> OR'
            });
var format_NE_11 = new ol.format.GeoJSON();
var features_NE_11 = format_NE_11.readFeatures(json_NE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NE_11.addFeatures(features_NE_11);
var lyr_NE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NE_11, 
                style: style_NE_11,
                popuplayertitle: "NE",
                interactive: true,
                title: '<img src="styles/legend/NE_11.png" /> NE'
            });
var format_CA_12 = new ol.format.GeoJSON();
var features_CA_12 = format_CA_12.readFeatures(json_CA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA_12.addFeatures(features_CA_12);
var lyr_CA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CA_12, 
                style: style_CA_12,
                popuplayertitle: "CA",
                interactive: true,
                title: '<img src="styles/legend/CA_12.png" /> CA'
            });
var group_ChrisStates = new ol.layer.Group({
                                layers: [lyr_WA_8,lyr_VT_9,lyr_OR_10,lyr_NE_11,lyr_CA_12,],
                                fold: "open",
                                title: "Chris States"});
var group_JulietStates = new ol.layer.Group({
                                layers: [lyr_VA_4,lyr_MN_5,lyr_ME_6,lyr_MA_7,],
                                fold: "open",
                                title: "Juliet States"});
var group_WestonStates = new ol.layer.Group({
                                layers: [lyr_CO_1,lyr_IA_2,lyr_NH_3,],
                                fold: "open",
                                title: "Weston States"});

lyr_XYZLayer_0.setVisible(true);lyr_CO_1.setVisible(true);lyr_IA_2.setVisible(true);lyr_NH_3.setVisible(true);lyr_VA_4.setVisible(true);lyr_MN_5.setVisible(true);lyr_ME_6.setVisible(true);lyr_MA_7.setVisible(true);lyr_WA_8.setVisible(true);lyr_VT_9.setVisible(true);lyr_OR_10.setVisible(true);lyr_NE_11.setVisible(true);lyr_CA_12.setVisible(true);
var layersList = [lyr_XYZLayer_0,group_WestonStates,group_JulietStates,group_ChrisStates];
lyr_CO_1.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_IA_2.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_NH_3.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_VA_4.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_MN_5.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_ME_6.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_MA_7.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_WA_8.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_VT_9.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_OR_10.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_NE_11.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_CA_12.set('fieldAliases', {'id': 'id', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_CO_1.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_IA_2.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_NH_3.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_VA_4.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_MN_5.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_ME_6.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_MA_7.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_WA_8.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_VT_9.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_OR_10.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_NE_11.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_CA_12.set('fieldImages', {'id': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_CO_1.set('fieldLabels', {'id': 'no label', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_IA_2.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - always visible', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_NH_3.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_VA_4.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_MN_5.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_ME_6.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_MA_7.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_WA_8.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_VT_9.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_OR_10.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_NE_11.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_CA_12.set('fieldLabels', {'id': 'inline label - always visible', 'STUSPS': 'no label', 'NAME': 'header label - visible with data', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_CA_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});