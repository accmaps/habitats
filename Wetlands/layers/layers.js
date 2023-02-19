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
var format_TownBoundary_1 = new ol.format.GeoJSON();
var features_TownBoundary_1 = format_TownBoundary_1.readFeatures(json_TownBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TownBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownBoundary_1.addFeatures(features_TownBoundary_1);
var lyr_TownBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TownBoundary_1, 
                style: style_TownBoundary_1,
                interactive: true,
                title: '<img src="styles/legend/TownBoundary_1.png" /> Town Boundary'
            });
var format_AmherstConservationLands2023_2 = new ol.format.GeoJSON();
var features_AmherstConservationLands2023_2 = format_AmherstConservationLands2023_2.readFeatures(json_AmherstConservationLands2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmherstConservationLands2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmherstConservationLands2023_2.addFeatures(features_AmherstConservationLands2023_2);
var lyr_AmherstConservationLands2023_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AmherstConservationLands2023_2, 
                style: style_AmherstConservationLands2023_2,
                interactive: true,
                title: '<img src="styles/legend/AmherstConservationLands2023_2.png" /> Amherst Conservation Lands 2023'
            });
var format_WetlandsNWI_3 = new ol.format.GeoJSON();
var features_WetlandsNWI_3 = format_WetlandsNWI_3.readFeatures(json_WetlandsNWI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WetlandsNWI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WetlandsNWI_3.addFeatures(features_WetlandsNWI_3);
var lyr_WetlandsNWI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WetlandsNWI_3, 
                style: style_WetlandsNWI_3,
                interactive: true,
                title: '<img src="styles/legend/WetlandsNWI_3.png" /> Wetlands NWI'
            });
var format_StreamsStreamsshp_4 = new ol.format.GeoJSON();
var features_StreamsStreamsshp_4 = format_StreamsStreamsshp_4.readFeatures(json_StreamsStreamsshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StreamsStreamsshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StreamsStreamsshp_4.addFeatures(features_StreamsStreamsshp_4);
var lyr_StreamsStreamsshp_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StreamsStreamsshp_4, 
                style: style_StreamsStreamsshp_4,
                interactive: true,
                title: '<img src="styles/legend/StreamsStreamsshp_4.png" /> Streams — Streams.shp'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TownBoundary_1.setVisible(true);lyr_AmherstConservationLands2023_2.setVisible(true);lyr_WetlandsNWI_3.setVisible(true);lyr_StreamsStreamsshp_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TownBoundary_1,lyr_AmherstConservationLands2023_2,lyr_WetlandsNWI_3,lyr_StreamsStreamsshp_4];
