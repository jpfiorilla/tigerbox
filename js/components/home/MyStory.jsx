import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Header, Footer } from '../ui';

export default class MyStory extends React.Component {
  constructor(props){
    super(props);
    this.state = { };
  }
  componentDidMount(){
    window.scrollTo(0, 0);
    document.title = 'MyStory' + globals.titleAppend;
  }
  render() {
    return (
      <div id="myStory">
        <Header />
        <div className='subHero'>
          <div className=''>This is my story as told to <a target="__blank" href='https://www.nxt-chptr.com'>Francie Jain at Nxt Chptr</a>, a community for Moms returning to the workforce.</div>
          <div>The website will be launched in mid-September.</div>
        </div>
        <div className='cateringTop'>
          {
            myStory.map((qna, i) => <div className='qna' key={i}>
              <div className='question'>{(i+1) + '. ' + qna.question}</div>
              { qna.img && <img src={qna.img} /> }
              <div className='answer'>{ qna.answer.map((answer, j) => <p key={j}>{answer}</p>) }</div>
            </div>)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

const myStory = [
  {
    question: 'What is your business?',
    answer: [
      `My business is a Korean lunch restaurant called Tiger Box.  It is located in the Navy Yard neighborhood of Brooklyn, NY.  I had been working on the lunch concept since 2009, but the restaurant wasn’t in action until September, 2016.  I started serving food in January, 2017.  We offer nine appetizers and 16 entrees that are made from high quality ingredients made from scratch on premises.  The restaurant has 12 seats for customers, but most of my business is take-out or delivery.`,
      `Our big dish is Bibimbop, the traditional Korean rice and vegetable bowl.  However, I try to make all of my dishes a little different from the traditional preparation, and I try to make each ingredient special.  For Bibimbop, with or without meat, I have a special preparation for each of the six vegetable ingredients.  For example, I cook the spinach in hot water, squeeze the water out and then season it with salt, scallion, garlic and sesame oil.  The cucumber I season with salt, squeeze water out and add sesame oil.  Aster Scaber is a native Korean herb that I sautée with garlic, soy sauce and wild sesame oil, also known as Perilla oil, on a very low heat.  If you want an egg, I will fry it with wild sesame oil, and that gives it a really nice, elegant flavor.  Wild Sesame is a savory, high quality ingredient that doesn’t have any trans-fat.`,
      `Tiger Box’s signature food is a marinated pork dish called Spicy Pork Ssam.  All items on the menu are authentic Korean dishes, but the pork dish is a new invention of mine.  I marinate the pork for 48 hours in a chili paste marinade, and then I serve it with tofu, fried kimchi, cilantro, chili pepper, jalapeno, and garlic, served over rice.  I also serve Galbi, a traditional Korean dish of grilled beef, but I use less sugar than the traditional preparation, so it has a more of a grown up taste.`
    ],
    img: `/images/my-story.jpg`
  },
  {
    question: 'What made you decide to start your business and/or switch careers?',
    answer: [
      `I used to be a computer developer.  I always felt that lunch was a really nice break, but that good lunch food was hard to come by.  I always wished there was a quick take-out spot that offered a nice, warm lunch.  So, when I was designing Tiger Box, I envisioned a place that fed my former self and my former colleagues.  I was lucky to find this restaurant spot in Brooklyn’s Navy Yard.  There are many IT workers and other types of professionals that I can feed.  I wouldn’t have opened the restaurant unless I found the perfect spot.`,
      `In addition, the hours required to run a lunch restaurant worked for me, as I wanted to spend some time with my kids.  Their ages are 7 and 5, so having a lunch restaurant is perfect timing to still be a mom.  I close Tiger Box at 3 or 4 pm and when my kids come home, I can make them dinner and put them to sleep.`
    ]
  },
  {
    question: 'Was there one moment that gave you the confidence that this was a good idea?',
    answer: [
      `I knew that I wanted to serve Korean food for office workers, and I felt that Dumbo was the best place because there are lots of offices and not much food.  My biggest hurdle in getting the restaurant off the ground was finding a location.  I was waiting and waiting.  Finally I saw a small restaurant space listed on Craigslist in the Navy Yard neighborhood.  Navy Yard is pretty close to Dumbo, my first choice location, and the neighborhood has 10-20,000 workers and is growing rapidly.  Based on the information I was able to find on the size of the working population and operating restaurants, I decided that Navy Yard would be a good spot, so I signed a 4 year lease.`,
      `My second obstacle was finding restaurant staff.  I was trying to hire Koreans as sous chefs, because of the expertise in the food preparation, but Brooklyn is too far for most of the Koreans who live in other New York boroughs.  Now I am making a recipe for each dish, so that I am not as reliant on cuisine specialists.`,
      `Now that I am up and running, my current challenge is making the lunch time crush easier on me. Since I am a one-woman show, it is hard for me to handle the lunch rush.   In order to incentivize customers to buy off-peak, I give people who order lunch before 11 am a bowl of fruit.  Initially it was a bowl of soup, but I changed to a bowl of fruit—an apple, melon or Asian pair.  Now I am attaching stickers so that they know why are getting the extra food.  For orders after 2 pm, I am going to give people free cake.`
    ]
  },
  {
    question: 'Was outside funding/cost a challenge to getting your business off the ground?',
    answer: [
      `I saved money for a long time to open this business.  I set aside funds for one year of rent and operating costs.  It is just impossible to know when a restaurant breaks even.`,
      `Even though I didn’t use outside funding there are a lot of options.   The Small Business Administration (www.SBA.gov) has a lot of information on how to access big and small loans.  I didn’t bother with taking out loans, though, because I didn’t want to pay the interest.  Square, my credit card processing service, even offered me a small loan.`,
      `Part of why I wanted a small space was to keep overhead like rent low.   Sometimes I look at my restaurant, and I think about renovating it to make the waiting area really nice or the bathroom lovely.  But then I realize that a nicer space is not really why people return.  It is more of a pride thing.  I would love a pretty bathroom, but then I ask myself, “Is my customer using my bathroom?”  No.`
    ]
  },
  {
    question: 'Were your family and friends helpful or obstacles in launching your business?',
    answer: [
      `My partner helps me by letting me have my own territory.  She knows where to draw the line, and that works well.  My mother and brother both own a Korean restaurant in Chicago, and they helped me a lot with advice.  My mother is an amazing cook with a big family.  She was always cooking large quantities of food for the family, and the way that she cooked with love for large groups is what I am trying to re-create.`,
      `All of my friends are helping me.  “Talent donations” really helped get the restaurant get off the ground.  One friend who is a graphic designer helped with logos and menu design.  Another friend who is a publicist told everyone about my dishes.  My partner does all of the IT.  Another friend helped with menu choices, by giving advice on what she and her friends like to eat.  Another friend who is a lawyer helped me a lot with the restaurant lease and permitting.`
    ]
  },
  {
    question: 'Is your business impacted or helped by government regulations?',
    answer: [
      `I had no idea going in how the restaurant licensing process worked.  So, I went to the internet and found a bunch of websites that outlined what I need.  I made a list.  I went to the Consumer Affairs Commissioner to find more information.  It just confused me.  One of the officers at the Small Business Administration office told me what I needed.  The main thing was the restaurant permit.  To get the permit, you needed to attend a class, get a food preparation certificate, and get liability insurance.  If you are not born in the US, like me, this process can be hard to figure out.`,
      `I had to pass the kitchen inspection and a prequalifying inspection.  To get the restaurant license, you can pre-qualify for the inspection.  I was worried about failing the pre-qualifying inspection so they sent me a pre-qualifying consultant.  I got a lot of help with free services that the SBA provided.`,
      `Finally I had the real inspection, and I got an A.  I’m Asian, so I put a lot of pressure on myself to get the highest rating.  The total number of points starts at 100 and infractions get deducted.  The inspector told me that she will come back in a year, and she gave me a window for the next visit.`
    ]
  },
  {
    question: 'What would be your biggest piece of advice you would give to yourself ten years ago?',
    answer: [
      `I wish I were more brave and had done this earlier.  I waited and waited.  I could have started it when I was a little less ripe of an idea.  Now I am older and wiser, so maybe the wisdom that comes with age has helped me make better decisions.`
    ]
  },
  {
    question: 'What was the best and worst piece of advice you have received as you were starting your business?',
    answer: [
      `My father told me not to start the restaurant at all.  He doesn’t know me.  He said, “You don’t cook at home.”  But this is a product!  I’m not cooking 80 dishes.  I’m cooking ingredients precisely which for me is very different than being a traditional cook.`,
      `My sister also told me that it would be a big mistake, and that the restaurant would fail, if I didn’t use salt and sugar in the barbeque sauce for my Galbi dish.  In the end, I decided to substitute with Asian pear and lemon instead of sugar and salt in my Galbi sauce.  I like using the natural ingredients with the sweet and salty flavors. I find that they make for a much richer taste than the flat spices.`
    ]
  },
  {
    question: 'What are your hopes for your business for the next five years?  ',
    answer: [
      `In 3-5 years, maybe I’ll open another location of Tiger Box.  Because I serve the lunches packaged in bowls or bento-style boxes, it would be easy to have many outlets, as everything can be replicated.   I always thought of this idea as a franchise, so making sure the first location does well validates that the business can have several locations.`,
      `I am considering outside funding to expand.  Then I would be more comfortable to take loans, as it would be less of a risk.`
    ]
  }
]