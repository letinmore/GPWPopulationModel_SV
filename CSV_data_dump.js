// Script para extraer datos de poblacion total para municipios dentro de un 
// departamento determinado en la linea 16, usando formato CSV.

var limites_munic = ee.FeatureCollection("users/00068810/LIM_MUNICIPAL");
//La coleccion "LIM_MUNICIPAL" esta subido como asset al repositorio de GEE

//Definir conjunto d edatos para conteo
var conteo_completo = ee.ImageCollection('CIESIN/GPWv411/GPW_Population_Count');

//Centrar mapa en San Salvador
Map.setCenter(-89.2182, 13.6929, 8); 

// Crear coleccion de municipios por departamento
// Usar el valor del campo TXT  en el archivo Shape
var depto = limites_munic.filter(ee.Filter.eq('TXT', '00'));

//Dibujar departamento
Map.addLayer(depto, {color: 'FF0000'}, 'Departamento');

// Comparacion de poblaciones por anio
print(ui.Chart.image.seriesByRegion({
    imageCollection: conteo_completo.map(function(image) {
      return image.set('year', image.date().format('yyyy'));
    }),
    regions: depto,
    reducer: ee.Reducer.sum(),
    seriesProperty: 'NAM',
  })
  .setChartType('ColumnChart')
  .setOptions({
    title: 'Población estimada por municipio',
    vAxis: {title: 'Población'},
    pointSize: 4,
  }));
  
  