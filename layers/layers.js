var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VernalPoolsMasterList_1 = new ol.format.GeoJSON();
var features_VernalPoolsMasterList_1 = format_VernalPoolsMasterList_1.readFeatures(json_VernalPoolsMasterList_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VernalPoolsMasterList_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VernalPoolsMasterList_1.addFeatures(features_VernalPoolsMasterList_1);
var lyr_VernalPoolsMasterList_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VernalPoolsMasterList_1, 
                style: style_VernalPoolsMasterList_1,
                interactive: true,
    title: 'Vernal Pools Master List<br />\
    <img src="styles/legend/VernalPoolsMasterList_1_0.png" /> Actual<br />\
    <img src="styles/legend/VernalPoolsMasterList_1_1.png" /> Potential<br />\
    <img src="styles/legend/VernalPoolsMasterList_1_2.png" /> <br />'
        });
var format_AmherstTrails103104_2 = new ol.format.GeoJSON();
var features_AmherstTrails103104_2 = format_AmherstTrails103104_2.readFeatures(json_AmherstTrails103104_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmherstTrails103104_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmherstTrails103104_2.addFeatures(features_AmherstTrails103104_2);
var lyr_AmherstTrails103104_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmherstTrails103104_2, 
                style: style_AmherstTrails103104_2,
                interactive: true,
                title: '<img src="styles/legend/AmherstTrails103104_2.png" /> Amherst Trails 103104'
            });

lyr_OSMStandard_0.setVisible(true);lyr_VernalPoolsMasterList_1.setVisible(true);lyr_AmherstTrails103104_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VernalPoolsMasterList_1,lyr_AmherstTrails103104_2];
lyr_VernalPoolsMasterList_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'NAME': 'NAME', 'STATUS': 'STATUS', });
lyr_AmherstTrails103104_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TRAIL': 'TRAIL', 'TRAILNAME': 'TRAILNAME', 'TRAILSYS': 'TRAILSYS', 'COMMUNITY': 'COMMUNITY', 'MILES': 'MILES', 'BLAZE': 'BLAZE', 'MAINTORG': 'MAINTORG', 'NOTES': 'NOTES', 'PED': 'PED', 'MTNBIKE': 'MTNBIKE', 'ROADBIKE': 'ROADBIKE', 'XCSKI': 'XCSKI', 'SNOWSHOE': 'SNOWSHOE', 'SNOWMBL': 'SNOWMBL', 'ATV': 'ATV', 'JEEP': 'JEEP', 'DIRTBIKE': 'DIRTBIKE', 'HORSE': 'HORSE', 'PADDLE': 'PADDLE', 'ICESKATE': 'ICESKATE', 'PAVED': 'PAVED', 'GROOMED': 'GROOMED', 'ADA': 'ADA', 'WIDE': 'WIDE', 'SEP_PATH': 'SEP_PATH', 'ALPINESKI': 'ALPINESKI', 'ACCURACY': 'ACCURACY', 'MAPURL': 'MAPURL', 'Z_Min': 'Z_Min', 'Z_Max': 'Z_Max', 'Z_Mean': 'Z_Mean', 'SLength': 'SLength', 'Min_Slope': 'Min_Slope', 'Max_Slope': 'Max_Slope', 'Avg_Slope': 'Avg_Slope', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_VernalPoolsMasterList_1.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'NAME': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_AmherstTrails103104_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'TRAIL': 'TextEdit', 'TRAILNAME': 'TextEdit', 'TRAILSYS': 'TextEdit', 'COMMUNITY': 'TextEdit', 'MILES': 'TextEdit', 'BLAZE': 'TextEdit', 'MAINTORG': 'TextEdit', 'NOTES': 'TextEdit', 'PED': 'TextEdit', 'MTNBIKE': 'TextEdit', 'ROADBIKE': 'TextEdit', 'XCSKI': 'TextEdit', 'SNOWSHOE': 'TextEdit', 'SNOWMBL': 'TextEdit', 'ATV': 'TextEdit', 'JEEP': 'TextEdit', 'DIRTBIKE': 'TextEdit', 'HORSE': 'TextEdit', 'PADDLE': 'TextEdit', 'ICESKATE': 'TextEdit', 'PAVED': 'TextEdit', 'GROOMED': 'TextEdit', 'ADA': 'TextEdit', 'WIDE': 'TextEdit', 'SEP_PATH': 'TextEdit', 'ALPINESKI': 'TextEdit', 'ACCURACY': 'Range', 'MAPURL': 'TextEdit', 'Z_Min': 'TextEdit', 'Z_Max': 'TextEdit', 'Z_Mean': 'TextEdit', 'SLength': 'TextEdit', 'Min_Slope': 'TextEdit', 'Max_Slope': 'TextEdit', 'Avg_Slope': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_VernalPoolsMasterList_1.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'NAME': 'inline label', 'STATUS': 'inline label', });
lyr_AmherstTrails103104_2.set('fieldLabels', {'OBJECTID': 'no label', 'TRAIL': 'no label', 'TRAILNAME': 'inline label', 'TRAILSYS': 'no label', 'COMMUNITY': 'no label', 'MILES': 'no label', 'BLAZE': 'no label', 'MAINTORG': 'no label', 'NOTES': 'no label', 'PED': 'no label', 'MTNBIKE': 'no label', 'ROADBIKE': 'no label', 'XCSKI': 'no label', 'SNOWSHOE': 'no label', 'SNOWMBL': 'no label', 'ATV': 'no label', 'JEEP': 'no label', 'DIRTBIKE': 'no label', 'HORSE': 'no label', 'PADDLE': 'no label', 'ICESKATE': 'no label', 'PAVED': 'no label', 'GROOMED': 'no label', 'ADA': 'no label', 'WIDE': 'no label', 'SEP_PATH': 'no label', 'ALPINESKI': 'no label', 'ACCURACY': 'no label', 'MAPURL': 'no label', 'Z_Min': 'no label', 'Z_Max': 'no label', 'Z_Mean': 'no label', 'SLength': 'no label', 'Min_Slope': 'no label', 'Max_Slope': 'inline label', 'Avg_Slope': 'no label', 'SHAPE_Leng': 'no label', });
lyr_AmherstTrails103104_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});