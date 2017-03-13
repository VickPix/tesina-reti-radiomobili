$.fn.isOnScreen = function(){
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
};

// INIT
google.load("visualization", "1", {packages: ["corechart"]});

/*        *********GLOBAL CHARTS DATA**********        */

/* GRAFICO TEMPI SERIALE */
var barDataSer = [
    [lang_now.numP, lang_now.time],
    ['20k '+lang_now.p,  8.9],
    ['40k '+lang_now.p,  35.4],
    ['80k '+lang_now.p,  143]
  ];
var barDataSer2 = [
    ['20.000 '+lang_now.p,  8.9, '8.9'],
    ['40.000 '+lang_now.p,  35.4, '35.4'],
    ['80.000 '+lang_now.p,  143, '143']
  ];
var barOptionsSer = {
	annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 22,
            color: '#fff',
            auraColor: 'cornflowerblue'
          }
        },
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['cornflowerblue'],
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '80%'
    },
    bar: {
      groupWidth: '80%'
    },
    hAxis: {
      textStyle: {
        fontSize: 16
      }
    },
    vAxis: {
      minValue: 0,
      baselineColor: '#DDD',
      format: '#\'s\'',
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 14
      }
    }
  };

/* GRAFICO TEMPI SERIALE-MPI */  
var barSerMpi0 = 
  	[[lang_now.numP,lang_now.seq, 'MPI (2 task)' ], 
  	['20.000 '+lang_now.p, 8.9, 4.8], 
  	['40.000 '+lang_now.p, 35.4, 19.1], 
  	['80.000 '+lang_now.p, 143, 75]];
var barSerMpi1 = 
  	[[lang_now.numP, lang_now.seq, 'MPI (2 task)', 'MPI (4 task)', 'MPI (8 task)', 'MPI (16 task)'], 
  	['20.000 '+lang_now.p, 8.9, 4.8, 2.6, 2.2, 2.8], 
  	['40.000 '+lang_now.p, 35.4, 19.1, 10.1, 8.5, 9.7], 
  	['80.000 '+lang_now.p, 143, 75, 40.4, 33.6, 36.1]];
