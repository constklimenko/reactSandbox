

window.ee = new EventEmitter()

// var my_news = [{
//   author: 'Саша Печкин',
//   text: 'В четчерг, четвертого числа...',
//   bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили xёрными чернилами чертёж.'
// },
// {
//   author: 'Просто Вася',
//   text: 'Считаю, что $ должен стоить 35 рублей!',
//   bigText: 'А евро 42!'
// },
// {
//   author: 'Гость',
//   text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
//   bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
// },
// {
//   author: 'Дюбель',
//   text: 'Бум бум бум',
//   bigText: 'мазафака бум!'


// },

// {
//   author: 'Барракуда',
//   text: 'Съем всех человеков',
//   bigText: 'оставлю только самых тощих'
// },

// ];



// class Comments extends React.Component {
//   render() {
//     return (
//       < div className="comments">
//         Нет новостей - комментировать нечего
// </div>
//     )
//   }
// }

// class Article extends React.Component {

//   static propTypes() {
//     data: React.propTypes.shape({
//       author: React.propTypes.string.isRequired,
//       text: React.propTypes.string.isRequired,
//       bigText: React.propTypes.string.isRequired,
//     }

//     )

//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//     };
//     this.readmoreClick = this.readmoreClick.bind(this);
//     this.closeClick = this.closeClick.bind(this);
//   }




//   render() {
//     var item = this.props.data;
//     var visible = this.state.visible;
//     // console.log('render', this);

//     return (<div className="article">
//       <p className="news__author">{item.author}:</p>
//       <p className="news__text">{item.text}</p>
//       <a href="#" className={'news__readmore ' + (visible ? 'none' : '')}
//         onClick={this.readmoreClick}
//       >Подробнее</a>
//       <p className={'news__big-text ' + (visible ? '' : 'none')}  >{item.bigText}</p>
//       <a href="#" onClick={this.closeClick} className={'news__close ' + (visible ? '' : 'none')}>x</a>
//     </div>


//     );
//   };

//   readmoreClick(e) {
//     e.preventDefault();
//     this.setState({
//       visible: true
//     });
//   }

//   closeClick(e) {
//     e.preventDefault();
//     this.setState({
//       visible: false
//     });
//   }
// }

// class News extends React.Component {
//   static propTypes() {
//     data: React.propTypes.array.isRequired
//   };


//   render() {
//     var data = this.props.data;
//     var newsTemplate

//     if (data.length > 0) {
//       newsTemplate = data.map(
//         function (item, index) {
//           return (
//             < div className="news__item" key={index}>
//               < Article data={item} />
//             </div>
//           )
//         }
//       );
//     } else {
//       newsTemplate = <p>К сожалению новостей нет</p>
//     }



//     return (
//       <div className="news">
//         {newsTemplate}
//         <strong className={data.length > 0 ? 'news__count' : 'none'} >Всего новостей: {data.length}</strong>
//       </div>
//     );


//   }


// }

// class Add extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       agreeNotChecked: true,
//       authorIsEmpty: true,
//       textIsEmpty: true,

//     };
//     this.changeValue = this.changeValue.bind(this);
//     this.onBtnClick = this.onBtnClick.bind(this);
//     this.changeCheckbox = this.changeCheckbox.bind(this);

//     this.changeAuthor = this.changeAuthor.bind(this);
//     this.changeText = this.changeText.bind(this);

//   };

//   changeValue(e) {
//     this.setState({ value: e.target.value })
//   };

//   onBtnClick(e) {

//     e.preventDefault();

//     var author = ReactDOM.findDOMNode(this.refs.author).value;
//     var text = ReactDOM.findDOMNode(this.refs.text).value;
//     // alert(author + '\n' + text);

//     var item = [{
//       author: author,
//       text: text,
//       bigText: '...'
//     }];

//     window.ee.emit('News.add', item);
//     // console.log('generate event')
//   };


//   changeCheckbox(e) {

//     this.setState({
//       agreeNotChecked: !this.state.agreeNotChecked
//     });


//   };

//   changeText(e) {
//     let text = e.target.value.trim();
//     if (text) {
//       this.setState({
//         textIsEmpty: false
//       });
//     } else {
//       this.setState({
//         textIsEmpty: true
//       });
//     }


//   };

