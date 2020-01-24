

window.ee = new EventEmitter()

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
  bigText: 'мазафака бум!'


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
      < div className="comments">
        Нет новостей - комментировать нечего
</div>
    )
  }
}

class Article extends React.Component {

  static propTypes() {
    data: React.propTypes.shape({
      author: React.propTypes.string.isRequired,
      text: React.propTypes.string.isRequired,
      bigText: React.propTypes.string.isRequired,
    }

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
    // console.log('render', this);

    return (<div className="article">
      <p className="news__author">{item.author}:</p>
      <p className="news__text">{item.text}</p>
      <a href="#" className={'news__readmore ' + (visible ? 'none' : '')}
        onClick={this.readmoreClick}
      >Подробнее</a>
      <p className={'news__big-text ' + (visible ? '' : 'none')}  >{item.bigText}</p>
      <a href="#" onClick={this.closeClick} className={'news__close ' + (visible ? '' : 'none')}>x</a>
    </div>


    );
  };

  readmoreClick(e) {
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
            < div className="news__item" key={index}>
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

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true,

    };
    this.changeValue = this.changeValue.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.changeCheckbox = this.changeCheckbox.bind(this);

    this.changeAuthor = this.changeAuthor.bind(this);
    this.changeText = this.changeText.bind(this);

  };

  changeValue(e) {
    this.setState({ value: e.target.value })
  };

  onBtnClick(e) {

    e.preventDefault();

    var author = ReactDOM.findDOMNode(this.refs.author).value;
    var text = ReactDOM.findDOMNode(this.refs.text).value;
    // alert(author + '\n' + text);

    var item = [{
      author: author,
      text: text,
      bigText: '...'
    }];

    window.ee.emit('News.add', item);
    // console.log('generate event')
  };


  changeCheckbox(e) {

    this.setState({
      agreeNotChecked: !this.state.agreeNotChecked
    });


  };

  changeText(e) {
    let text = e.target.value.trim();
    if (text) {
      this.setState({
        textIsEmpty: false
      });
    } else {
      this.setState({
        textIsEmpty: true
      });
    }


  };

  changeAuthor(e) {
    let text = e.target.value.trim();
    if (text) {
      this.setState({
        authorIsEmpty: false
      });
    } else {
      this.setState({
        authorIsEmpty: true
      });
    }

  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.author).focus();


  }




  render() {

    var agreeNotChecked = this.state.agreeNotChecked,
      authorIsEmpty = this.state.authorIsEmpty,
      textIsEmpty = this.state.textIsEmpty;

    return (
      <p><input className='test-input' ref='author' defaultValue="" onChange={this.changeAuthor} placeholder="автор новости" /> <br />
        <textarea onChange={this.changeText} ref='text' cols="30" rows="10" placeholder="текст новости" defaultValue="" ></textarea>
        <br />
        <label ><input type="checkbox" onChange={this.changeCheckbox} defaultChecked={false} name="" id="" ref='checkrule' /> Я согласен с
правилами </label>
        <button onClick={this.onBtnClick} ref='alert_button' disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>окей </button>
      </p>

    )
  }
}

// our MarketList

let my_goods = [
  {
    title: 'Dinosaur',
    cost: '1000',
    imgURL: '/static/img/dino.jpg',
    group: 'animal',
    text: ''
  },
  {
    title: 'Apple',
    cost: '10',
    imgURL: '/static/img/apple.jpg',
    group: 'food',
    text: ''
  },
  {
    title: 'Phone',
    cost: '100',
    imgURL: '/static/img/phone.jpg',
    group: 'stuff',
    text: ''
  },
]


class MarketListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    var data = this.props.data;

    var itemsTemplate;

    if (data.length > 0) {
      itemsTemplate = data.map(
        function (item, index) {
          return (
            <div className="market-list__item" key={index}>
              <input type="checkbox" name="" id="" className="market-list__item__checkbox"></input>
              <div className="market-list__item__title">{item.title}

              </div>
              <small className="market-list__item__group">{item.group}</small>
              <img className="market-list__item__img" src={item.imgURL} ></img>
              <div className="market-list__item__number-input  number-input" >
                <input className="number-input__input" type="text" ></input>
                <span className="number-input__plus">+</span>
                <span className="number-input__minus">-</span>

              </div>

              <div className="market-list__item__cost">${item.cost}</div>
              <button className="market-list__item__button">в корзину</button>


            </div >
          );
        }
      )
    } else {
      itemsTemplate = <p>К сожалениюб товаров нет</p>
    };


    return (
      <div className="market-list__items">{itemsTemplate}</div>

    )


  }
}

class MarketList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      goods: my_goods,
    }

    // this.counterPlus = this.counterPlus.bind(this)
  }

  componentWillMount() {

  };

  componentDidMount() {


    // var self = this;

    // window.ee.addListener('News.add', function (item) {
    //   var nextNews = item.concat(self.state.news);
    //   self.setState({ news: nextNews });
    // });
  };
  componentWillUnmount() {
    // window.ee.removeListener('News.add');
  };


  render() {
    var goods_list = this.state.goods;
    return (
      <main id="market-list">
        <article className="market-list">
          <div className="market-list__title">Магазин 1000 мелочей</div>
          <div className="market-list__search search">

            <input type="text" className="search__input"></input>
            <button className="search__button">Искать</button>
          </div>
          <div className="market-list__text">Упорядочить:</div>
          <select name="filter1" id="filter1" className="market-list__filter">
            <option value="up">по возрастанию цены</option>

            <option value="down">по убыванию цены</option>

            <option value="alphabet">по алфавиту</option>
          </select>
          <div className="market-list__text">Группы товаров</div>
          <select name="filter1" id="filter2" className="market-list__filter">
            <option value="all">все</option>

            <option value="animals">животные</option>

            <option value="stuff">предметы</option>
          </select>


          < MarketListItem data={goods_list} />



        </article>

        <aside className="cart">
          <div className="cart__tab">

            <div className="cart__tab__item">1</div>
            <div className="cart__tab__item">2</div>
            <div className="cart__tab__item">3</div>
          </div>
          <div className="cart__main">
            <div className="cart__main__row">

            </div>
            <div className="cart__main__row cart-row">
              <div className="cart-row__title">Dinosaur</div>
              <div className="cart-row__group">animal</div>
              <div className="cart-row__cost">$1000</div>
              <div className="cart-row__number">1</div>

            </div>
            <div className="cart__main__row cart-row"></div>
            <div className="cart__main__row cart-row"></div>
          </div>

          <div className="cart__statistics"></div>
        </aside>







      </main>

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
  <MarketList />,
  document.getElementById('market-list')
);









