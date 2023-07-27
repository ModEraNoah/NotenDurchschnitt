/**
 * 
 * @param {number[][]} notenInput 
 * @returns number durchschnitt 
 */
export function notenschnitt(notenInput) {
  if(
    ! Array.isArray(notenInput) || 
    notenInput.length == 0 ||
    notenInput.length > 1 && !(notenInput.every(element => Array.isArray(element), true))
    )
  return null;
  
  let erg = 0.0;
  let gewicht = 0;
  for(let element of notenInput) {
    if(element.length <= 1) {
      if (isNaN(element) || element.length === 0) return null;
      erg = parseFloat(erg) + parseFloat(element);
      gewicht++;
    }else {
      if(typeof element[0] === 'string' || typeof element[1] === 'string' || element.length > 2) return null;
      erg = parseFloat(erg) + (parseFloat(element[0]) * parseInt(element[1]));
      gewicht = parseInt(gewicht) + parseInt(element[1]);
    }
  }
  return Math.floor(1000*erg/gewicht)/1000;
  //return erg/gewicht
}