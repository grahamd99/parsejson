// hats off to https://www.tutorialkart.com/nodejs/nodejs-parse-json/
// include file system module
var fs = require('fs');
 
// read file sample.json file
fs.readFile('vacc_test.json',
    // callback function that is called when reading file is done
    function(err, data) {       
        // json data
        var jsonData = data;
 
        // parse json
        var jsonParsed = JSON.parse(jsonData);
 
        // access elements to create variables
        resourceType      = jsonParsed.resourceType;
        profile           = jsonParsed.meta.profile;
        vacc_system_uri   = jsonParsed.identifier[0].system;
        vacc_system_value = jsonParsed.identifier[0].value;
        status            = jsonParsed.status;
        occurrenceDateTime = jsonParsed.occurrenceDateTime;
        primarySource      = jsonParsed.primarySource;
        lotNumber          = jsonParsed.lotNumber;
        expirationDate     = jsonParsed.expirationDate;
        vaccineCodeSystem  = jsonParsed.vaccineCode.coding[0].system;
        vaccineCodeCode    = jsonParsed.vaccineCode.coding[0].code;
        vaccineCodeDisplay = jsonParsed.vaccineCode.coding[0].display;

        // write variables to console 
        console.log("resourceType = " + resourceType);
        console.log("profile = " + profile);
        console.log("vacc_system_uri (UNIQUE_ID_URI) = " + vacc_system_uri);
        console.log("vacc_system_value (UNIQUE_ID) = " + vacc_system_value);
        console.log("status = " + status);
        console.log("occurrenceDateTime = " + occurrenceDateTime);
        console.log("primarySource = " + primarySource);
        console.log("lotNumber = " + lotNumber);
        console.log("expirationDate = " + expirationDate);
        console.log("vaccineCodeSystem = " + vaccineCodeSystem);
        console.log("vaccineCodeDisplay = " + vaccineCodeDisplay);
});

