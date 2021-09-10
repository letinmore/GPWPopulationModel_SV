# ESTIMACIÓN DE PROYECCIONES DE POBLACIÓN PARA LOS AÑOS 2000, 2005, 2010, 2015, Y 2020 CON GOOGLE EARTH ENGINE EN LOS MUNICIPIOS DE EL SALVADOR, A PARTIR DE LA BASE DE DATOS GRIDDED POPULATION OF THE WORLD
Una colección de scripts, herramientas y datos extraídos de y procesados por Google Earth Engine (GEE) para aproximar la poblacion total en cada municipio de El Salvador para los años 2000 a 2020 usando el conjunto de datos Gridded Population of the World (GPW) v4.11.

## Los archivos incluidos son:

1. **README.md:** el presente documento.
2. **LIM_MUNICIPAL_WGS84.zip:** Shape file de limites municipales de El Salvador (WGS84) para importar como asset en el editor de código de GEE y usarlo para delimitar el area de municipios en la capa de poblacion de GPW.
3. **Estimacion de poblacion 2000 - 2020.xlsx:** Archivo CSV con población total por municipios extraidos del conjunto de datos GPW 4.11. Incluye las zonas sin demarcación en la frontera con Honduras.
4. **CSV_data_dump.js:** Script hecho en el editor de código de GEE para extraer la población total de los municipios para un departamento dado. Creado con JavaScript. Puede ejecutarse en el editor de código de GEE acá: https://code.earthengine.google.com/7007758b70721c367dd0bf410bdf1e6e?asset=users%2F00068810%2FLIM_MUNICIPAL&noload=true
5. **Estimación de proyecciones de población para los años 2000, 2005, 2010, 2015, y 2020 con Google Earth Engine en los municipios de El Salvador, a partir de la base de datos Gridded Population of the World.pdf (y .docx):** Documento de la tesis con el detalle y los resultados de la investigación, en formatos PDF y DOCX. Incluye el codigo fuente y los resultados obtenidos en el archivo CSV.
6. **datos municipios con dispersion v3.xlsx:** Cálculo de grado de estimación de los datos del conjunto GPW con respecto a datos obtenidos de censos para una muestra de municipios de México usando Excel VBA.




