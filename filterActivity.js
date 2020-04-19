function changeEmission(val) {
    switch (val) {
        case "1":
            document.getElementById("emission-1").style.visibility = "visible";
            document.getElementById("emission-2").style.visibility = "hidden";
            document.getElementById("emission-3").style.visibility = "hidden";
            break;
        case "2":
            document.getElementById("emission-1").style.visibility = "hidden";
            document.getElementById("emission-2").style.visibility = "visible";
            document.getElementById("emission-3").style.visibility = "hidden";
            break;
        case "3":
            document.getElementById("emission-1").style.visibility = "hidden";
            document.getElementById("emission-2").style.visibility = "hidden";
            document.getElementById("emission-3").style.visibility = "visible";
            break;
    }
}

function changeEnergy(val) {
    switch (val) {
        case "1":
            document.getElementById("energy-1").style.visibility = "visible";
            document.getElementById("energy-2").style.visibility = "hidden";
            document.getElementById("energy-3").style.visibility = "hidden";
            break;
        case "2":
            document.getElementById("energy-1").style.visibility = "hidden";
            document.getElementById("energy-2").style.visibility = "visible";
            document.getElementById("energy-3").style.visibility = "hidden";
            break;
        case "3":
            document.getElementById("energy-1").style.visibility = "hidden";
            document.getElementById("energy-2").style.visibility = "hidden";
            document.getElementById("energy-3").style.visibility = "visible";
            break;
    }
}

function changeCars(val) {
    switch (val) {
        case "1":
            document.getElementById("car-1").style.visibility = "visible";
            document.getElementById("car-2").style.visibility = "hidden";
            document.getElementById("car-3").style.visibility = "hidden";
            break;
        case "2":
            document.getElementById("car-1").style.visibility = "hidden";
            document.getElementById("car-2").style.visibility = "visible";
            document.getElementById("car-3").style.visibility = "hidden";
            break;
        case "3":
            document.getElementById("car-1").style.visibility = "hidden";
            document.getElementById("car-2").style.visibility = "hidden";
            document.getElementById("car-3").style.visibility = "visible";
            break;
    }
}

function changeBurn(val) {
    switch (val) {
        case "1":
            document.getElementById("burn-1").style.visibility = "visible";
            document.getElementById("burn-2").style.visibility = "hidden";
            document.getElementById("burn-3").style.visibility = "hidden";
            break;
        case "2":
            document.getElementById("burn-1").style.visibility = "hidden";
            document.getElementById("burn-2").style.visibility = "visible";
            document.getElementById("burn-3").style.visibility = "hidden";
            break;
        case "3":
            document.getElementById("burn-1").style.visibility = "hidden";
            document.getElementById("burn-2").style.visibility = "hidden";
            document.getElementById("burn-3").style.visibility = "visible";
            break;
    }
}

function changeFilter() {
    var emissionValue = parseInt(document.getElementById("govEmissionPolicyRange").value);
    var energyValue = parseInt(document.getElementById("energySourceRange").value);
    var transportValue = parseInt(document.getElementById("transportationRange").value);
    var burnValue = parseInt(document.getElementById("burningRange").value);

    var totalValue = emissionValue + energyValue + transportValue + burnValue;
    console.log(totalValue);
    var percentage = (1 - totalValue/12)*100;
    var filterTag = `grayscale(${percentage}%)`;
    console.log(filterTag);
    document.getElementById("actionBackground").style.filter = filterTag;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Loaded");
    changeEmission(document.getElementById("govEmissionPolicyRange").value);
    changeEnergy(document.getElementById("energySourceRange").value);
    changeCars(document.getElementById("transportationRange").value);
    changeBurn(document.getElementById("burningRange").value);
    changeFilter();
 }, false);
