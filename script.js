var botname = null;
var start = null;
var main = null;
var result = null;
function next(firstid, nextid){
    document.querySelector(firstid).style.display = "none";
    document.querySelector(nextid).style.display = "block";
}
function done(inputid, resultid){
    document.querySelector(inputid).style.display = "none";
    result = `{
        "name": "` + botname + `",
        "version": "1.0.0",
        "description": "discord bot",
        "main": "` + main + `.js",
        "scripts": {
          "start": "node ` + start + `.js"
        },
        "keywords": [
          "` + botname + `"
        ],
        "author": "",
        "license": "UNLICENSED",
        "dependencies": {
          "discord.js": "^11.6.1"
        }
      }`;
    document.querySelector(resultid).innerHTML = done;
    document.querySelector(resultid).style.display = "block";
}