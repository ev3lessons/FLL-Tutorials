// Defines a blank save for reset

blanksave = "spacetravel1|0,spacetravel2|0,spacetravel3|0,solar1|0,solar2|0,3D1|0,3D2|0,crater|0,extraction1|0,extraction2|0,extraction3|0,extraction4|0,space1|0,space2|0,space3|0,walk|0,aerobic1|0,aerobic2|0,aerobic3|0,strength|0,food|0,escape|0,satellite|0,observatory1|0,observatory2|0,observatory3|0,meteoroid1|0,meteoroid2|0,lander1|0,lander2|0,lander3|0,penalty|0"


// Override function in scoring system

function specialCases(mission) {
    if ((mission=="meteoroid1")) {
	
        if (parseInt(document.getElementById('meteoroid2').value) + parseInt(document.getElementById('meteoroid1').value) > 2) {
            document.getElementById('meteoroid2').value = 2-parseInt(document.getElementById('meteoroid1').value)
          //  meteoroid2save = document.getElementById('meteoroid2')*8
            //   meteoroid2 = document.getElementById('meteoroid2')*8
            recalc(window['meteoroid2'+'inc']*document.getElementById('meteoroid2').value,'meteoroid2',document.getElementById('meteoroid2').value)
	    
        }
	
    }
    
    if ((mission=="meteoroid2")) {
	
        if (parseInt(document.getElementById('meteoroid1').value) + parseInt(document.getElementById('meteoroid2').value) > 2) {
            document.getElementById('meteoroid1').value = 2-parseInt(document.getElementById('meteoroid2').value)
            //  meteoroid1save = document.getElementById('meteoroid1')*8
            // meteoroid1 = document.getElementById('meteoroid1')*8
            recalc(window['meteoroid1'+'inc']*document.getElementById('meteoroid1').value,'meteoroid1',document.getElementById('meteoroid1').value)
	    
        }
	
    }
}


// Translate Mission id to FLL id

missionDict = {
    spacetravel1: "M01a",
    spacetravel2: "M01b",
    spacetravel3: "M01c",
    solar1: "M02a",
    solar2: "M02b",
    '3D1': "M03a",
    '3D2': "M03b",
    crater: "M04",
    extraction1: "M05a",
    extraction2: "M05b",
    extraction3: "M05c",
    extraction4: "M05d",
    space1: "M06a",
    space2: "M06b",
    space3: "M06c",
    walk: "M07",
    aerobic1: "M08a",
    aerobic2: "M08b",
    aerobic3: "M08c",
    strength: "M09",
    food: "M10",
    escape: "M11",
    satellite: "M12",
    observatory1: "M13a",
    observatory2: "M13b",
    observatory3: "M13c",
    meteoroid1: "M14a",
    meteoroid2: "M14b",
    lander1: "M15a",
    lander2: "M15b",
    lander3: "M15c",
    penalty: "P01"
}

// Draw the layout

starttable('M01', M01 , 'M01.png' , ['spacetravel1','spacetravel2','spacetravel3'], 0)
createbutton("spacetravel1", 22, M01a)
createbutton("spacetravel2", 14, M01b)
createbutton("spacetravel3", 10, M01c)
endtable()

starttable('M02',M02,'M02.png', ['solar1','solar2'], 0)
createbutton("solar1", 22 , M02a)
createbutton("solar2", 18 , M02b)
endtable()

starttable('M03', M03,'M03.png', ['3D1','3D2'], 0) //1 = Note Present
createbutton("3D1", 22 ,M03a)
createbutton("3D2", 18 , M03b)
createbuttonconflict('3D1','3D2','')
endtable()

starttable('M04', M04,'M04.png', ['crater'], 0)
createbutton("crater", 20 ,M04a)
endtable()

starttable('M05', M05, 'M05.png' , ['extraction1','extraction2','extraction3','extraction4'], 0)
createbutton("extraction1", 16 ,M05a)
createbutton("extraction2", 12 ,M05b)
createbutton("extraction3", 10 ,M05c)
createbutton("extraction4", 8 ,M05d)
createbuttonconflict('extraction2','extraction3','')
endtable()

starttable('M06',M06, 'M06.png', ['space1','space2','space3'], 0)
createbutton("space1", 16,M06a)
createbutton("space2", 16,M06b)
createbutton("space3", 14,M06c)
endtable()

starttable('M07',M07, 'M07.png' , ['walk'], 0)
create3button("walk", 18, 22,M07a)
endtable()

starttable('M08',M08, 'M08.png', ['aerobic1', 'aerobic2','aerobic3'], 0)
createbutton("aerobic1", 22 ,M08a)
createbutton("aerobic2", 20 ,M08b)
createbutton("aerobic3", 18 ,M08c)
createbuttonconflict('aerobic2','aerobic3','')
createbuttonconflict('aerobic1','aerobic2','')
createbuttonconflict('aerobic1','aerobic3','')
endtable()

starttable('M09',M09, 'M09.png' , ['strength'], 0)
createbutton("strength", 16 ,M09a)
endtable()

starttable('M10',M10, 'M10.png' , ['food'], 0)
createbutton("food", 16 ,M10a)
endtable()

starttable('M11',M11, 'M11.png' , ['escape'], 0)
createbutton("escape", 24,M11a)
endtable()

starttable('M12',M12, 'M12.png', ['satellite'], 0)
createrange("satellite", 8 , 0, 3, 0,M12a,'')
endtable()

starttable('M13',M13, 'M13.png', ['observatory1', 'observatory2','observatory3'], 0)
createbutton("observatory1", 20 ,M13a)
createbutton("observatory2", 18 ,M13b)
createbutton("observatory3", 16 ,M13c)
createbuttonconflict('observatory1','observatory2','')
createbuttonconflict('observatory2','observatory3','')
createbuttonconflict('observatory1','observatory3','')
endtable()

starttable('M14',M14, 'M14.png', ['meteoroid1','meteoroid2'], 0)
createrange("meteoroid1", 12 , 0, 2, 0,M14a,'')
createrange("meteoroid2", 8 , 0, 2, 0,M14b,'')
endtable()

starttable('M15',M15, 'M15.png', ['lander1','lander2','lander3'], 0)
createbutton("lander1", 22 ,M15a)
createbutton("lander2", 20 , M15b)
createbutton("lander3", 16 ,M15c)
createbuttonconflict('lander1','lander2','')
createbuttonconflict('lander2','lander3','')
createbuttonconflict('lander1','lander3','')
endtable()

starttable('P01',P01, 'penalty.png', ['penalty'], 0)
createrange("penalty", -3 , 0, 6, 0,P01a,'')
endtable()
