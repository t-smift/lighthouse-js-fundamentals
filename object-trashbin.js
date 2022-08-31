bins = {
  waste: 0,
  recycling: 0,
  compost: 0
}
function smartGarbage(trash, bins){
  if (trash === "waste"){
    bins.waste = bins.waste + 1;
  } else if (trash === "recycling"){
    bins.recycling = bins.recycling + 1;
  } else if (trash === "compost"){
    bins.compost = bins.compost + 1;
  }
  return bins
}