//   changeAuthor(e) {
//     let text = e.target.value.trim();
//     if (text) {
//       this.setState({
//         authorIsEmpty: false
//       });
//     } else {
//       this.setState({
//         authorIsEmpty: true
//       });
//     }

//   }

//   componentDidMount() {
//     ReactDOM.findDOMNode(this.refs.author).focus();


//   }




//   render() {

//     var agreeNotChecked = this.state.agreeNotChecked,
//       authorIsEmpty = this.state.authorIsEmpty,
//       textIsEmpty = this.state.textIsEmpty;

//     return (
//       <p><input className='test-input' ref='author' defaultValue="" onChange={this.changeAuthor} placeholder="автор новости" /> <br />
//         <textarea onChange={this.changeText} ref='text' cols="30" rows="10" placeholder="текст новости" defaultValue="" ></textarea>
//         <br />
//         <label ><input type="checkbox" onChange={this.changeCheckbox} defaultChecked={false} name="" id="" ref='checkrule' /> Я согласен с
// правилами </label>
//         <button onClick={this.onBtnClick} ref='alert_button' disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>окей </button>
//       </p>

//     )
//   }
// }

// our MarketList

let my_goods = [
  {
    title: 'dinosaur',
    cost: '1000',
    imgURL: '/static/img/dino.jpg',
    group: 'animal',
    text: ''
  },

  {
    title: 'cat',
    cost: '20',
    imgURL: '/static/img/cat.jpg',
    group: 'animal',
    text: ''
  },
  {
    title: 'rat',
    cost: '1',
    imgURL: '/static/img/rat.jpg',
    group: 'animal',
    text: ''
  },

  {
    title: 'car',
    cost: '500',
    imgURL: '/static/img/car.jpg',
    group: 'animal',
    text: ''
  },

  {
    title: 'jar',
    cost: '11',
    imgURL: '/static/img/jar.jpg',
    group: 'animal',
    text: ''
  },
  {
    title: 'apple',
    cost: '10',
    imgURL: '/static/img/apple.jpg',
    group: 'food',
    text: ''
  },
  {
    title: 'phone',
    cost: '100',
    imgURL: '/static/img/phone.jpg',
    group: 'stuff',
    text: ''
  },
]

class SortingMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortingFunction: function (a, b) { return parseInt(b.cost) - parseInt(a.cost) },
    };
    this.SelectChange = this.SelectChange.bind(this);
  }

  SelectChange(e) {
    if (e.target.value == "cost_up") { this.state.sortingFunction = function (a, b) { return parseInt(b.cost) - parseInt(a.cost) } }


    if (e.target.value == "cost_down") { this.state.sortingFunction = function (a, b) { return parseInt(a.cost) - parseInt(b.cost) } }

    if (e.target.value == "alphabetAZ") {
      this.state.sortingFunction = (a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }

        return 0;
      }
    }

    if (e.target.value == "alphabetAZ") {
      this.state.sortingFunction = (a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }

        return 0;
      }
    }

    if (e.target.value == undefined) { this.state.sortingFunction = 0 }

    window.ee.emit('Sorting.on', this.state.sortingFunction);

  }

  render() {
    return (
      <select name="filter1" id="filter1" className="market-list__filter" onChange={this.SelectChange} >
        <option value="cost_up">по возрастанию цены</option>

        <option value="cost_down">по убыванию цены</option>

        <option value="alphabetAZ">по алфавиту a - z</option>

        <option value="alphabetZA">по алфавиту z - a</option>
      </select>
    )
  }

}


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
      sorting_function: (a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }

        return 0;
      },




    }

    componentDidMount() {


      var self = this;

      window.ee.addListener('Sorting.on', function (sortingFunction) {
        self.setState({
          sorting_function: sortingFunction
        })
      })


    };
    componentWillUnmount() {
      window.ee.removeListener('Sorting.on');
    };


    render() {
      let goods_list = this.state.goods.sort(this.state.sorting_function);

      return (
        <main id="market-list" >
          <article className="market-list">
            <div className="market-list__title">Магазин 1000 мелочей</div>
            <div className="market-list__search search">

              <input type="text" className="search__input"></input>
              <button className="search__button">Искать</button>
            </div>
            <div className="market-list__text">Упорядочить:</div>
            <SortingMenu />
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









