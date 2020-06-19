// This is where all the missions are defined for the season. Ideally, each season, you only have to edit this file, but there are some small areas that need to be changed elsewhere.
// This uses html.js to draw all the missions to the screen.
// Mission loader v2.0 Dynamic Content Replacer



// Defines a blank save for reset

blanksave = "elevated1|0,elevated2|0,crane1|0,crane2|0,crane3|0,inspection1|0,wildlife1|0,treehouse1|0,treehouse2|0,traffic1|0,swing1|0,elevator1|0,elevator2|0,safety1|0,steel1|0,innovative1|0,innovative2|0,design1|1,design2|1,sustainability1|0,advantage1|0,precision1|6"

google_headers = [
      // Cell values ...
      "Total Points","Date/Time", "Round #", "Team #", "M01a", "M01b", "M02a", "M02b", "M02c", "M03", "M04", "M05a", "M05b", "M06", "M07", "M08a", "M08b", "M09", "M10", "M11a", "M11b", "M12a", "M12b", "M13", "A00", "M14"
    ]

// Override function in scoring system during the checking for button conflicts
specialCasesComplete = 0
function specialCasesCheck(mission) {
    if (specialCasesComplete != 1){
	specialCasesComplete = 1

	// if (document.getElementById("yescrane2").checked == true) { usedBlocks = 1 }
	// else {usedBlocks = 0}
	if (document.getElementById("yescrane3").checked == true) { usedBlocks = 1; totalBlocks = 16; blueCount = 4; maxTotalHeight = 28}
	else {usedBlocks = 0; totalBlocks = 17; blueCount = 5; maxTotalHeight = 29}
	

	if (mission=="treehouse1" || mission =="crane3") {
	    if (parseInt(document.getElementById('treehouse2').value) + parseInt(document.getElementById('treehouse1').value) > (totalBlocks - usedBlocks)) {
		if ((totalBlocks - parseInt(document.getElementById('treehouse1').value) - usedBlocks) >= 0){
		    document.getElementById('treehouse2').value = totalBlocks - parseInt(document.getElementById('treehouse1').value) - usedBlocks
		    recalc(window['treehouse2'+'inc']*document.getElementById('treehouse2').value,'treehouse2',document.getElementById('treehouse2').value)
		}
		else {
		    document.getElementById('treehouse1').value = totalBlocks - parseInt(document.getElementById('treehouse2').value) - usedBlocks
		    recalc(window['treehouse1'+'inc']*document.getElementById('treehouse1').value,'treehouse1',document.getElementById('treehouse1').value)
		}
		    
		//  treehouse2save = document.getElementById('treehouse2')*8
		//   treehouse2 = document.getElementById('treehouse2')*8

	    }
	}
	if (mission=="treehouse2" || mission =="crane3") {
	    if (parseInt(document.getElementById('treehouse1').value) + parseInt(document.getElementById('treehouse2').value) > (totalBlocks - usedBlocks)) {
		if ((totalBlocks - parseInt(document.getElementById('treehouse2').value) - usedBlocks) >= 0) {
		    document.getElementById('treehouse1').value = totalBlocks - parseInt(document.getElementById('treehouse2').value) - usedBlocks
		    recalc(window['treehouse1'+'inc']*document.getElementById('treehouse1').value,'treehouse1',document.getElementById('treehouse1').value)
		}
		else {
		    document.getElementById('treehouse2').value = totalBlocks - parseInt(document.getElementById('treehouse1').value) - usedBlocks
		    recalc(window['treehouse2'+'inc']*document.getElementById('treehouse2').value,'treehouse2',document.getElementById('treehouse2').value)
		}		    
	    }
	}
	usedBlocks += parseInt(document.getElementById('treehouse1').value) + parseInt(document.getElementById('treehouse2').value)


	if (mission=="design1") {
	    if (parseInt(document.getElementById('design1').value) > (totalBlocks - usedBlocks)) {
		document.getElementById('design1').value = totalBlocks - usedBlocks
		recalc(window['design1'+'inc']*document.getElementById('design1').value,'design1',document.getElementById('design1').value)
	    }
	    // if you want to allow for teams to incorrectly do level 1....
	    if (parseInt(document.getElementById('design1').value) > parseInt(document.getElementById('design2').value)) {
	     	document.getElementById('design2').value = document.getElementById('design1').value
	     	recalc(window['design2'+'inc']*document.getElementById('design2').value,'design2',document.getElementById('design2').value)
	    }
	}
	if (mission=="design2" || mission=="treehouse1" || mission=="treehouse2" || mission =="crane3") {
	    if (usedBlocks > blueCount) {
		maxHeight = maxTotalHeight - blueCount - (2 * (usedBlocks - blueCount))
	    }
	    else {
		maxHeight = maxTotalHeight - usedBlocks
	    }
	    if (parseInt(document.getElementById('design2').value) > maxHeight) {
		document.getElementById('design2').value = maxHeight
		recalc(window['design2'+'inc']*document.getElementById('design2').value,'design2',document.getElementById('design2').value)
	    }
	    if (parseInt(document.getElementById('design1').value) > (totalBlocks - usedBlocks)) {
		document.getElementById('design1').value = totalBlocks - usedBlocks
		recalc(window['design1'+'inc']*document.getElementById('design1').value,'design1',document.getElementById('design1').value)
	    }
	    if (parseInt(document.getElementById('design1').value) > parseInt(document.getElementById('design2').value)) {
	     	document.getElementById('design1').value = document.getElementById('design2').value
	     	recalc(window['design1'+'inc']*document.getElementById('design1').value,'design1',document.getElementById('design1').value)
	    }

	}
	specialCasesComplete = 0
    }
}

