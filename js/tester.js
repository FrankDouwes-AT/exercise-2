/*
  side note: I know... I couldn't resist adding a basic testing util. We didn't talk about automated testing, when, why, how, etc.,
  my stance is that it's a good idea for critical parts of the codebase (forms mostly), but this is just for fun.
*/
export function test(name, func, parameters, expectedOutput) {

  const _output = func(...parameters)
  const _outputAsString = JSON.stringify(_output)

  // probably not the best way to compare data... object diffing ftw.
  const _outcome = _outputAsString === JSON.stringify(expectedOutput)

  const _backgroundColor = _outcome ? '0F0' : 'F00'

  /*
    side note: I totally googled this, I knew it existed, but I've never used console styling before,
    learn something new every day!
    side note: I've been doing this long enough to remember when console.log() caused sites to crash in IE.
  */
  console.log(`%c ${name}: ${_outcome}, ${_outputAsString}`, `color: #${_backgroundColor};`)
}
