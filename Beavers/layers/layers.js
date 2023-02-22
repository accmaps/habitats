var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AmherstConservationLands_2 = new ol.format.GeoJSON();
var features_AmherstConservationLands_2 = format_AmherstConservationLands_2.readFeatures(json_AmherstConservationLands_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmherstConservationLands_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmherstConservationLands_2.addFeatures(features_AmherstConservationLands_2);
var lyr_AmherstConservationLands_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmherstConservationLands_2, 
                style: style_AmherstConservationLands_2,
                interactive: true,
                title: '<img src="styles/legend/AmherstConservationLands_2.png" /> Amherst Conservation Lands'
            });
var format_WetMeadowsShrublands_3 = new ol.format.GeoJSON();
var features_WetMeadowsShrublands_3 = format_WetMeadowsShrublands_3.readFeatures(json_WetMeadowsShrublands_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WetMeadowsShrublands_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WetMeadowsShrublands_3.addFeatures(features_WetMeadowsShrublands_3);
var lyr_WetMeadowsShrublands_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WetMeadowsShrublands_3, 
                style: style_WetMeadowsShrublands_3,
                interactive: true,
                title: '<img src="styles/legend/WetMeadowsShrublands_3.png" /> Wet Meadows & Shrublands'
            });
var format_Streams_4 = new ol.format.GeoJSON();
var features_Streams_4 = format_Streams_4.readFeatures(json_Streams_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_4.addFeatures(features_Streams_4);
var lyr_Streams_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Streams_4, 
                style: style_Streams_4,
                interactive: true,
                title: '<img src="styles/legend/Streams_4.png" /> Streams'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_AmherstConservationLands_2.setVisible(true);lyr_WetMeadowsShrublands_3.setVisible(true);lyr_Streams_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_AmherstConservationLands_2,lyr_WetMeadowsShrublands_3,lyr_Streams_4];
