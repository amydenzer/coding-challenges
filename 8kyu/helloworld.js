/*
Make a simple function called greet that returns the most-famous "hello world!".
*/

//my solution

// Write a function "greet" that returns "hello world!"
const greet = () => "hello world!";

//other solutions

function greet() {
    return "hello world!";
    }

    function greet() {
  
        /*  
          ⢰⣿⣯⠷⠶⠶⣤⣄⣀⣀⠀⠀⠠⢄⣀⣀⣠⣤⣤⠤⣤⣤⣤⣤⣤⣄⣀
        ⠀⠈⢽⣆⢿⣿⣟⢲⣮⣭⣭⣝⢛⣛⣩⣭⡵⢖⢶⣖⣒⣚⣖⣚⣃⠻⡷⢈⡷⣄
        ⠀⠀⠀⠹⢮⣿⣿⡿⢛⡍⣘⢸⡿⣎⣾⡥⡧⢈⣼⢷⠶⠭⡘⡣⣞⢲⠞⠳⠾⢈⣆
        ⠀⠀⠀⣠⢖⡼⢣⣴⣿⡷⡿⡏⡗⡻⠩⢱⠿⣬⢱⠻⠺⠓⠍⡻⢸⠂⣟⣸⠅⡚⢙⡆
        ⠀⠀⣾⣳⢛⣼⣿⣿⠫⠉⣧⡼⡊⢒⣱⢺⣃⣿⠰⡇⢀⠂⠂⠁⠝⣦⣏⣼⣆⠃⠰⢷
        ⠀⣾⣻⢧⣿⣿⣿⣿⡷⠞⡟⠐⠏⡀⠈⠁⡀⠂⠉⡀⠈⡀⠄⢶⠙⠳⡅⢨⡽⣄⢁⡸⡄
        ⢸⣇⡿⢾⣹⣿⣻⠏*/return "hello world!"; /*⠒⠘⠣⠤⠇
        ⢸⢿⡇⣿⣿⣿⣼⣃⡧⡬⡅⣧⠅⡀⡀⠈⢇⣉⡸⠃⡀⡀⡀⢻⡒⢤⢉⠏⡁⡏⠙⠛⡇
        ⢸⢸⡿⢋⣿⣿⣿⣗⣞⡠⠤⢤⡀⡀⡀⡀⡀⠘⡀⡀⡀⡀⡀⠘⣇⡗⠸⡅⡳⢘⣞⢠⡇
        ⢸⣾⡇⣾⣿⣿⡿⡿⠒⢪⣈⣁⣀⣀⣀⣐⠒⡖⠲⠄⡀⡀⢀⡀⠠⠌⣛⢤⣏⡿⣾⢸⠃
        ⢸⣿⣧⣿⣿⠶⠛⠛⠉⠉⠉⠀⠀⠀⠀⠉⠉⠉⠙⠛⠛⠓⠦⢵⣉⠛⢯⠻⠹⣳⢬⢻⡀
        ⠘⡇⣿⠟⢁⣴⣶⣶⣶⣤⣤⡀⡀⡀⡀⠀⠴⠶⠿⠟⠛⠛⠓⠦⠌⠒⠾⣎⢣⠚⣶⢸⡇
        ⠀⢳⢹⡄⡹⠉⣴⡶⣴⣌⡹⢽⡄⡀⠀⡀⢀⡴⠟⢻⣷⠦⣵⡀⡀⡀⡀⠈⢣⡍⢿⢸⡇
        ⠀⠈⡏⣇⠱⠚⢿⡄⠈⠋⠀⠘⣿⡀⠀⡀⡀⠠⣔⣂⣀⡀⠤⡀⡀⡀⡀⡀⢸⠛⣷⢸⠇
        ⠀⠀⣧⢹⠸⡀⠙⠓⠂⡀⡀⡀⣟⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠳⢸⡀⠂⢸
        ⠀⠀⣽⢸⡇⡀⡀⡀⡀⡀⡀⡀⠇⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢸⡃⠀⡞
        ⠀⠀⢹⢸⣇⣹⡀⡀⡀⡀⡀⠘⡀⡀⡀⡀⠀⠀⡀⡀⡀⢀⡀⡀⡀⡀⡀⡀⢸⡋⠁⣷
        ⠀⠀⠈⡏⣿⢳⢆⡀⡀⡀⠁⢶⣤⡀⢀⠐⠊⠛⡀⡀⡀⡀⡀⠑⡀⡀⡀⢀⣼⡇⡀⢿⡀
        ⠀⠀⠀⢹⣹⣎⣷⣦⡀⡀⡀⡀⠉⠉⠁⡀⡀⠀⠀⢀⣀⡔⠂⡀⡀⡀⡀⣼⣿⡀⢠⣏⣷⣄
        ⠀⠀⠀⠀⢷⣿⡼⣿⣧⡀⣀⣀⣀⣠⣤⣤⡤⠖⠋⠉⠁⡀⡀⡀⡀⢀⡠⣿⡟⡀⣬⣶⣿⣯⣓⢦⣄
        ⠀⠀⠀⠀⠈⠻⣿⣽⣿⣯⡙⢫⣉⡁⡀⡀⡀⡀⠄⡀⡀⡀⡀⡀⡘⢹⣷⠋⡀⢴⠿⣿⠟⠡⠌⠑⠨⠙⠶⣄⡀
        ⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣷⣤⠙⠳⢶⣶⢞⠃⡀⡀⡀⡀⣤⣈⣰⡟⠁⡀⢠⠎⠠⡿⡀⡀⡀⡀⡀⡀⡀⡀⠉⠓⢦⣄
        ⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣡⡀⠈⡉⡀⡀⡀⡀⡀⢀⣼⡾⢏⡀⡀⣠⠏⡀⡀⡇⡀⡀⡀⡀⡀⡀⡀⡀⠂⠈⡀⠈⠛⢦⡀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣷⣾⣷⡀⠤⡀⢀⣤⣿⣿⠄⡡⡠⢞⠡⡀⡀⢠⣇⡞⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠹⣆
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣷⣶⣿⣿⣿⡾⣋⢄⡞⢡⠞⠐⡀⡀⡀⣷⣷⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡘⢧⡀
        ⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣟⣵⠋⡴⢛⡀⡀⡀⡀⠠⣿⢿⠆⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢀⣀⡀⡀⠂⢙⠳⢦⡀
        ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⡟⣡⠞⠐⠁⡀⠇⡀⡀⣤⣿⡿⠞⠋⠁⡀⡀⡀⡀⡀⡀⡀⡀⠈⠛⠻⣿⣰⣆⣀⡀⠙⢦⡀
        ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡻⢿⣿⣿⠋⡴⢫⣆⡴⠞⠁⡀⣀⠲⡀⡀⢀⣰⠶⢿⠟⠛⠛⠛⠚⠓⡀⡀⡀⡀⡀⡀⠉⢹⠿⣷⠄⠤⠙⣆
        ⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣷⡟⠡⡞⠽⠓⠁⡀⢀⣰⡾⠇⡀⡀⢠⣿⡁⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢸⣇⠘⡀⠘⣧⢂
        ⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⡷⠉⠁⡀⡀⣴⣾⠟⡀⡀⡀⢰⡟⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠈⢹⡆⡀⡀⠸⡆⢆
        ⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⠢⡀⠚⡀⢼⣿⢣⡀⡀⡀⡀⢼⡇⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢰⢸⡇⡀⡀⠆⢿⢸⡀
        ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣿⣿⡆⠉⡀⡀⠆⡀⢸⡷⠂⡀⡀⡀⡀⣾⠇⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠈⠺⠅⡀⡀⠈⠸⣇⢇
        ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣟⠳⠁⠁⡀⣸⡀⡀⢸⣧⡀⡀⡀⡀⡀⣿⣇⡀⡀⡀⡀⡀⡀⡀⡀⡀⠀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡖⡀⡀⡀⡀⠠⢻⡸⡄
        ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⡀⡀⡁⣸⢁⣌⣻⡀⡀⡀⡀⡀⡀⣿⣿⡀⡀⡀⡀⡀⡀⡀⡀⠀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢀⡿⡀⡀⡀⡀⢸⡘⡇⣷
        ⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⡏⣿⣢⣖⢻⣴⣿⣼⣧⡀⡀⡀⡀⡀⣟⣿⡀⡀⡀⡀⡀⡀⡀⠀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣸⠃⡀⡀⡀⢀⠠⡇⡇⣿
        ⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣝⣿⡹⣿⣿⣿⣿⣿⣿⣿⣗⡀⡀⡀⡀⣿⡅⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣿⡀⡀⡀⡀⢈⢰⢳⡇⣿
        ⠀⠀⠀⠀⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⡀⠃⢛⣿⣿⣿⣿⣿⣿⣿⣶⡀⡀⡀⣿⠁⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡏⡀⡀⣠⣋⣼⣿⣸⣇⣿
        ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡗⣧⠸⣨⡹⢿⣿⣿⣿⣿⣿⣿⣆⡀⠰⣿⠂⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣧⣤⣬⣶⣿⣿⣿⣿⢸⡏
        ⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣶⠛⣮⣇⣿⣿⣿⣿⣿⣿⠆⠘⠛⠃⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣿⣿⣿⣿⣿⣿⣿⣻⣿⡇
        ⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠟⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠀⠀⠀⡀⡀⡀⡀⡀⡀⡀⡀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧
        ⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠈⢠⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠀⠀⡀⠀⡀⡀⡀⡀⡀⡀⡀⡀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⠤⠄⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠚⢃⣴⣿⣿⡷⣟⡿⣿⣿⣿⣧
                      ⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⠤⠄⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⠚⢃⣴⣿⣿⡷⣿⣿⣧
        
        */
        }


//Test
const assert = require("chai").assert;

describe("Testing function", function() {
  it("Is it a function?", function() {
    assert.strictEqual(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function() {
    assert.strictEqual(greet(), "hello world!");
  });
});
