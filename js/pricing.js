function changeCategory(category) {
    var pricingCategory = "pricing-" + category;
    var serviceCategory = "service-" + category;
    
    displayCategory(pricingCategory);
    highlightCategory(serviceCategory);
    changeService(category);
    
    document.getElementById("pricing-button").href = "#" + pricingCategory;
}

function displayCategory(category) {
    document.getElementById("pricing-plet").style.display = "none";
    document.getElementById("pricing-obocie").style.display = "none";
    document.getElementById("pricing-manikura").style.display = "none";
    document.getElementById("pricing-pedikura").style.display = "none";
    document.getElementById("pricing-depilacie").style.display = "none";
    document.getElementById("pricing-samostatne").style.display = "none";
    
    document.getElementById(category).style.display = "flex";
}

function highlightCategory(category) {
    document.getElementById("service-plet").style.color = "black";
    document.getElementById("service-obocie").style.color = "black";
    document.getElementById("service-manikura").style.color = "black";
    document.getElementById("service-pedikura").style.color = "black";
    document.getElementById("service-depilacie").style.color = "black";
    document.getElementById("service-samostatne").style.color = "black";
    
    document.getElementById(category).style.color = "#F86A20";
}

function changeService(service) {
    var serviceName = "hey";
    
    if (service == "plet") serviceName = "skin";
    if (service == "obocie") serviceName = "eyebrow";
    if (service == "manikura") serviceName = "manicure";
    if (service == "pedikura") serviceName = "pedicure";
    if (service == "depilacie") serviceName = "depilation";
    if (service == "samostatne") serviceName = "other";
    
    console.log(serviceName);
    
    document.getElementById("service-plet-icon").src = "assets/icon-skin-gray.png";
    document.getElementById("service-obocie-icon").src = "assets/icon-eyebrow-gray.png";
    document.getElementById("service-manikura-icon").src = "assets/icon-manicure-gray.png";
    document.getElementById("service-pedikura-icon").src = "assets/icon-pedicure-gray.png";
    document.getElementById("service-depilacie-icon").src = "assets/icon-depilation-gray.png";
    document.getElementById("service-samostatne-icon").src = "assets/icon-other-gray.png";
    
    document.getElementById("service-" + service + "-icon").src = "assets/icon-" + serviceName + "-orange.png";
}