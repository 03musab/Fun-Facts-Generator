document.getElementById('factButton').addEventListener('click', function() {
    const facts = [
        {"title": "Origin", "description": "Football is believed to have originated in England around the 12th century, though versions of the game have been played for over 3,000 years."},
        {"title": "FIFA World Cup", "description": "The FIFA World Cup is the most watched sporting event in the world. The tournament, held every four years, was first played in 1930, and the host country was Uruguay."},
        {"title": "Most Successful Team", "description": "Brazil is the most successful national team in the history of the FIFA World Cup, having won the tournament five times (1958, 1962, 1970, 1994, 2002)."},
        {"title": "Largest Attendance", "description": "The largest attendance for a football match ever recorded was during the 1950 FIFA World Cup when about 199,854 spectators watched the final between Brazil and Uruguay at the Maracanã Stadium in Rio de Janeiro, Brazil."},
        {"title": "Rules", "description": "The modern rules of football are based on the mid-19th century efforts to standardize the widely varying forms of football played at the public schools of England. The rules were first drafted in 1863 by the newly formed Football Association in England."},
        {"title": "Most Popular Sport", "description": "Football is the most popular sport in the world. It is played by over 250 million players in over 200 countries."},
        {"title": "Ballon d'Or", "description": "The Ballon d'Or is an annual football award presented by France Football. It has been awarded since 1956, although between 2010 and 2015 it was merged with the FIFA World Player of the Year and was known as the FIFA Ballon d'Or."},
        {"title": "Highest Paid Athletes", "description": "Footballers are among the highest paid athletes in the world. Players like Lionel Messi, Cristiano Ronaldo, and Neymar have been among the top earners."},
        {"title": "Influential Clubs", "description": "Clubs like Real Madrid, Barcelona, Manchester United, and Bayern Munich are known globally for their rich history and influence in the world of football."},
        {"title": "Women's Football", "description": "The popularity and recognition of women's football have grown significantly in recent years. The FIFA Women's World Cup was first held in 1991, and the United States women's national soccer team is one of the most successful teams in international women's soccer."}
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    document.getElementById('factText').innerText = fact.description;
});
