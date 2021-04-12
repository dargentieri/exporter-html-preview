/**
* Convert group into properly formatted header
*/
Pulsar.registerFunction("formattedGroupHeader", function (tokenGroup, showSubpath) {

    // Retrieve token group either including or not including the path to the group
    if (tokenGroup.path.length > 0) {
        let light = tokenGroup.path.join(" / ")
        let dark = tokenGroup.name
        return `<span class="light">${light} / </span>${dark}`
    } else {
        return tokenGroup.name
    }
})

/**
* Describe complex gradient token
*/
Pulsar.registerFunction("gradientDescription", function (gradientToken) {

   // Describe gradient as (type) (stop1, stop2 ...)
   let type = `${gradientToken.value.type} Gradient`
   let stops = gradientToken.value.stops.map(stop => {
        return `#${stop.color.hex.toUpperCase()}, ${stop.position * 100}%`
   }).join(", ")

   return `${type}, ${stops}`
})

// radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);

/**
* Describe complex gradient value as token
*/
Pulsar.registerFunction("gradientValue", function (gradientToken) {

    let gradientType = ""
    switch (gradientToken.value.type) {
        case "Linear": gradientType = "linear-gradient(0deg, "; break;
        case "Radial": gradientType = "radial-gradient(circle, "; break;
        case "Angular": gradientType = "conic-gradient("; break; 
    } 
   // Describe gradient as (type) (stop1, stop2 ...)
   let stops = gradientToken.value.stops.map(stop => {
        return `#${stop.color.hex.toUpperCase()} ${stop.position * 100}%`
   }).join(", ")

   return `${gradientType}${stops})`
})

/**
 * Generate menu items based on the configuration
 */
Pulsar.registerFunction("activeMenuItems", function () {
    let items = []
    if (Pulsar.configuration.generateColors) {
        items.push("Colors")
    }
    if (Pulsar.configuration.generateBorders) {
        items.push("Borders")
    }
    if (Pulsar.configuration.generateGradients) {
        items.push("Gradients")
    }
    return items
})

/**
* Behavior configuration of the exporter
* showGroupSubpaths: If enabled, each group header will show subpath as well
* showMenu: If enabled, menu that allows navigation through categories will be shown, otherwise hidden (ideal for embeeding)
*/ 
Pulsar.registerPayload("behavior", {
    showGroupSubpaths: true,
    showMenu: true
})