// Override function when calculating points for each mission
function specialCasesRecalc(mission) {
    if (specialCasesComplete != 1){
	specialCasesComplete = 1
	if (document.getElementById("precision1").value == 1) {
	    recalc(document.getElementById("precision1").value*5,'precision1',document.getElementById("precision1").value);
	}
	if (document.getElementById("precision1").value == 2) {
	    recalc(document.getElementById("precision1").value*5,'precision1',document.getElementById("precision1").value);
	}
	if (document.getElementById("precision1").value == 3) {
	    recalc(document.getElementById("precision1").value*(20/3),'precision1',document.getElementById("precision1").value);
	}
	if (document.getElementById("precision1").value == 4) {
	    recalc(document.getElementById("precision1").value*(30/4),'precision1',document.getElementById("precision1").value);
	}
	if (document.getElementById("precision1").value == 5) {
	    recalc(document.getElementById("precision1").value*(9),'precision1',document.getElementById("precision1").value);
	}
	if (document.getElementById("precision1").value == 6) {
	    recalc(document.getElementById("precision1").value*(10),'precision1',document.getElementById("precision1").value);
	}
	if (document.getElementById("yesadvantage1").checked == true) {
	    counter = 0
	    points = 0
	    while (counter < all_mission.length){
		if (all_mission[counter][0] == "M14" || all_mission[counter][0] == "A00") {

		}
		else if (document.getElementById(all_mission[counter][0]+"pts").innerHTML != "0") {
		    if (all_mission[counter][0] == "M02") {
			points = points + 10
		    } else {
			points = points + 5
		    }
		}
		counter = counter+1
	    }
	    recalc(points,'advantage1',1)

	    // store = getvar()
	    // n = store.length-3
	    // x = 0
	    // points = 0
	    // while (x < n) {
	    // 	//console.log(store[x][0])
	    // 	if (parseInt(store[x][0].split("|")[1]) != 0) {
	    // 		//alert("5")
	    // 		points = points + 5
	    // 	}
	    // 	x = x+1
	    // }
	    // recalc(points,'advantage1',1)
	}
	specialCasesComplete = 0
    }
}



