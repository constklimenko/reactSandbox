
var my_news = [{
  author: 'Саша Печкин',
  text: 'В четчерг, четвертого числа...',
  bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили xёрными чернилами чертёж.'
},
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
},
  {
    author: 'Дюбель',
    text: 'Бум бум бум',
    bigText: 'мазафака бум'

  
  },

  {
    author: 'Барракуда',
    text: 'Съем всех человеков',
    bigText: 'оставлю только самых тощих'
  },

];



class Comments extends React.Component {
  render() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего
</div>
    )
  }
}

class Article extends React.Component {

  static propTypes(){
    data: React.propTypes.shape({
      author: React.propTypes.string.isRequired,
      text: React.propTypes.string.isRequired,
      bigText: React.propTypes.string.isRequired,}
      
    )

  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  
  render() {
    var item = this.props.data;
    var visible = this.state.visible;


    return (<div className="article">
      <p className="news__author">{item.author}:</p>
      <p className="news__text">{item.text}</p>
      <a href="#" className={'news__readmore ' + (visible ? 'none' : '')}
      onClick={() => this.setState({
        visible: true
      })}
      >Подробнее</a>
      <p className={'news__big-text ' + (visible ? '' : 'none')}  >{item.bigText}</p>
      </div>

    );
  }
}

class News extends React.Component {
  static propTypes() {
    data: React.propTypes.array.isRequired
  };
  render() {
    var data = this.props.data;
    var newsTemplate

    if (data.length > 0) {
      newsTemplate = data.map(
        function (item, index) {
          return (
            < div className="news__item"  key={index}>
              < Article data={item} />
            </div>
          )
        }
      );
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }



    return (
      <div className="news">
        {newsTemplate}
        <strong className={data.length > 0 ? 'news__count' : 'none'} >Всего новостей: {data.length}</strong>
      </div>
    );


  }
}



class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h3>Новости</h3>
<News data={my_news} />
        
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);









