/*$.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop()+5,
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width()-10;
    viewport.bottom = viewport.top + win.height()-10;

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth()-10;
    bounds.bottom = bounds.top + this.outerHeight()-10;
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};*/

// INIT
google.load("visualization", "1", {packages: ["corechart"]});

/*        *********GLOBAL CHARTS DATA**********        */


/* GRAFICO TEMPI MPI */
var barTimeExe2Task = 
  	[['Rilevamenti', 'Accuratezza', 'Velocità', 'Errori'], 
  	['1 ', 20, 100, 80], 
  	['2 ', 50, 80, 50], 
  	['3 ', 65, 60, 35],
    ['4 ', 75, 40, 25],
    ['5 ', 80, 20, 20]];
var barTimeExeMedie = 
  	[['NumeroPunti', 'seq', '2 Task', '4 Task', '8 Task', '16 Task'], 
  	['20.000 ', 9.5, 5, 2.8, 2.3, 2.75], 
  	['40.000 ', 38.6, 20, 10.9, 9.1, 9.75], 
  	['80.000 ', 155.3, 79.1, 43.1, 36, 36.5]];
var optionsTimeExe = {
    annotations: {
	    textStyle: {
	      fontName: 'Times-Roman',
	      fontSize: 18,
	      bold: true,
	      italic: true,
	      // The color of the text.
	      color: '#871b47',
	      // The color of the text outline.
	      auraColor: '#d799ae',
	      // The transparency of the text.
	      opacity: 0.8
	    }
    },
    series: {
	  0: {
	    annotations: {
	      textStyle: {fontSize: 12, color: 'red' }
	    }
	  }
  	},
  	curveType: 'function',
  	pointSize: 5,
    	focusTarget: 'category',
      //title: 'Comunicazioni per Task',
      colors: ['#5a5', '#48c', '#c66','#ff6038'],
      legend: { position: 'bottom', maxLines: 2 },
      vAxis: {
        format: '#\'%\'',
        baselineColor: '#DDD',
        gridlines: {
          color: '#DDD',
          count: 5
        },
        textStyle: {
          fontSize: 14
        }
      },animation: {
        duration: 500,
        easing: 'out',
  	  startup: true
      }
    };

/* GRAFICO SPEEDUP MPI */
/*var barSpeedUpMpiContSx = 
  	[[lang_now.nT,'20.000 '+lang_now.p, '40.000 '+lang_now.p, '80.000 '+lang_now.p], 
  	['2 Task', (8.9/4.8),(35.4/19.1), (143/75) ], 
  	['4 Task', (8.9/2.6), (35.4/10.10), (143/40.4)], 
  	['8 Task',  (8.9/2.2), (35.4/8.5), (143/33.6)],
  	['16 Task',  (8.9/2.8), (35.4/9.7), (143/36.1)]];
var barSpeedUpMpiContDx = 
  	[[lang_now.nT,'20.000 '+lang_now.p, '40.000 '+lang_now.p, '80.000 '+lang_now.p], 
  	['2 Task', (8.9/4.6),(35.5/18), (144/73) ], 
  	['4 Task', (8.9/2.6), (35.5/9.5), (144/39.3)], 
  	['8 Task',  (8.9/2.2), (35.5/8.5), (144/33.8)],
  	['16 Task',  (8.9/2.7), (35.5/9.8), (144/36.9)]];
var barSpeedUpMpiContSim = 
  	[[lang_now.nT,'20.000 '+lang_now.p, '40.000 '+lang_now.p, '80.000 '+lang_now.p], 
  	['2 Task', (10.2/5.6),(41.7/22.3), (167/89) ], 
  	['4 Task', (10.2/3.2), (41.7/11.7), (167/49.8)], 
  	['8 Task',  (10.2/2.7), (41.7/10.3), (167/40.7)]
  	//,['16 Task',  (10.2/1000), (41.7/1000), (167/1000)]
  	];
var optionsSpeedUp = {
  curveType: 'function',
  pointSize: 5,
  backgroundColor: 'transparent',
  colors: ['#5a5', '#48c', '#c66'],
  legend: { position: 'bottom', maxLines: 2 },
  focusTarget: 'category',
  hAxis: {
    textStyle: {
      fontSize: 11
    },
    baselineColor: 'transparent',
    gridlines: {
      color: 'transparent'
    }
  },
  vAxis: {
    minValue: 0,
    baselineColor: '#DDD',
    gridlines: {
      color: '#DDD',
      count: 6
    },
    textStyle: {
      fontSize: 11
    }
  },
  animation: {
    duration: 500,
    easing: 'out',
		startup: true
  }
};*/
/* GRAFICO OVERHEAD */
/*var barOverhead = 
  	[[lang_now.ohAct, lang_now.ohPerc], 
  	[lang_now.ohCom, 11], 
  	[lang_now.ohSinc, 3], 
  	[lang_now.ohInit, 0.5], 
  	[lang_now.ohTerm, 0.5], 
  	[lang_now.ohSys, .5], 
  	[lang_now.ohLib, 1],
  	[lang_now.ohSched, 3], ];
var optionsOverhead = {
	//is3D: true,
	pieStartAngle: 100,
	slices: {  
            //2: {offset: 0.2},
            //3: {offset: 0.2},
            4: {offset: 0.1},
            6: {offset: 0.1},
          },
   	legend:{position:'labeled'},
    colors:['#02507c','#086da8','#0089d8','#37a5e5','#66b5e2','#7ebfe5','#9acdea']
  };
*/
/* CHARTS SETUP */


google.setOnLoadCallback(drawCharts);

function drawCharts() {
 
  /******************** TEMPI ESECUZIONE MPI ********************/
  var barTimeExe = google.visualization.arrayToDataTable(barTimeExe2Task);
  var chart = new google.visualization.ColumnChart(document.getElementById('acc-graph'));
  chart.draw(barTimeExe, optionsTimeExe);

  /******************** SPEED-UP ********************/
  //var barSpeedUp = google.visualization.arrayToDataTable(barSpeedUpMpiContSx);
  //var chart = new google.visualization.LineChart(document.getElementById('bar-speedup'));
  //chart.draw(barSpeedUp, optionsSpeedUp);

  /******************** TEMPO DI Overhead ********************/
  //var barOH = google.visualization.arrayToDataTable(barOverhead);
  //var chart = new google.visualization.PieChart(document.getElementById('bar-overhead'));
  //chart.draw(barOH, optionsOverhead);

}
$(document).ready(function(){

});