lyr_TownBoundary_1.set('fieldAliases', {'Id': 'Id', });
lyr_AmherstConservationLands2023_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TID': 'TID', 'NAME': 'NAME', 'NAMEALT': 'NAMEALT', 'P_NAME': 'P_NAME', 'P_NAMEALT': 'P_NAMEALT', 'PPTYPE': 'PPTYPE', 'PPTERMTYPE': 'PPTERMTYPE', 'PPTERM': 'PPTERM', 'SPTYPE1': 'SPTYPE1', 'SPTYPE2': 'SPTYPE2', 'PPAGENCY': 'PPAGENCY', 'PPAGENTYPE': 'PPAGENTYPE', 'SPAGENCY1': 'SPAGENCY1', 'SPAGENCY2': 'SPAGENCY2', 'RSIZE': 'RSIZE', 'CSIZE': 'CSIZE', 'P_RSIZE': 'P_RSIZE', 'P_CSIZE': 'P_CSIZE', 'PROGRAM': 'PROGRAM', 'LEVEL_': 'LEVEL_', 'MSTATUS': 'MSTATUS', 'SOURCE': 'SOURCE', 'ACCURACY': 'ACCURACY', 'COBKPG': 'COBKPG', 'DATEREC1': 'DATEREC1', 'DATEREC2': 'DATEREC2', 'ACCESS': 'ACCESS', 'DATEADDED': 'DATEADDED', 'DATEALTER': 'DATEALTER', 'NOTES1': 'NOTES1', 'NOTES2': 'NOTES2', 'NOTES3': 'NOTES3', 'NOTES4': 'NOTES4', 'PID': 'PID', 'GAP_STATUS': 'GAP_STATUS', 'OWNERTYPE': 'OWNERTYPE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WetlandsNWI_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ATTRIBUTE': 'ATTRIBUTE', 'QAQC_CODE': 'QAQC_CODE', 'WETLAND_TY': 'WETLAND_TY', 'ACRES': 'ACRES', 'Landscape': 'Landscape', 'Landscape2': 'Landscape2', 'Landform': 'Landform', 'Landform2': 'Landform2', 'WaterFlowP': 'WaterFlowP', 'LLWW_Code': 'LLWW_Code', 'OtherModif': 'OtherModif', 'BSS': 'BSS', 'CAR': 'CAR', 'CSS': 'CSS', 'FAIH': 'FAIH', 'NT': 'NT', 'OWH': 'OWH', 'SM': 'SM', 'SR': 'SR', 'SWD': 'SWD', 'WBIRD': 'WBIRD', 'UWPC': 'UWPC', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_StreamsStreamsshp_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Permanent_': 'Permanent_', 'FDate': 'FDate', 'Resolution': 'Resolution', 'GNIS_ID': 'GNIS_ID', 'GNIS_Name': 'GNIS_Name', 'LengthKM': 'LengthKM', 'ReachCode': 'ReachCode', 'FlowDir': 'FlowDir', 'WBArea_Per': 'WBArea_Per', 'FType': 'FType', 'FCode': 'FCode', 'Enabled': 'Enabled', 'SOrder': 'SOrder', 'NHDESID': 'NHDESID', 'NHDESMODEL': 'NHDESMODEL', 'NHTEMP': 'NHTEMP', 'TNCHIQUAL': 'TNCHIQUAL', 'TIDAL': 'TIDAL', 'DESCRIP': 'DESCRIP', 'NOTES': 'NOTES', 'EBT': 'EBT', 'SPPCONCERN': 'SPPCONCERN', 'HerringSto': 'HerringSto', 'ShadRestor': 'ShadRestor', 'AnadFish': 'AnadFish', 'NHFGintere': 'NHFGintere', 'COLD_CAT': 'COLD_CAT', 'WAP_CAT': 'WAP_CAT', 'DIAD_CAT': 'DIAD_CAT', 'WAPSPECIES': 'WAPSPECIES', 'BridleShin': 'BridleShin', 'ABL': 'ABL', 'SpringFed': 'SpringFed', 'Shape_Leng': 'Shape_Leng', });
lyr_TownBoundary_1.set('fieldImages', {'Id': 'Range', });
lyr_AmherstConservationLands2023_2.set('fieldImages', {'OBJECTID': 'Range', 'TID': 'TextEdit', 'NAME': 'TextEdit', 'NAMEALT': 'TextEdit', 'P_NAME': 'TextEdit', 'P_NAMEALT': 'TextEdit', 'PPTYPE': 'TextEdit', 'PPTERMTYPE': 'TextEdit', 'PPTERM': 'Range', 'SPTYPE1': 'TextEdit', 'SPTYPE2': 'TextEdit', 'PPAGENCY': 'Range', 'PPAGENTYPE': 'Range', 'SPAGENCY1': 'Range', 'SPAGENCY2': 'Range', 'RSIZE': 'TextEdit', 'CSIZE': 'TextEdit', 'P_RSIZE': 'TextEdit', 'P_CSIZE': 'TextEdit', 'PROGRAM': 'Range', 'LEVEL_': 'TextEdit', 'MSTATUS': 'Range', 'SOURCE': 'TextEdit', 'ACCURACY': 'Range', 'COBKPG': 'TextEdit', 'DATEREC1': 'TextEdit', 'DATEREC2': 'TextEdit', 'ACCESS': 'Range', 'DATEADDED': 'TextEdit', 'DATEALTER': 'TextEdit', 'NOTES1': 'TextEdit', 'NOTES2': 'TextEdit', 'NOTES3': 'TextEdit', 'NOTES4': 'TextEdit', 'PID': 'TextEdit', 'GAP_STATUS': 'TextEdit', 'OWNERTYPE': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WetlandsNWI_3.set('fieldImages', {'OBJECTID': 'Range', 'ATTRIBUTE': 'TextEdit', 'QAQC_CODE': 'TextEdit', 'WETLAND_TY': 'TextEdit', 'ACRES': 'TextEdit', 'Landscape': 'TextEdit', 'Landscape2': 'TextEdit', 'Landform': 'TextEdit', 'Landform2': 'TextEdit', 'WaterFlowP': 'TextEdit', 'LLWW_Code': 'TextEdit', 'OtherModif': 'TextEdit', 'BSS': 'TextEdit', 'CAR': 'TextEdit', 'CSS': 'TextEdit', 'FAIH': 'TextEdit', 'NT': 'TextEdit', 'OWH': 'TextEdit', 'SM': 'TextEdit', 'SR': 'TextEdit', 'SWD': 'TextEdit', 'WBIRD': 'TextEdit', 'UWPC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_StreamsStreamsshp_4.set('fieldImages', {'OBJECTID': 'Range', 'Permanent_': 'TextEdit', 'FDate': 'DateTime', 'Resolution': 'Range', 'GNIS_ID': 'TextEdit', 'GNIS_Name': 'TextEdit', 'LengthKM': 'TextEdit', 'ReachCode': 'TextEdit', 'FlowDir': 'Range', 'WBArea_Per': 'TextEdit', 'FType': 'Range', 'FCode': 'Range', 'Enabled': 'Range', 'SOrder': 'Range', 'NHDESID': 'TextEdit', 'NHDESMODEL': 'TextEdit', 'NHTEMP': 'TextEdit', 'TNCHIQUAL': 'Range', 'TIDAL': 'TextEdit', 'DESCRIP': 'TextEdit', 'NOTES': 'TextEdit', 'EBT': 'TextEdit', 'SPPCONCERN': 'TextEdit', 'HerringSto': 'TextEdit', 'ShadRestor': 'TextEdit', 'AnadFish': 'TextEdit', 'NHFGintere': 'TextEdit', 'COLD_CAT': 'TextEdit', 'WAP_CAT': 'TextEdit', 'DIAD_CAT': 'TextEdit', 'WAPSPECIES': 'TextEdit', 'BridleShin': 'TextEdit', 'ABL': 'TextEdit', 'SpringFed': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TownBoundary_1.set('fieldLabels', {'Id': 'no label', });
lyr_AmherstConservationLands2023_2.set('fieldLabels', {'OBJECTID': 'no label', 'TID': 'no label', 'NAME': 'header label', 'NAMEALT': 'no label', 'P_NAME': 'no label', 'P_NAMEALT': 'no label', 'PPTYPE': 'no label', 'PPTERMTYPE': 'no label', 'PPTERM': 'no label', 'SPTYPE1': 'no label', 'SPTYPE2': 'no label', 'PPAGENCY': 'no label', 'PPAGENTYPE': 'no label', 'SPAGENCY1': 'no label', 'SPAGENCY2': 'no label', 'RSIZE': 'no label', 'CSIZE': 'no label', 'P_RSIZE': 'no label', 'P_CSIZE': 'no label', 'PROGRAM': 'no label', 'LEVEL_': 'no label', 'MSTATUS': 'no label', 'SOURCE': 'no label', 'ACCURACY': 'no label', 'COBKPG': 'no label', 'DATEREC1': 'no label', 'DATEREC2': 'no label', 'ACCESS': 'no label', 'DATEADDED': 'no label', 'DATEALTER': 'no label', 'NOTES1': 'no label', 'NOTES2': 'no label', 'NOTES3': 'no label', 'NOTES4': 'no label', 'PID': 'no label', 'GAP_STATUS': 'no label', 'OWNERTYPE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WetlandsNWI_3.set('fieldLabels', {'OBJECTID': 'no label', 'ATTRIBUTE': 'no label', 'QAQC_CODE': 'no label', 'WETLAND_TY': 'header label', 'ACRES': 'no label', 'Landscape': 'no label', 'Landscape2': 'no label', 'Landform': 'no label', 'Landform2': 'no label', 'WaterFlowP': 'no label', 'LLWW_Code': 'no label', 'OtherModif': 'no label', 'BSS': 'no label', 'CAR': 'no label', 'CSS': 'no label', 'FAIH': 'no label', 'NT': 'no label', 'OWH': 'no label', 'SM': 'no label', 'SR': 'no label', 'SWD': 'no label', 'WBIRD': 'no label', 'UWPC': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_StreamsStreamsshp_4.set('fieldLabels', {'OBJECTID': 'no label', 'Permanent_': 'no label', 'FDate': 'no label', 'Resolution': 'no label', 'GNIS_ID': 'no label', 'GNIS_Name': 'inline label', 'LengthKM': 'no label', 'ReachCode': 'no label', 'FlowDir': 'header label', 'WBArea_Per': 'no label', 'FType': 'no label', 'FCode': 'no label', 'Enabled': 'no label', 'SOrder': 'no label', 'NHDESID': 'no label', 'NHDESMODEL': 'no label', 'NHTEMP': 'no label', 'TNCHIQUAL': 'no label', 'TIDAL': 'no label', 'DESCRIP': 'no label', 'NOTES': 'no label', 'EBT': 'no label', 'SPPCONCERN': 'no label', 'HerringSto': 'no label', 'ShadRestor': 'no label', 'AnadFish': 'no label', 'NHFGintere': 'no label', 'COLD_CAT': 'no label', 'WAP_CAT': 'no label', 'DIAD_CAT': 'no label', 'WAPSPECIES': 'no label', 'BridleShin': 'no label', 'ABL': 'no label', 'SpringFed': 'no label', 'Shape_Leng': 'no label', });
lyr_StreamsStreamsshp_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});