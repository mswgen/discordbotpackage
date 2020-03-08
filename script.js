var botname = null;
var start = null;
var main = null;
var result = null;
function next(firstid, nextid, firstind, lastind){
    document.querySelector(firstid).style.display = "none";
    document.querySelector(firstind).style.display = "block";
    document.querySelector(nextid).style.display = "block";
    document.querySelector(lastind).style.display = "none";
}
function done(inputid, resultid, textid, firstind, lastind){
    document.querySelector(inputid).style.display = "none";
    result = `{\n
        "name": "` + botname + `",<br>
        "version": "1.0.0",<br>
        "description": "discord bot",<br>
        "main": "` + main + `.js",<br>
        "scripts": {<br>
            "start": "node ` + start + `.js"<br>
        },<br>
        "keywords": [<br>
          "` + botname + `"<br>
        ],<br>
        "engines": {<br>
            "node": "12.x"<br>
        },<br>
        "author": "",<br>
        "license": "UNLICENSED",<br>
        "dependencies": {<br>
            "discord.js": "^12.0.1",<br>
            "dotenv": "^8.2.0"<br>
        }<br>
      }`;
    document.querySelector(firstind).style.display = "block";
    document.querySelector(lastind).style.display = "none";
    document.querySelector(textid).innerHTML = result;
    document.querySelector(resultid).style.display = "block";
}
