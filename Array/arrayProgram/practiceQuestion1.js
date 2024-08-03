let companies=["Bloomber","Microsoft","Uber","Google","IBM","Netflix"];

//Remove the first company from the array (used shift method)
companies.shift();

// Remove Uber and  Ola in its place (used splice method )
companies.splice(2,1,"Ola");

// Add Amazon at the end (Used  push method)
companies.push("Amazon");
