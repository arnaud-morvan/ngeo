/**
 * Externs for MapFish Print v3.
 *
 * @externs
 */



/**
 * @record
 * @struct
 */
var MapFishPrintSpec = function() {};


/**
 * @type {MapFishPrintAttributes}
 */
MapFishPrintSpec.prototype.attributes;


/**
 * @type {string}
 */
MapFishPrintSpec.prototype.layout;


/**
 * @type {string}
 */
MapFishPrintSpec.prototype.format;


/**
 * @record
 * @struct
 */
var MapFishPrintAttributes = function() {};


/**
 * @type {MapFishPrintMap}
 */
MapFishPrintAttributes.prototype.map;



/**
 * @record
 * @struct
 */
var MapFishPrintMap = function() {};


/**
 * @type {Array.<number>}
 */
MapFishPrintMap.prototype.bbox;


/**
 * @type {Array.<number>}
 */
MapFishPrintMap.prototype.center;


/**
 * @type {number}
 */
MapFishPrintMap.prototype.scale;


/**
 * @type {number}
 */
MapFishPrintMap.prototype.dpi;


/**
 * @type {Array.<MapFishPrintLayer>}
 */
MapFishPrintMap.prototype.layers;


/**
 * @type {string}
 */
MapFishPrintMap.prototype.projection;


/**
 * @type {number}
 */
MapFishPrintMap.prototype.rotation;



/**
 * @record
 * @struct
 */
var MapFishPrintLayer = function() {};


/**
 * @type {string}
 */
MapFishPrintLayer.prototype.type;


/**
 * @type {number}
 */
MapFishPrintLayer.prototype.opacity;



/**
 * @record
 * @struct
 * @extends {MapFishPrintLayer}
 */
var MapFishPrintVectorLayer = function() {};


/**
 * @type {GeoJSONObject}
 */
MapFishPrintVectorLayer.prototype.geoJson;


/**
 * @type {MapFishPrintVectorStyle}
 */
MapFishPrintVectorLayer.prototype.style;



/**
 * @record
 */
var MapFishPrintVectorStyle = function() {};


/**
 * @type {string}
 */
MapFishPrintVectorStyle.prototype.version;


/**
 * @record
 * @struct
 * @extends {MapFishPrintLayer}
 */
var MapFishPrintWmsLayer = function() {};


/**
 * @type {string}
 */
MapFishPrintWmsLayer.prototype.baseURL;


/**
 * @type {Object.<string, string>}
 */
MapFishPrintWmsLayer.prototype.customParams;


/**
 * @type {Array.<string>}
 */
MapFishPrintWmsLayer.prototype.layers;


/**
 * @type {string}
 */
MapFishPrintWmsLayer.prototype.serverType;


/**
 * @type {Array.<string>}
 */
MapFishPrintWmsLayer.prototype.styles;


/**
 * @type {string}
 */
MapFishPrintWmsLayer.prototype.version;



/**
 * @record
 * @struct
 */
var MapFishPrintWmtsMatrix = function() {};


/**
 * @type {string}
 */
MapFishPrintWmtsMatrix.prototype.identifier;


/**
 * @type {number}
 */
MapFishPrintWmtsMatrix.prototype.scaleDenominator;


/**
 * @type {Array.<number>}
 */
MapFishPrintWmtsMatrix.prototype.tileSize;


/**
 * @type {Array.<number>}
 */
MapFishPrintWmtsMatrix.prototype.topLeftCorner;


/**
 * @type {Array.<number>}
 */
MapFishPrintWmtsMatrix.prototype.matrixSize;


/**
 * @record
 * @struct
 * @extends {MapFishPrintLayer}
 */
var MapFishPrintWmtsLayer = function() {};


/**
 * @type {string}
 */
MapFishPrintWmtsLayer.prototype.baseURL;


/**
 * @type {Object}
 */
MapFishPrintWmtsLayer.prototype.dimensions;


/**
 * @type {Object}
 */
MapFishPrintWmtsLayer.prototype.dimensionParams;


/**
 * @type {string}
 */
MapFishPrintWmtsLayer.prototype.imageFormat;


/**
 * @type {string}
 */
MapFishPrintWmtsLayer.prototype.layer;


/**
 * @type {Array.<MapFishPrintWmtsMatrix>}
 */
MapFishPrintWmtsLayer.prototype.matrices;


/**
 * @type {string}
 */
MapFishPrintWmtsLayer.prototype.matrixSet;


/**
 * @type {string}
 */
MapFishPrintWmtsLayer.prototype.requestEncoding;


/**
 * @type {string}
 */
MapFishPrintWmtsLayer.prototype.style;


/**
 * @type {string}
 */
MapFishPrintWmtsLayer.prototype.version;



/**
 * @record
 * @struct
 */
