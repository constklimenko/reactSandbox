
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
    this.readmoreClick = this.readmoreClick.bind(this);
    this.closeClick = this.closeClick.bind(this);
  }

  

  
  render() {
    var item = this.props.data;
    var visible = this.state.visible;
    console.log('render', this);

    return (<div className="article">
      <p className="news__author">{item.author}:</p>
      <p className="news__text">{item.text}</p>
      <a href="#" className={'news__readmore ' + (visible? 'none':'')}
      onClick={this.readmoreClick}
      >Подробнее</a>
      <p className={'news__big-text ' + (visible?'':'none')}  >{item.bigText}</p>
      <a href="#" onClick={this.closeClick} className={'news__close ' + (visible ? '' : 'none')}>x</a>
      </div>
      

    );
  };

  readmoreClick(e){
    e.preventDefault();
    this.setState({
      visible: true
    });
  }

  closeClick(e) {
    e.preventDefault();
    this.setState({
      visible: false
    });
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

class Add extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      agreeNotChecked:true,
      authorIsEmpty: true,
      textIsEmpty:true,
      button_disabled: true
    };
    this.changeValue=this.changeValue.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);

  };

  changeValue(e){
    this.setState({value: e.target.value})
  };

  onBtnClick(e){
    // console.log(this.refs)
    e.preventDefault();

    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var text = ReactDOM.findDOMNode(this.refs.text).value;
    alert(author + '\n' + text);
  };

  changeCheckbox(e){
    this.setState({
      button_disabled: !this.state.button_disabled
    })
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.author).focus();
  }


  
  render() {
    
    return(
      <p><input className='test-input' ref='author' defaultValue="" placeholder="автор новости" /> <br/>
        <textarea ref='text' cols="30" rows="10" placeholder="текст новости" defaultValue="" ></textarea>
      <br/>
        <label ><input type="checkbox" onChange={this.changeCheckbox} defaultChecked={false} name="" id="" ref='checkrule' /> Я согласен с
правилами </label>
         <button onClick={this.onBtnClick} ref='alert_button'  disabled={this.state.button_disabled}>окей </button>
      </p>
      
    )
  }
}



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }

    this.counterPlus = this.counterPlus.bind(this)
  }

  render() {
    return (
      <div className="app">
        <Add />
        <h3>Новости</h3>
        
<News data={my_news} />
        
      </div>   
    );
  }

  counterPlus(e) {
    e.preventDefault();
    this.setState(
      {
        counter: ++this.state.counter
      }
    )

  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);