lyr_AmherstConservationLands_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TID': 'TID', 'NAME': 'NAME', 'NAMEALT': 'NAMEALT', 'P_NAME': 'P_NAME', 'P_NAMEALT': 'P_NAMEALT', 'PPTYPE': 'PPTYPE', 'PPTERMTYPE': 'PPTERMTYPE', 'PPTERM': 'PPTERM', 'SPTYPE1': 'SPTYPE1', 'SPTYPE2': 'SPTYPE2', 'PPAGENCY': 'PPAGENCY', 'PPAGENTYPE': 'PPAGENTYPE', 'SPAGENCY1': 'SPAGENCY1', 'SPAGENCY2': 'SPAGENCY2', 'RSIZE': 'RSIZE', 'CSIZE': 'CSIZE', 'P_RSIZE': 'P_RSIZE', 'P_CSIZE': 'P_CSIZE', 'PROGRAM': 'PROGRAM', 'LEVEL_': 'LEVEL_', 'MSTATUS': 'MSTATUS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'COBKPG': 'COBKPG', 'DATEREC1': 'DATEREC1', 'DATEREC2': 'DATEREC2', 'ACCESS': 'ACCESS', 'DATEADDED': 'DATEADDED', 'DATEALTER': 'DATEALTER', 'NOTES1': 'NOTES1', 'NOTES2': 'NOTES2', 'NOTES3': 'NOTES3', 'NOTES4': 'NOTES4', 'PID': 'PID', 'GAP_STATUS': 'GAP_STATUS', 'OWNERTYPE': 'OWNERTYPE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WetMeadowsShrublands_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'WAP_HAB': 'WAP_HAB', 'HECTARES': 'HECTARES', 'ACRES': 'ACRES', });
lyr_Streams_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_': 'Permanent_', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'GNIS_Name': 'GNIS_Name', 'LengthKM': 'LengthKM', 'ReachCode': 'ReachCode', 'FlowDir': 'FlowDir', 'WBArea_Per': 'WBArea_Per', 'FType': 'FType', 'FCode': 'FCode', 'Enabled': 'Enabled', 'SOrder': 'SOrder', 'NHDESID': 'NHDESID', 'NHDESMODEL': 'NHDESMODEL', 'NHTEMP': 'NHTEMP', 'TNCHIQUAL': 'TNCHIQUAL', 'TIDAL': 'TIDAL', 'DESCRIP': 'DESCRIP', 'NOTES': 'NOTES', 'EBT': 'EBT', 'SPPCONCERN': 'SPPCONCERN', 'HerringSto': 'HerringSto', 'ShadRestor': 'ShadRestor', 'AnadFish': 'AnadFish', 'NHFGintere': 'NHFGintere', 'COLD_CAT': 'COLD_CAT', 'WAP_CAT': 'WAP_CAT', 'DIAD_CAT': 'DIAD_CAT', 'WAPSPECIES': 'WAPSPECIES', 'BridleShin': 'BridleShin', 'ABL': 'ABL', 'SpringFed': 'SpringFed', 'Shape_Leng': 'Shape_Leng', });
lyr_AmherstConservationLands_2.set('fieldImages', {'OBJECTID': 'Range', 'TID': 'TextEdit', 'NAME': 'TextEdit', 'NAMEALT': 'TextEdit', 'P_NAME': 'TextEdit', 'P_NAMEALT': 'TextEdit', 'PPTYPE': 'TextEdit', 'PPTERMTYPE': 'TextEdit', 'PPTERM': 'Range', 'SPTYPE1': 'TextEdit', 'SPTYPE2': 'TextEdit', 'PPAGENCY': 'Range', 'PPAGENTYPE': 'Range', 'SPAGENCY1': 'Range', 'SPAGENCY2': 'Range', 'RSIZE': 'TextEdit', 'CSIZE': 'TextEdit', 'P_RSIZE': 'TextEdit', 'P_CSIZE': 'TextEdit', 'PROGRAM': 'Range', 'LEVEL_': 'TextEdit', 'MSTATUS': 'Range', 'SOURCE': 'TextEdit', 'ACCURACY': 'Range', 'COBKPG': 'TextEdit', 'DATEREC1': 'TextEdit', 'DATEREC2': 'TextEdit', 'ACCESS': 'Range', 'DATEADDED': 'TextEdit', 'DATEALTER': 'TextEdit', 'NOTES1': 'TextEdit', 'NOTES2': 'TextEdit', 'NOTES3': 'TextEdit', 'NOTES4': 'TextEdit', 'PID': 'TextEdit', 'GAP_STATUS': 'TextEdit', 'OWNERTYPE': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WetMeadowsShrublands_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'WAP_HAB': 'TextEdit', 'HECTARES': 'TextEdit', 'ACRES': 'TextEdit', });
lyr_Streams_4.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'Range', 'GNIS_ID': 'TextEdit', 'GNIS_Name': 'TextEdit', 'LengthKM': 'TextEdit', 'ReachCode': 'TextEdit', 'FlowDir': 'Range', 'WBArea_Per': 'TextEdit', 'FType': 'Range', 'FCode': 'Range', 'Enabled': 'Range', 'SOrder': 'Range', 'NHDESID': 'TextEdit', 'NHDESMODEL': 'TextEdit', 'NHTEMP': 'TextEdit', 'TNCHIQUAL': 'Range', 'TIDAL': 'TextEdit', 'DESCRIP': 'TextEdit', 'NOTES': 'TextEdit', 'EBT': 'TextEdit', 'SPPCONCERN': 'TextEdit', 'HerringSto': 'TextEdit', 'ShadRestor': 'TextEdit', 'AnadFish': 'TextEdit', 'NHFGintere': 'TextEdit', 'COLD_CAT': 'TextEdit', 'WAP_CAT': 'TextEdit', 'DIAD_CAT': 'TextEdit', 'WAPSPECIES': 'TextEdit', 'BridleShin': 'TextEdit', 'ABL': 'TextEdit', 'SpringFed': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_AmherstConservationLands_2.set('fieldLabels', {'OBJECTID': 'no label', 'TID': 'no label', 'NAME': 'no label', 'NAMEALT': 'no label', 'P_NAME': 'no label', 'P_NAMEALT': 'no label', 'PPTYPE': 'no label', 'PPTERMTYPE': 'no label', 'PPTERM': 'no label', 'SPTYPE1': 'no label', 'SPTYPE2': 'no label', 'PPAGENCY': 'no label', 'PPAGENTYPE': 'no label', 'SPAGENCY1': 'no label', 'SPAGENCY2': 'no label', 'RSIZE': 'no label', 'CSIZE': 'no label', 'P_RSIZE': 'no label', 'P_CSIZE': 'no label', 'PROGRAM': 'no label', 'LEVEL_': 'no label', 'MSTATUS': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'COBKPG': 'no label', 'DATEREC1': 'no label', 'DATEREC2': 'no label', 'ACCESS': 'no label', 'DATEADDED': 'no label', 'DATEALTER': 'no label', 'NOTES1': 'no label', 'NOTES2': 'no label', 'NOTES3': 'no label', 'NOTES4': 'no label', 'PID': 'no label', 'GAP_STATUS': 'no label', 'OWNERTYPE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WetMeadowsShrublands_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'WAP_HAB': 'no label', 'HECTARES': 'no label', 'ACRES': 'no label', });
lyr_Streams_4.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_': 'no label', 'FDate': 'no label', 'Resolution': 'no label', 'GNIS_ID': 'no label', 'GNIS_Name': 'no label', 'LengthKM': 'no label', 'ReachCode': 'no label', 'FlowDir': 'no label', 'WBArea_Per': 'no label', 'FType': 'no label', 'FCode': 'no label', 'Enabled': 'no label', 'SOrder': 'no label', 'NHDESID': 'no label', 'NHDESMODEL': 'no label', 'NHTEMP': 'no label', 'TNCHIQUAL': 'no label', 'TIDAL': 'no label', 'DESCRIP': 'no label', 'NOTES': 'no label', 'EBT': 'no label', 'SPPCONCERN': 'no label', 'HerringSto': 'no label', 'ShadRestor': 'no label', 'AnadFish': 'no label', 'NHFGintere': 'no label', 'COLD_CAT': 'no label', 'WAP_CAT': 'no label', 'DIAD_CAT': 'no label', 'WAPSPECIES': 'no label', 'BridleShin': 'no label', 'ABL': 'no label', 'SpringFed': 'no label', 'Shape_Leng': 'no label', });
lyr_Streams_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});