{
  const ModSquad = {
      //added comma after array
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }
//changed `const` to `let` (fixed error: assignment to constant variable)
  let HTMLRepresentation = `<h1>The Mod Squad</h1>`

  ModSquad.members.forEach(member => {
//removed const from before HTMLRepresentation (fixed error: missing initializer in const declaration)
    HTMLRepresentation += `<div>${member}</div>`
  })
//moved querySelector inside curly braces (fixed error: HTMLRepresentation not defined)
//added "show-info" class to index.html (fixed error: cannot set property 'innerHTML' of null)
//--> also populated DOM with the array above
  document.querySelector(".show-info").innerHTML = HTMLRepresentation
}
