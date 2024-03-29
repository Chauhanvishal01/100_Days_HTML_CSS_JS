const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

generateQuoteBtn.addEventListener("click", generateQuote);

const arrayOfQuotes = [
  {
    author: "चाणक्य",
    quote:
      " जब आप किसी काम की शुरुआत करें , तो असफलता से मत डरें और उस काम को ना छोड़ें. जो लोग इमानदारी से काम करते हैं वो सबसे प्रसन्न होते हैं.",
  },
  {
    author: " चाणक्य",
    quote:
      "कोई व्यक्ति अपने कार्यों से महान होता है, अपने जन्म से नहीं",
  },
  {
    author: "अब्दुल कलाम",
    quote:
      "  इससे पहले कि सपने सच हों आपको सपने देखने होंगे .",
  },
  {
    author: "बिल गेट्स",
    quote: "सफलता  एक घटिया  शिक्षक  है . यह  लोगों  में  यह  सोच  विकसित  कर  देता  है  कि  वो  असफल  नहीं  हो सकते ",
  },
  {
    author: "अल्बर्ट आइंस्टीन",
    quote:
      "जिस व्यक्ति ने कभी गलती नहीं कि उसने कभी कुछ नया करने की कोशिश नहीं की.",
  },
  {
    author: " ब्रूस ली",
    quote:
      "गलतियां हमेशा क्षमा की जा सकती हैं, यदि आपके पास उन्हें स्वीकारने का साहस हो।",
  },
  {
    author: "स्वामी विवेकानंद",
    quote:
      "अगर धन दूसरों की भलाई करने में मदद करे, तो इसका कुछ मूल्य है, अन्यथा, ये सिर्फ बुराई का एक ढेर है, और इससे जितना जल्दी छुटकारा मिल जाये उतना बेहतर है।",
  },
  {
    author: "विशाल चौहान",
    quote:
      "बीच रास्ते से लौटने का कोई फायदा नहीं क्योंकि लौटने पर आपको उतनी ही दूरी तय करनी पड़ेगी जितनी दूरी तय करने पर आप लक्ष्य तक पहुँच सकते है|",
  },
];

function generateQuote() {
    let random = Math.floor(Math.random() * arrayOfQuotes.length); // Generate a random index within the bounds of the array
    quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
    authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
  }
  