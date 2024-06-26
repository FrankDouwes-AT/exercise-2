/*
  Side note: even though the code is fine, I'm usually inclined to use less shorthand notations.
  I'm kinda known as the 'clear code' guy in my team.
  For maintainability / debugging / extending, I'd prefer:

  slicedClosestValues.sort((a, b) => {
    return a.value - b.value
  })

  For most situations I'd even prefer a forEach() for small datasets as I can easily add a debugger statement,
  or add more logic later on (and have an index to work with). But most people will probably consider this
  final implementation 'better' code.

  ... also I'd write far fewer comments ;-)
*/


/*
  Find the [number] of nearest values within an [array] to a given [needle].
  array: Integer[] > the input array, positive and/or negative integers
  needle: Integer > the integer to find the closest values to
  number: Integer > the number of closest values to return
*/
export function findClosestValues(array, needle, number) {

  /*
    side note: since we're doing this in vanilla, some basic guarding is probably a good idea.
    Without more context I'm not sure what to return here (if anything) but at least we won't crash the 'app'.
  */
  if (!array || !array.length || !needle || !number) {
    console.warn('Missing some required parameters for findClosestValues().')
    return []   // we're expecting an array
  }

  // let's approach this as a critical piece of application logic, just to be safe (extra guarding)
  needle = Math.trunc(needle)
  number = Math.trunc(number)
  array = array.map((x) => Math.trunc(x));

  // calculate the distance between each value and the needle.
  /*
    side note: yes I use a _ (private prefix notation) for variables, I'm aware of better/other options
    (WeakMap or #(in the web component standard)), I'm just used to doing it, but we can totally discuss it.
  */
  const _closestValues = array.map((value, index) => {
    return {
      index,
      value,
      distance: Math.abs(value - needle)
    }
  })

  // sort the array by distance (nearest first).
  _closestValues.sort((a, b) => a.distance - b.distance)

  // slice the array to the number provided asap. (so we have less to loop through, slight performance gain).
  const _slicedClosestValues = _closestValues.splice(0, number)

  // we have an array based on distance, we need it sorted on value (ascending) instead.
  _slicedClosestValues.sort((a, b) => a.value - b.value)

  // return only the values from the array.
  return _slicedClosestValues.map((value) => value.value)
}
