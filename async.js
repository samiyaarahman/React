//Async operation flow
function longTask(message, callback){
    setTimeout(function(){
        console.log(message)
        
    },1000)
}


function longRunningTask(stepName, callback){
    setTimeout(function() {
      console.log(stepName + "completed");
      callback();
    },1000);
  
  }
function step1(){
    return new Promise (function(resolve){
      longRunningTask("step1" , resolve);
  
    });
  }
  
  function step2(){
    return new Promise (function(resolve){
      longRunningTask("step2" , resolve);
  
    });
  }
  
  
  function step3(){
    return new Promise (function(resolve){
      longRunningTask("step3" , resolve);
  
    });
  }

  async function executeSteps(){
    await step1();
    await step2();
    await step3();


    console.log ("All Steps Completed");
  }

  executeSteps();