var MapFishPrintReportResponse = function() {};


/**
 * @type {string}
 */
MapFishPrintReportResponse.prototype.ref;


/**
 * @type {string}
 */
MapFishPrintReportResponse.prototype.statusURL;


/**
 * @type {string}
 */
MapFishPrintReportResponse.prototype.downloadURL;



/**
 * @record
 * @struct
 */
var MapFishPrintStatusResponse = function() {};


/**
 * @type {boolean}
 */
MapFishPrintStatusResponse.prototype.done;


/**
 * @type {string}
 */
MapFishPrintStatusResponse.prototype.status;


/**
 * @type {string}
 */
MapFishPrintStatusResponse.prototype.error;


/**
 * @type {string}
 */
MapFishPrintStatusResponse.prototype.downloadURL;



/**
 * @record
 * @struct
 */
var MapFishPrintSymbolizers = function() {};


/**
 * @type {Array.<MapFishPrintSymbolizer>}
 */
MapFishPrintSymbolizers.prototype.symbolizers;


/**
 * @record
 * @struct
 */
var MapFishPrintSymbolizer = function() {};


/**
 * @type {string}
 */
MapFishPrintSymbolizer.prototype.type;



/**
 * @record
 * @struct
 * @extends {MapFishPrintSymbolizer}
 */
var MapFishPrintSymbolizerLine = function() {};


/**
 * @type {string}
 */
MapFishPrintSymbolizerLine.prototype.strokeColor;


/**
 * @type {number}
 */
MapFishPrintSymbolizerLine.prototype.strokeOpacity;


/**
 * @type {number}
 */
MapFishPrintSymbolizerLine.prototype.strokeWidth;


/**
 * @type {string}
 */
MapFishPrintSymbolizerLine.prototype.strokeDashstyle;



/**
 * @record
 * @struct
 * @extends {MapFishPrintSymbolizer}
 */
var MapFishPrintSymbolizerPoint = function() {};


/**
 * @type {string}
 */
MapFishPrintSymbolizerPoint.prototype.externalGraphic;


/**
 * @type {string}
 */
MapFishPrintSymbolizerPoint.prototype.graphicFormat;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPoint.prototype.graphicOpacity;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPoint.prototype.graphicHeight;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPoint.prototype.graphicWidth;


/**
 * @type {string}
 */
MapFishPrintSymbolizerPoint.prototype.fillColor;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPoint.prototype.fillOpacity;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPoint.prototype.pointRadius;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPoint.prototype.rotation;


/**
 * @type {string}
 */
MapFishPrintSymbolizerPoint.prototype.strokeColor;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPoint.prototype.strokeOpacity;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPoint.prototype.strokeWidth;


/**
 * @type {string}
 */
MapFishPrintSymbolizerPoint.prototype.graphicName;



/**
 * @record
 * @struct
 * @extends {MapFishPrintSymbolizer}
 */
var MapFishPrintSymbolizerPolygon = function() {};


/**
 * @type {string}
 */
MapFishPrintSymbolizerPolygon.prototype.fillColor;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPolygon.prototype.fillOpacity;


/**
 * @type {string}
 */
MapFishPrintSymbolizerPolygon.prototype.strokeColor;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPolygon.prototype.strokeOpacity;


/**
 * @type {number}
 */
MapFishPrintSymbolizerPolygon.prototype.strokeWidth;


/**
 * @type {string}
 */
MapFishPrintSymbolizerPolygon.prototype.strokeDashstyle;



/**
 * @record
 * @struct
 * @extends {MapFishPrintSymbolizer}
 */
var MapFishPrintSymbolizerText = function() {};

/**
 * @type {string}
 */
MapFishPrintSymbolizerText.prototype.label;

/**
 * @type {string}
 */
MapFishPrintSymbolizerText.prototype.labelAlign;

/**
 * @type {string}
 */
MapFishPrintSymbolizerText.prototype.labelRotation;

/**
 * @type {string}
 */
MapFishPrintSymbolizerText.prototype.fontWeight;

/**
 * @type {string}
 */
MapFishPrintSymbolizerText.prototype.fontSize;

/**
 * @type {string}
 */
MapFishPrintSymbolizerText.prototype.fontFamily;

/**
 * @type {number}
 */
MapFishPrintSymbolizerText.prototype.labelXOffset;

/**
 * @type {number}
 */
MapFishPrintSymbolizerText.prototype.labelYOffset;

/**
 * @type {string}
 */
MapFishPrintSymbolizerText.prototype.haloColor;

/**
 * @type {number}
 */
MapFishPrintSymbolizerText.prototype.haloOpacity;

/**
 * @type {number}
 */
MapFishPrintSymbolizerText.prototype.haloRadius;

/**
 * @type {string}
 */
MapFishPrintSymbolizerText.prototype.fontColor;
