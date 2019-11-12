
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
  }

];



class Comments extends React.Component{
  render(){
    return(
      <div className="comments">
        Нет новостей - комментировать нечего
</div>
    )
  }
}

class News extends React.Component {
  render() {
  var newsTemplate = this.props.data.map(
     function(item, index){
       return(
         < div key={index}>
           <p className="news__author">{item.author}</p>
           <p className="news__text">{item.text}</p>
         </div>
       )
     }
   );

    return (
      <div className="news">
        {newsTemplate}
      </div>
    );


  }
}

class App extends React.Component{
  render(){
    return(
      <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
<News data={my_news} />
<Comments></Comments>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);




 

  
  
 
