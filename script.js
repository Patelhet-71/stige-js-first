const generateQuote = function() {
    const quotes = [
    {
        quote: "Hard work never brings fatigue. It brings satisfaction.",
        author: "Narendra Modi"
    },
    {
        quote: "We should remain students for lifetime. You should be ready and yearn to learn from every moment of life.",
        author: "Narendra Modi"
    },
    {
        quote: "If 125 crore people work together; India will move forward 125 crore steps.",
        author: "Narendra Modi"
    },
    {
        quote: "A son of a poor man is standing in front of you today. This is the strength of a democracy.",
        author: "Narendra Modi"
    },
    {
        quote: "I can promise you. If you work 12 hours, I will work for 13. If you work 14 hours, I will work for 15 hours. Why? Because I am not a ‘pradhan mantri’, but a ‘pradhan sevak’.",
        author: "Narendra Modi"
    },
    {
        quote: "Mahatma Gandhi never compromised on cleanliness. He gave us freedom. We should give him a clean India.",
        author: "Narendra Modi"
    },
    {
        quote: "The 21st century is an era of knowledge. If poverty is to be abolished in this century it can be abolished only through knowledge.",
        author: "Narendra Modi"
    },
    {
        quote: "We do not need ‘act’ but action.",
        author: "Narendra Modi"
    },
    {
        quote: "Education makes life self-reliant. It inspires man to live with dignity in the society.",
        author: "Narendra Modi"
    },
    {
        quote: "Today the world looks at India with hope and confidence.",
        author: "Narendra Modi"
    },
    {
        quote: "Do not wait for anybody or anything. Do whatever you can, build your hope on none.",
        author: "Swami Vivekananda"
    },
    {
        quote: "The best thermometer to the progress of a nation is its treatment of its women.",
        author: "Swami Vivekananda"
    },
    {
        quote: "Golden rules: Who is helping you, don’t forget them. Who is loving you, don’t hate them. Who is trusting you, don’t cheat them.",
        author: "Swami Vivekananda"
    },
    {
        quote: "When I asked God for strength, he gave me difficult situations to face.",
        author: "Swami Vivekananda"
    },
    {
        quote: "All differences in this world are of degree, and not of kind, because oneness is the secret of everything.",
        author: "Swami Vivekananda"
    },
    {
        quote: "See for the highest, aim at the highest, and you shall reach the highest.",
        author: "Swami Vivekananda"
    },
    {
        quote: "Kashmir is an integral part of India, and nobody can take it away from us.",
        author: "Amit Shah"
    },
    {
        quote: "My target is to expand the BJP's influence everywhere.",
        author: "Amit Shah"
    },
    {
        quote: "Don't mis judge my self-confidence.",
        author: "Amit Shah"
    },
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}