var optionsSerMpi = {
	annotations: {
          alwaysOutside: true,
          textStyle: {
            fontSize: 16
          }
        },
  	focusTarget: 'category',
    colors: ['#48c','#5a5'],
    legend: { position: 'bottom', maxLines: 2 },
    vAxis: {
      minValue: 0,
      maxValue:150,
      format: '#\'s\'',
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4
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
/* GRAFICO TEMPI MPI */
var barTimeExe2Task = 
  	[[lang_now.numP, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['20.000 '+lang_now.p, 4.8, 4.6, 5.6], 
  	['40.000 '+lang_now.p, 19.1, 18.4, 22.5], 
  	['80.000 '+lang_now.p, 75, 73.5, 89]];
var barTimeExe4Task = 
  	[[lang_now.numP, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['20.000 '+lang_now.p, 2.6, 2.6, 3.2], 
  	['40.000 '+lang_now.p, 10.1, 9.5, 13.1], 
  	['80.000 '+lang_now.p, 40.4, 39.3, 49.8]];
var barTimeExe8Task = 
  	[[lang_now.numP, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['20.000 '+lang_now.p, 2.2, 2.2, 2.7], 
  	['40.000 '+lang_now.p, 8.5, 8.5, 10.3], 
  	['80.000 '+lang_now.p, 33.6, 33.8, 40.7]];
var barTimeExe16Task = 
  	[[lang_now.numP, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['20.000 '+lang_now.p, 2.8, 2.7, 0], 
  	['40.000 '+lang_now.p, 9.7, 9.8, 0], 
  	['80.000 '+lang_now.p, 36.1, 36.9, 0]];
var barTimeExeMedie = 
  	[[lang_now.numP, lang_now.seq, '2 Task', '4 Task', '8 Task', '16 Task'], 
  	['20.000 '+lang_now.p, 9.5, 5, 2.8, 2.3, 2.75], 
  	['40.000 '+lang_now.p, 38.6, 20, 10.9, 9.1, 9.75], 
  	['80.000 '+lang_now.p, 155.3, 79.1, 43.1, 36, 36.5]];
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
      format: '#\'s\'',
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
var barSpeedUpMpiContSx = 
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
  };
/* GRAFICO Efficienza con numero di punti */
var barEffMpiContSx = 
  	[[lang_now.nT,'20.000 '+lang_now.p, '40.000 '+lang_now.p, '80.000 '+lang_now.p], 
  	[lang_now.seq, 100*1, 100*1, 100*1],
  	['2 task', 100*1.854/2, 100*1.853/2, 100*1.907/2], 
  	['4 task', 100*3.423/4, 100*3.505/4, 100*3.54/4], 
  	['8 task', 100*4.045/8, 100*4.165/8, 100*4.256/8],
  	['16 task', 100*3.179/16, 100*3.649/16, 100*3.961/16]];
var barEffMpiContDx = 
  	[[lang_now.nT,'20.000 '+lang_now.p, '40.000 '+lang_now.p, '80.000 '+lang_now.p], 
  	[lang_now.seq, 100*1, 100*1, 100*1],
  	['2 task', 100*1.935/2, 100*1.972/2, 100*1.973/2], 
  	['4 task', 100*3.423/4, 100*3.737/4, 100*3.664/4], 
  	['8 task', 100*4.045/8, 100*4.176/8, 100*4.26/8],
  	['16 task', 100*3.296/16, 100*3.622/16, 100*3.902/16]];
var barEffMpiContSim = 
  	[[lang_now.nT,'20.000 '+lang_now.p, '40.000 '+lang_now.p, '80.000 '+lang_now.p], 
  	[lang_now.seq, 100*1, 100*1, 100*1],
  	['2 task', 100*1.821/2, 100*1.87/2, 100*1.876/2], 
  	['4 task', 100*3.187/4, 100*3.564/4, 100*3.353/4], 
  	['8 task', 100*3.778/8, 100*4.049/8, 100*4.103/8]];
var optionsEff = {
	curveType: 'linear',
	pointSize: 5,
  	focusTarget: 'category',
    //title: 'Efficienza',
    colors: ['#5a5', '#48c', '#c66'],
    legend: { position: 'bottom', maxLines: 2 },
    vAxis: {
    	maxValue:100,
      format: '#\'%\'',
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        //count: 4
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
/* GRAFICO TEMPI DI COMUNICAZIONE */
var barTimeCom40p = 
  	[['NumeroPunti', 'MPI (16core)', 'MPI (8core)', 'MPI (4core)', 'MPI (2core)', lang_now.seq], 
  	['20k punti', 2.8, 2.2, 2.6, 4.8, 8.9], 
  	['40k punti', 9.7, 8.5, 10.1, 19.1, 35.4], 
  	['80k punti', 36.1, 33.6, 40.4, 75, 143]];
var barTimeComTask = 
  	[[lang_now.nT, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['2', 19.1-(35.8/2), 18-(35.5/2), 22.5-(41.7/2)], 
  	['4', 10.1-(35.8/4), 9.5-(35.5/4), 13.1-(41.7/4)], 
  	['8', 8.5-(35.8/8), 8.5-(35.5/8), 10.3-(41.7/8)],
  	['16', 9.7-(35.8/16), 9.8-(35.5/16),'N/D']];
var barTimeCom2Task = 
  	[[lang_now.numP, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['20.000 '+lang_now.p, 4.8-(8.9/2), 4.6-(8.9/2), 5.6-(10.2/2)], 
  	['40.000 '+lang_now.p, 19.1-(35.4/2), 18.4-(35.5/2), 22.5-(41.7/2)], 
  	['80.000 '+lang_now.p, 75-(143/2), 73.5-(143/2), 89-(167/2)]];
var barTimeCom4Task = 
  	[[lang_now.numP, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['20.000 '+lang_now.p, 2.6-(8.9/4), 2.6-(8.9/4), 3.2-(10.2/4)], 
  	['40.000 '+lang_now.p, 10.1-(35.4/4), 9.5-(35.5/4), 13.1-(41.7/4)], 
  	['80.000 '+lang_now.p, 40.4-(143/4), 39.3-(143/4), 49.8-(167/4)]];
var barTimeCom8Task = 
  	[[lang_now.numP, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['20.000 '+lang_now.p, 2.2-(8.9/8), 2.2-(8.9/8), 2.7-(10.2/8)], 
  	['40.000 '+lang_now.p, 8.5-(35.4/8), 8.5-(35.5/8), 10.3-(41.7/8)], 
  	['80.000 '+lang_now.p, 33.6-(143/8), 33.8-(143/8), 40.7-(167/8)]];
var barTimeCom16Task = 
  	[[lang_now.numP, 'MpiContSx', 'MpiContDx', 'MpiContSim'], 
  	['20.000 '+lang_now.p, 2.8-(8.9/16), 2.7-(8.9/16), 0], 
  	['40.000 '+lang_now.p, 9.7-(35.4/16), 9.8-(35.5/16), 0], 
  	['80.000 '+lang_now.p, 36.1-(143/16), 36.9-(143/16), 0]];
var barTimeComMedie = 
  	[[lang_now.numP, '2 Task', '4 Task', '8 Task', '16 Task'], 
  	['20.000 '+lang_now.p, 0.33, 0.47, 1.2, 2.194], 
  	['40.000 '+lang_now.p, 1.23, 1.52, 4.4, 7.534], 
  	['80.000 '+lang_now.p, 3.66, 5.41, 17.16, 27.563]];
var optionsTimeCom = {
	curveType: 'function',
	pointSize: 5,
  	focusTarget: 'category',
    colors: ['#5a5', '#48c', '#c66','#ff6038'],
    legend: { position: 'bottom', maxLines: 2 },
    vAxis: {
      format: '#\'s\'',
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 5
      },
      textStyle: {
        fontSize: 14
      }
    },
    animation: {
      duration: 500,
      easing: 'out',
	  startup: true
    }
  };
/* GRAFICO OVERHEAD */
var barOverhead = 
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

/* CHARTS SETUP */


google.setOnLoadCallback(drawCharts);

function drawCharts() {
  /******************** TEMPI ESECUZIONE SERIALE ********************/
	var data = new google.visualization.DataTable();
  data.addColumn('string', 'Totale punti');
  data.addColumn('number', lang_now.timeSec);
  data.addColumn({type: 'string', role: 'annotation'});
	data.addRows(barDataSer2);
	var chart = new google.visualization.ColumnChart(document.getElementById('bar-chartser'));
  chart.draw(data, barOptionsSer);
   
  //var DataSer = google.visualization.arrayToDataTable(barDataSer);
  //var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chartser'));
  //barChart.draw(DataSer, barOptionsSer);

  /******************** CONFRONTO SERIALE - MPI ********************/
  var barSerMpi= google.visualization.arrayToDataTable(barSerMpi0);
  
  var view = new google.visualization.DataView(barSerMpi);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2,
                       { calc: "stringify",
                         sourceColumn: 2,
                         type: "string",
                         role: "annotation" }]);

  var chart = new google.visualization.ColumnChart(document.getElementById('bar-sermpi'));
  //chart.draw(barSerMpi, optionsSerMpi);
  chart.draw(view, optionsSerMpi);

  /******************** TEMPI ESECUZIONE MPI ********************/
  var barTimeExe = google.visualization.arrayToDataTable(barTimeExe2Task);
  var chart = new google.visualization.ColumnChart(document.getElementById('bar-timeexe'));
  chart.draw(barTimeExe, optionsTimeExe);

  /******************** SPEED-UP ********************/
  var barSpeedUp = google.visualization.arrayToDataTable(barSpeedUpMpiContSx);
  var chart = new google.visualization.LineChart(document.getElementById('bar-speedup'));
  chart.draw(barSpeedUp, optionsSpeedUp);

  /******************** EFFICIENZA ********************/
  var barEff = google.visualization.arrayToDataTable(barEffMpiContSx);
  var chart = new google.visualization.LineChart(document.getElementById('bar-eff'));
  chart.draw(barEff, optionsEff);

  /******************** TEMPO DI Overhead ********************/
  var barOH = google.visualization.arrayToDataTable(barOverhead);
  var chart = new google.visualization.PieChart(document.getElementById('bar-overhead'));
  chart.draw(barOH, optionsOverhead);

  /******************** TEMPO DI COMUNICAZIONE ********************/
  var barTimeCom = google.visualization.arrayToDataTable(barTimeCom2Task);
  var chart = new google.visualization.ColumnChart(document.getElementById('bar-timecom'));
  chart.draw(barTimeCom, optionsTimeCom);
}
$(document).ready(function(){

	$('.hpc_array').on('click',function(){
		$(".hpc_array img").fadeTo(500,0.50, function() {
		      $(".hpc_array img").attr("src",($(".hpc_array img").attr("src")=='./img/hpc_mpi.png')?"./img/hpc_array.png":"./img/hpc_mpi.png");
		  }).fadeTo(500,1);
	});
	$('.hpc_mpi').on('click',function(){
		$(".hpc_mpi img").fadeTo(500,0.50, function() {
		      $(".hpc_mpi img").attr("src",($(".hpc_mpi img").attr("src")=='./img/hpc_mpi.png')?"./img/hpc_mpisx.png":"./img/hpc_mpi.png");
		  }).fadeTo(500,1);
	});


	$('.tab-item').on('click',function(e){
		e.preventDefault();
		var id = $(this).parent().attr("id").substr(3);
		//console.log(id);
		var chartId = 'bar-'+id.toLowerCase();
		$('#'+chartId).html("");
		$('#tab'+id+'>.active').removeClass('active');
		$(this).addClass('active');
		var tab=$(this)[0].innerText.trim();
		if(tab=='Average') {
			tab='Medie';
			//chartId='bar-timeexeaverage';
		}
    if(tab=='Medie' && id.trim()=='TimeExe')
      optionsTimeExe.colors= ['#555','#5a5', '#48c', '#c66','#ff6038'];
    else
      optionsTimeExe.colors= ['#5a5', '#48c', '#c66','#ff6038'];

    //console.log(chartId);
		if(tab=='Medie' || id.trim()=='TimeExe' || id.trim()=='TimeCom')
			var chart = new google.visualization.ColumnChart(document.getElementById(chartId));
  		else
			var chart = new google.visualization.LineChart(document.getElementById(chartId));
  	chart.draw(google.visualization.arrayToDataTable(eval('bar'+id+tab)), eval('options'+id));
	});

	$('.last').on('click',function(e){
		location.hash = "#Intro";
		$('.modal').addClass('active');
	});

	$('.modal').on('click',function(e){
		$('.modal').removeClass('active');
	});
	$('.menu').on('click',function() {
		$('.menu').addClass('active');
	});
	$('.menu-item').on('click',function(e){
		/*var lang = $(this)[0].innerText.substr(0, 2);
		$().translate(eval(lang.toLowerCase()));
		lang_now=eval(lang.toLowerCase());
		$('a.dropdown-toggle').html(lang+' <img style="max-width:18px;" src="./img/'+lang.toLowerCase()+'.png"><i class="icon-caret"></i>');
		*/
		//window.location.href = window.location+'#'+$(this)[0].innerText.substr(0, 2);
		location.reload();
	});


	/***************************/


	$("body").on("keydown", function(event) {
		
	    var elements=[".modal",".btn.start, .graph","#barSerMpiCheck",".hpc_array",".hpc_mpi",".tab-item",".last"];
	    if(event.keyCode==13){
	    	event.preventDefault();
	    	$.each(elements, function( index, value ) {
	    		var elView = $(value+":in-viewport");
				if(elView.length==1 && $(elView).isOnScreen()){
					//console.log(elView);
					$(elView).click();
			    	$(value+">input").blur();
			  	}else{
					if(elView.length>1){
						var tabId = "#"+elView.parent().attr("id");
						var next = $(tabId).find('.active').next('.tab-item');
						if ($(tabId).find('.active')[0].innerText==$(tabId).find('.tab-item').last()[0].innerText)
							next=$(tabId).find('.tab-item')[0];
						next.click();
					}
				}
			});
	    }
	});



});
