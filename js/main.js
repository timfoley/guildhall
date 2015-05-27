
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1ZBKNxsXDaNGrP63jYHISp3ckbsxvV0SUwD8VNbllVC4/pubhtml';

var tabletop = Tabletop.init({
  key: "https://docs.google.com/spreadsheets/d/1ZBKNxsXDaNGrP63jYHISp3ckbsxvV0SUwD8VNbllVC4/pubhtml",
  callback: sheetLoad,
  simpleSheet: false
})



function sheetLoad( data, tabletop ){
  render( data )
  console.log( data )
  console.log('something')
}


function render( context ){
  var template = $("#guilds-template").html()
  var compile = Handlebars.compile( template )
  var html = compile( { guild: context } )
  $(".guild-profiles").html( html ).show()
}


// render(tabletop.data().Details.all());
