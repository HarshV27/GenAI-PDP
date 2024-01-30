const products = [
    {
      id: 1,
      name: "Product 1",
      languages: [
        {
          name: "English",
          questions: [
            {
              id: 1,
              question: "What is the product made of?",
              answer: "The product is made of high-quality materials."
            },
            {
              id: 2,
              question: "How to use the product?",
              answer: "Please refer to the user manual for instructions."
            }
          ]
        },
        {
          name: "Hindi",
          questions: [
            { question: "Product A क्या है?", answer: "Product A है..." },
            { question: "Product A कैसे काम करता है?", answer: "Product A काम करता है..." }
          ]
  
        },
        {
            name : "Gujrati",
            questions: [
                { question: "પ્રોડક્ટ A શું છે?", answer: "પ્રોડક્ટ A છે..." },
                { question: "પ્રોડક્ટ A કેવી રીતે કાર્ય કરે છે?", answer: "પ્રોડક્ટ A કામ કરે છે..." }
              ]
      
        },
        {
            name : "Marathi",
            questions: [
                { question: "Product A काय आहे?", answer: "Product A आहे..." },
                { question: "Product A कसं काम करतं?", answer: "Product A काम करतं..." }
              ]
      
        }

      ]
    }
  ];
  
module.exports = products;
  