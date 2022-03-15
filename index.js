/**
 * Author: MrDark
 * This code updates content inside file
 * you can modify code according to you what you have to change \
 * in the file. and type of files can be updated using this code
 * 
 * you must give credit to it's owner (MrDark [Sarfaraj Shah])
 * 
 * using this code you can update particular property of json file
 * or you can replace whole json file's data.
 * 
 * you can run this code any os using vsCode editor or any editor you prefered
 * recommended Visual code editor (vscode)
 * 
 * 
 * you have to replace files named foler content with your content
 * if you face any issue contact me on discord.
 * 
 * username: Mr.Dark#3119
 * Discord Server: https://discord.gg/SEdTFcukbF
 * youtube: Bugslogger [https://www.youtube.com/channel/UCEyxVbzsG0oj2f3qoUCQ00g]
 */

const path = require("path");
const fs = require("fs");

let newobject = {};

fs.readdir(`${__dirname}/files`, "utf8", (error, data) => {
  console.log(
    `[finding directory]: ${error !== "null" ? "directory found...!" : error}`
  );
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    fs.readFile(`${__dirname}/files/${element}`, "utf8", (error, data) => {
      let json = JSON.parse(data);

      newobject = {
        name: `name ${path.basename(element, '.json')}`,
        image: `image ${path.basename(element, '.json')}`,
        descript: json.descript,
        attributes: json.attributes,
      };
      console.log(
        `[copying data]: ${error !== "null" ? "data copied...!" : error}`
      );

      fs.writeFileSync(
        `${__dirname}/files/${element}`,
        JSON.stringify(newobject)
      );

      console.log(
        `[writing data]: ${error !== "null" ? "data written...!" : error}`
      );
    });

    if(data.length === index){
        break;
    }
  }
});
