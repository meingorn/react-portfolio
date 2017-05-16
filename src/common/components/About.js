import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

import Video from 'react-video';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>
      	  <div className="about">
      	  	<h3>About Me</h3>
      	  	<p>Born and raised in NYC where I played a lot of drums. Went to Middlebury College where I picked up Mandarin and rocked out (see video below). In my senior year, I was inspired to learn to code during a class called 'Politics of Virtual Realities' taught by <a href="https://en.wikipedia.org/wiki/Allison_Stanger">Allison Stanger</a>. In it, I was exposed to the works of <a href="https://en.wikipedia.org/wiki/Tim_Wu">Tim Wu</a> (<a href="https://en.wikipedia.org/wiki/Net_neutrality">'Net Neutrality'</a>),<a href="https://en.wikipedia.org/wiki/Lawrence_Lessig"> Lawrence Lessig</a> (<a href="http://harvardmagazine.com/2000/01/code-is-law-html">'Code is Law'</a>, <a href="https://creativecommons.org">Creative Commons</a>), and other great thinkers who revealed to me the past, present, and endangered future of the internet that I had taken for granted my whole life.</p>

            <p> After college I returned to my home city where I used my Mandarin mostly to sell ads at Yelp, rising the ranks to the national team. After two years I knew it was time to follow my creative calling and start contributing to the internet that enabled me to listen to so much music and find the all the best food. I attended a bootcamp called the Flatiron School that got me up to speed in record time, and used that knowledge to build this site among other things. Now I am looking for work as a developer in hopes of contributing to something awesome.</p>

            <p>If you want to reach me, I check <a href="https://www.linkedin.com/in/maximeingorn/">LinkedIn</a> regularly. If you want to learn more about what goes on in my head, Flatiron School forced me to start a <a href="http://szechuansauce.info/">blog</a> so you can check that out. Probably better to just reach out directly though.</p>

            <p> In my free time I enjoy cooking, eating good food, drinking craft beer and coffee. I{`'`}m working on side projects related to those things so if you want to collaborate, hit me up.</p>

      	  	<h3>About Site</h3>

      	  	<p>This site is a single page web app built with React and Redux. It is Isomorphic (all the code renders on the server and well as the browser) which has the advantage of initially rendering quicker and being indexed by search engines.</p>

      	  	<p>This site is based on a site designed by Callum Rimmer, check out <a href="https://github.com/caljrimmer/portfolio-redux-app">his repo here</a>.</p>


	      </div>
        <div className='youtube'>

                    <h3>关于我</h3>

                    <p>在纽约市出生和长大，我打了很多鼓。去了米德尔伯里学院，我拿起普通话，摇了摇头（见下面的视频）。在我的高年级，我受到艾里逊·斯坦格（Allison Stanger）教授的“虚拟现实政治”课程的启发。在那里，我被暴露于蒂姆·吴（“ 网络中立”）的作品，劳伦斯·莱斯特（Lawrence Lessig）（“守则是法”，知识共享）等伟大的思想家，向我透露过去，现在和濒危的未来互联网，我一直认为是理所当然的。</p>
                    <p>大学毕业后，我回到了我的家乡城市，我用普通话主要是在Yelp上出售广告，把这个职位提升到国家队。两年后，我知道是时候跟随我的创意，开始贡献互联网，让我听这么多的音乐，找到所有最好的食物。我参加了一个叫做Flatiron School的Bootcamp，让我在创纪录的时间里加快速度，并用这些知识来构建这个网站。现在我正在寻找作为开发人员的工作，希望能够为一些真棒做出贡献。</p>
                    <p>如果你想接触我，我经常检查LinkedIn。如果你想了解更多关于我脑海中发生的事情，Flatiron School迫使我开始一个博客，所以你可以检查一下。可能更好的是直接伸出手。</p>
                    <p>在我的空闲时间，我喜欢做饭，吃美食，喝啤酒和咖啡。我正在与这些事情相关的边项目工作，所以如果你想合作，打我。</p>

                    <h3>关于网站</h3>
                    <p>该网站是使用React和Redux构建的单页网络应用程序。它是同构（所有的代码呈现在服务器上，以及浏览器），其优点是最初渲染更快，并被搜索引擎索引。该网站是基于Callum Rimmer设计的网站，在这里查看他的回购。</p>
        <img /><br/>
          <iframe width="500" height="280" src="https://www.youtube.com/embed/7-txtR9SCmA?start=237" frameborder="0" allowfullscreen></iframe>
          <p>(proof of drum skills)</p>
        </div>
      </div>

    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;
