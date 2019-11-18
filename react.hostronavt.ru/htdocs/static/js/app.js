
var my_news = [{
  author: 'Саша Печкин',
  text: 'В четверг, четвертого числа...'
},
{
  author: 'Просто Вася',
  text: 'Считаю, что $ должен стоить 35 рублей!'
},
{
  author: 'Гость',
  text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
},
  {
    author: 'Дюбель',
    text: 'Бум бум бум'
  },

  {
    author: 'Барракуда',
    text: 'Съем всех человеков'
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
  render() {
    var item = this.props.data;

    return (<div className="article">
      <p className="news__author">{item.author}:</p>
      <p className="news__text">{item.text}</p>
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









