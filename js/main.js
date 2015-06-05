$(document).ready(resizeCard);

$(window).resize(resizeCard);


function resizeCard() {
  $('.guild + .guild').css({
    'max-width': $('.guild:first-child').width()
    });
}



var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1ZBKNxsXDaNGrP63jYHISp3ckbsxvV0SUwD8VNbllVC4/pubhtml';

var tabletop = Tabletop.init({
  key: "https://docs.google.com/spreadsheets/d/1ZBKNxsXDaNGrP63jYHISp3ckbsxvV0SUwD8VNbllVC4/pubhtml",
  callback: sheetLoad,
  simpleSheet: false
})



function sheetLoad( data, tabletop ){
  console.log( data )
  var guildHall = data.Details.all();
  var js2 = data.js2meetings.all();
  var dat = data.datMeetings.all();
  var bewd = data.bewdMeetings.all();
  guildHall[1].meetings = js2;
  guildHall[2].meetings = dat;
  guildHall[5].meetings = bewd;

  //guildHall[0].meetings = data.js1meetings.all()

  console.log(tabletop.data())
  console.log('something')
  render(guildHall)
}


function render( context ){
  var template = $("#guilds-template").html()
  var compile = Handlebars.compile( template )
  var html = compile( { guild: context } )
  $(".guild-profiles").html( html ).show()

  var i = 0;
  while (i < context.length) {
    if (context[i].meetings != undefined) {
      var nextDate = context[i].meetings[0].date;
      var nextDateLink = context[i].meetings[0].url;
      $('.'+context[i].id+'-meeting').html("<strong>Next Meeting: </strong><a href=" + nextDateLink + ">" + nextDate);
    } else {
    }
    i++
  }
}





// $(document).ready( function() {
//   Tabletop.init( { key: public_spreadsheet_url,
//                    callback: showInfo,
//                    debug: true
//                    } );
// });
//
// function showInfo(data, tabletop) {
//   console.log('ANyTHING!');
//   var source   = $("#guilds-template").html();
//   var template = Handlebars.compile(source);
//
//   $.each( tabletop.sheets("Details").all(), function(i, guild) {
//     var html = template(guild);
//     $(".guild-profiles").append(html);
//   });
// }
