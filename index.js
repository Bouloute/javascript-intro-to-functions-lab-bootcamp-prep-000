function shout(string){
  return(string.toUpperCase())
}

function whisper(string){
  return(string.toLowerCase())
}

function logShout(string){
  console.log(shout(string))
}

function logWhisper(string){
  console.log(whisper(string))
}

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    console.log("I can/t hear you!")
  }
  else if (string === string.toUpperCase()){
    console.log("YES INDEED!")
  }else if (string === "I love you, Grandma."){
    console.log("I love you, too.")
  }
}
/*


describe('sayHiToGrandma(string)', function() {


  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
*/