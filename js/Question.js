class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Name of favorite food....");
    this.input3 = createInput("Your color....");
    this.input4 = createInput("Your answer....");
    
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
    this.message.html("What is your favorite color?");
    this.message.position(300,50)
    this.message = createElement("h3")
    this.message.html("What is your favorite food?");
    this.message.position(300,80)
    this.message = createElement("h4")
    this.message.html("What body part starts and ends with the same letter?");
    this.message.position(80,200)
    
  }



  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
 
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.




    this.input1.position(60, 50);
    this.button.position(290, 300);
    this.input2.position(600, 105);
    this.input3.position(650, 70);
    this.input4.position(80, 250);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message5 = createElement(h5)
    this.message5.html("Thank you, answers have been submited")
    this.message5.position(200,300)
    })


  }
}
