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
        "name": "` + botname + `",\n
        "version": "1.0.0",\n
        "description": "discord bot",\n
        "main": "` + main + `.js",\n
        "scripts": {\n
          "start": "node ` + start + `.js"\n
        },\n
        "keywords": [\n
          "` + botname + `"\n
        ],\n
        "author": "",\n
        "license": "UNLICENSED",\n
        "dependencies": {\n
          "discord.js": "^11.6.1"\n
        }\n
      }`;
    document.querySelector(firstind).style.display = "block";
    document.querySelector(lastind).style.display = "none";
    document.querySelector(textid).innerHTML = result;
    document.querySelector(resultid).style.display = "block";
}