// Translate Mission id to FLL id

missionDict = {
    elevated1: "M01a",
    elevated2: "M01b",
    crane1: "M02a",
    crane2: "M02b",
    crane3: "M02c",
    inspection1: "M03",
    wildlife1: "M04",
    treehouse1: "M05a",
    treehouse2: "M05b",
    traffic1: "M06",
    swing1: "M07",
    elevator1: "M08a",
    elevator2: "M08b",
    safety1: "M09",
    steel1: "M10",
    innovative1: "M11a",
    innovative2: "M11b",
    design1: "M12a",
    design2: "M12b",
    sustainability1: "M13",
    advantage1: "A00",
    precision1: "M14"
}

// Draw the layout


starttable('A00',"A00", 'A00.jpg', ['advantage1'], 1)
createbutton("advantage1", 5 ,"A00a")
createcomment("A00b")
endtable()

starttable('M01', "M01" , 'M01.jpg' , ['elevated1','elevated2'], 0)
createbutton("elevated1", 20, "M01a")
createrange("elevated2",15,0,2,0,"M01b")
createsliderenables2("elevated2","elevated1")
endtable()

starttable('M02',"M02",'M02.jpg', ['crane1','crane2','crane3'], 0)
createbutton("crane1", 20 , "M02a")
createbutton("crane2", 15 , "M02b")
createbutton("crane3", 15 , "M02c")
createbuttonenables("crane1","crane2",1)
createbuttonenables("crane2","crane3",1)
endtable()

starttable('M03', "M03",'M03.jpg', ['inspection1'], 0) //1 = Note Present
createbutton("inspection1", 10 ,"M03a")
endtable()

starttable('M04', "M04",'M04.jpg', ['wildlife1'], 0)
createbutton("wildlife1",10 ,"M04a")
endtable()

starttable('M05', "M05", 'M05.jpg' , ['treehouse1','treehouse2'], 0)
createrange("treehouse1",10,0,17,0,"M05a")
createrange("treehouse2",15,0,17,0,"M05b")
endtable()

starttable('M06', "M06", 'M06.jpg', ['traffic1'], 0)
createbutton("traffic1", 10,"M06a")
endtable()

starttable('M07', "M07", 'M07.jpg' , ['swing1'], 0)
createbutton("swing1", 20,"M07a")
endtable()

starttable('M08', "M08", 'M08.jpg', ['elevator1', 'elevator2'], 0)
createbutton("elevator1", 15 ,"M08a")
createbutton("elevator2", 20 ,"M08b")
createbuttonconflict('elevator1','elevator2','')
endtable()

starttable('M09', "M09", 'M09.jpg' , ['safety1'], 1)
createrange("safety1",10,0,6,0,"M09a")
createcomment("M09b")
endtable()

starttable('M10', "M10", 'M10.jpg' , ['steel1'], 0)
createbutton("steel1", 20 ,"M10a")
endtable()

starttable('M11',"M11", 'M11.jpg' , ['innovative1','innovative2'], 1)
createbutton("innovative1", 15,"M11a")
createbutton("innovative2", 10,"M11b")
createcomment("M11c")
createbuttonconflict('innovative1','innovative2','')
endtable()

starttable('M12',"M12", 'M12.jpg', ['design1','design2'], 1)
createrange("design1", 10 , 0, 3, 1,"M12a",'')
createrange("design2", 5 , 0, 29, 1,"M12b",'')
createcomment("M12c")
endtable()

starttable('M13',"M13", 'M13.jpg', ['sustainability1'], 0)
createrange("sustainability1", 10 , 0, 3, 0,"M13a",'')
endtable()

starttable('M14',"M14", 'M14.jpg', ['precision1'], 0)
createrange("precision1", 10 , 0, 6, 6,"M14a",'')
endtable()

/*
window.onload = function() {
check_missions()
recalc(0,"advantage1",0)
}
*/
