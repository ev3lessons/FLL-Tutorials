store = []
function getvar() {
  count = 0
  count1 = 0
  store = []
  while (count < all_mission.length){
    count1 = 0
    while (count1 < all_mission[count][1].length) {
      store = store.concat([[ ""+all_mission[count][1][count1] +"|"+ window[all_mission[count][1][count1]+'save']+""]])
      //alert([[ all_mission[count][1][count1] , window[all_mission[count][1][count1]]]])
      count1 = count1+1
    }
    count = count + 1
  }
  //alert(store)
}
function loadsave(save) {
  newsave = String(save).split(',')
  count = 0
  count1 = 0
  while (count < save.length-1){
    save1 = newsave[count].split('|')
    //alert(save1[0])
    if (document.getElementById('yes'+save1[0]) != null) {
      if (parseInt(save1[1]) != 0)  {
        document.getElementById('yes'+save1[0]).click()
      } else {
        document.getElementById('no'+save1[0]).click()

      }
    } else {
      //	    document.getElementById(save1[0]).value = parseInt(save1[1])
      $("#"+save1[0]).val(parseInt(save1[1])).slider("refresh");
      //alert(save1)
      //alert(window[save1[0]+'inc'])
      recalc(window[save1[0]+'inc']*parseInt(save1[1]),save1[0],1)
    }
    count = count + 1

  }
}
function saver() {
  getvar();
  window.localStorage.DRAAscorer = window.localStorage.DRAAscorer + '/' + store
  alert('saved');
}
function loader(save) {
  alert('loaded');
  data = window.localStorage.DRAAscorer.split('/')[save];
  //alert(data)
  loadsave(String(data));
}


function drawBasic() {
  vv = 0;

  nn = 1;
  array = [];
  array[0] = parseInt(window.localStorage.DRAA1scorer.split(' Points')[0].split(',')[0]);
  vvv = 1;
  lt = window.localStorage.DRAA1scorer.split(',').length - 0;
  while (vvv < lt) {
    array[nn] = parseInt(window.localStorage.DRAA1scorer.split(' Points')[vvv].split(',')[1]);
    vvv = vvv + 1;
    nn = nn+1;
  }
  //format:'#,###%'

  /*	     if (array[2] != undefined){
  array[2] = parseInt(window.localStorage.DRAA1scorer.split(' Points')[2].split(',')[1]);
}*/
//    array = cleanArray(array);
//   array[2] = parseInt(window.localStorage.DRAA1scorer.split(' Points')[2].split(',')[1]);
//   array[3] = parseInt(window.localStorage.DRAA1scorer.split(' Points')[3].split(',')[1]);



$(function () {
  $('#container').highcharts({
    title: {
      text: GraphTitle,
      x: -20 //centre
    },
    subtitle: {
      // text: 'Sou rce: WorldClimate.com',
      x: -20
    },
    xAxis: {
      tickInterval: 1,
      minRange: 1,
      allowDecimals: false,
      //startOnTick: true,
      //endOnTick: true
    },
    yAxis: {
      title: {
        text: PointsLang
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      //   valueSuffix: '°C'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: GraphLegend,
      data: array,
    }]
  });
});



}


function loadsaves() {
  n = 0;
  a = window.localStorage.DRAA1scorer.split(',').length;
  document.getElementById('saves').innerHTML = "";
  while(n < a) {
    //alert(n)
    document.getElementById('saves').innerHTML = document.getElementById('saves').innerHTML +' Save '+ String(n+1) + ': ' +  window.localStorage.DRAA1scorer.split(',')[n] + '<br>'  ;
    n = n+1;
    //	      alert(x);
  }



}


n = 0;
//     google.load('visualization', '1', {packages: ['corechart', 'line']});
function saveLocalStorage() {
  var currentTime = new Date()
  var month = currentTime.getMonth() + 1
  var day = currentTime.getDate()
  var year = currentTime.getFullYear()
  var currentdate = month + "/" + day + "/" + year;


  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  if (minutes < 10){
    minutes = "0" + minutes
  }

  //#if(hours > 11){
  //#   var ampm = "PM";
  //#} else {
  //#   var ampm = "AM";
  //#}
  //#if (hours > 12) {
  //#   hours = hours - 12;
  //      #}
  ampm = ''
  var timex = hours + ":" + minutes + " ";

  var currenttime = timex + '' + ampm;
  //   var currenttime = timex;
  var datetime = currenttime + ' ' + currentdate;


  if (window.localStorage.DRAA1scorer != undefined && window.localStorage.DRAA1scorer != '' ) {
    window.localStorage.DRAA1scorer = String(window.localStorage.DRAA1scorer) + ',' + String( allmission) + ' Points - ' + datetime;
    //window.localStorage.DRAA1scorer =  allmission;
    //alert(allmission);
    //alert(window.localStorage.DRAA1scorer);
  } else {
    window.localStorage.DRAA1scorer =  allmission  + ' Points - ' + datetime;
    //alert(window.localStorage.DRAA1scorer + 'hi');
  }

}

if (window.localStorage.DRAA1scorer == undefined){
  window.localStorage.DRAA1scorer = ''
}
