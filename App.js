
import './App.css';
import Card from './Card';

function App() {
  const services=[
  {
    title:'COURSERA', 
    subtitle:'CYBER SECURITY',
    desc:'30hrs course & Self paced learning',
    image:'https://s27389.pcdn.co/wp-content/uploads/2021/04/creating-rolling-out-effective-cyber-security-strategy-1024x440.jpeg',
  },
  {
    title:'COURSERA', 
    subtitle: 'ARTIFICIAL INTELLIGENCE',
    desc: '15hrs course & Self paced learning' ,
    image:'https://www.sentinelassam.com/wp-content/uploads/2020/03/Artificial-Intelligence.jpg',
  },
  {
    title:'COURSERA',
    subtitle:' INTRODUCTION TO INTERNET OF THINGS',
    desc:'6hrs course & Self paced learning',
    image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg'
  },
  {
    title:'COURSERA',
    subtitle:'DATA SCIENCE',
    desc:'4 hrs course & Self paced learning',
    image:'https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg',
  },
  {
    title:'COURSERA',
    subtitle:'PYTHON PROGRAMMING',
    desc:'12hrs course & Self paced learning ',
    image:'https://content.techgig.com/photo/80100245/8-steps-to-master-python-programming-for-data-science.jpg?88712',

  },
  ];
  return (
  <div className="App">
  <h1 className="title">COURSERA PROGRAMS</h1>
  <br />
  <br />
  <div className="container">
    {services.map((service, index) => (
      <Card
        key={index}
        title={service.title}
        subtitle={service.subtitle}
        desc={service.desc}
        image={service.image}
      />
    ))}
  </div>
</div>
  );
}

export default App;
