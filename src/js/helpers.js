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
* Behavior configuration of the exporter
* showGroupSubpaths: If enabled, each group header will show subpath as well
* showMenu: If enabled, menu that allows navigation through categories will be shown, otherwise hidden (ideal for embeeding)
*/ 
Pulsar.registerPayload("behavior", {
    showGroupSubpaths: true,
    showMenu: true
})