
// библиотека реализует паттерн Наблюдатель
window.ee = new EventEmitter()


// our MarketList


// список товаров
let my_goods = [
  {
    title: 'icecream',
    cost: '2',
    imgURL: '/static/img/iсecream.jpg',
    group: 'food',
    text: ''
  },

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
    group: 'stuff',
    text: ''
  },

  {
    title: 'jar',
    cost: '11',
    imgURL: '/static/img/jar.jpg',
    group: 'stuff',
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


class FilteringMenu extends React.Component {
  // Выполняет фильтрацию по группе
  constructor(props) {
    super(props);
    this.state = {
      filteringFunction: (a) => { return true },
    };
    this.SelectChange = this.SelectChange.bind(this);
  }

  SelectChange(e) {
    if (e.target.value == "food") { this.state.filteringFunction = function (a, b) { return a.group == "food" } }


    if (e.target.value == "animal") { this.state.filteringFunction = function (a) { return a.group == "animal" } }

    if (e.target.value == "stuff") { this.state.filteringFunction = function (a) { return a.group == "stuff" } }

    if (e.target.value == "all") { this.state.filteringFunction = function (a) { return true } }

    if (e.target.value == undefined) { this.state.filteringFunction = function (a) { return true } }
    // событие отправляет фильтрующую функцию в вышележащий компонент
    window.ee.emit('Filtering.on', this.state.filteringFunction);

  };

  render() {
    return (
      <div className="market-list__group-filter group-filter">

        <div className="group-filter__text">Группы товаров</div>
        <select name="filter2" id="filter2" className="group-filter__filter" onChange={this.SelectChange}>
          <option value="all">все</option>

          <option value="animal">животные</option>

          <option value="stuff">предметы</option>

          <option value="food">еда</option>
        </select>
      </div>


    )
  }

}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      searching_value: ""
    };
    this.InputChange = this.InputChange.bind(this);
    this.ButtonPush = this.ButtonPush.bind(this);
  };

  InputChange(e) {
    this.setState({
      searching_value: e.target.value
    })
  };

  ButtonPush(e) {
    const s_value = this.state.searching_value;
    const searchingFunction = function (a) {
      return (a.title.indexOf(s_value) != -1)
    }

    window.ee.emit('Searching.on', searchingFunction);

  };

  render() {
    return (
      <div className="market-list__search search">

        <input type="text" className="search__input" onChange={this.InputChange}></input>
        <button className="search__button" onClick={this.ButtonPush}>Искать</button>
      </div>
    )
  }
}


class SortingMenu extends React.Component {
  // Выполняет сортировку по алфавиту и по цене
  constructor(props) {
    super(props);
    this.state = {
      sortingFunction: function (a, b) { return parseInt(b.cost) - parseInt(a.cost) },
    };
    this.SelectChange = this.SelectChange.bind(this);


  }




  SelectChange(e) {
    if (e.target.value == "cost_down") { this.state.sortingFunction = function (a, b) { return parseInt(b.cost) - parseInt(a.cost) } }


    if (e.target.value == "cost_up") { this.state.sortingFunction = function (a, b) { return parseInt(a.cost) - parseInt(b.cost) } }

    if (e.target.value == "alphabetAZ") {
      this.state.sortingFunction = function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }

        return 1;
      }
    }

    if (e.target.value == "alphabetZA") {
      this.state.sortingFunction = function (a, b) {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }

        return 1;
      }
    }

    if (e.target.value == undefined) { this.state.sortingFunction = 0 }
    // событие отправляет сортирующую функцию в вышележащий компонент
    window.ee.emit('Sorting.on', this.state.sortingFunction);

  };

  render() {
    return (
      <div className="market-list__sorting sorting"><div className="sorting__text">Упорядочить:</div>
        <select name="filter1" id="filter1" className="sorting__filter" onChange={this.SelectChange} >
          <option value="cost_up">по возрастанию цены</option>

          <option value="cost_down">по убыванию цены</option>

          <option value="alphabetAZ">по алфавиту a - z</option>

          <option value="alphabetZA">по алфавиту z - a</option>
        </select></div>


    )
  };

};


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

      goods: this.props.data,
      sorting_function: (a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }

        return 0;
      },
      filtering_function: (a) => { return true },
      searching_function: (a) => { return true },
    }
  }

  componentDidMount() {
    var self = this;


    //добавляем наблюдение за событиями фильтров
    window.ee.addListener('Sorting.on', function (sortingFunction) {
      self.setState({
        sorting_function: sortingFunction
      })
    });

    window.ee.addListener('Filtering.on', function (filteringFunction) {
      self.setState({
        filtering_function: filteringFunction
      })
    })

    window.ee.addListener('Searching.on', function (searchingFunction) {
      self.setState({
        searching_function: searchingFunction
      })
    })


  };
  componentWillUnmount() {
    window.ee.removeListener('Sorting.on');
    window.ee.removeListener('Filtering.on');
    window.ee.removeListener('Searching.on');
  };


  render() {
    let goods_list = this.state.goods.sort(this.state.sorting_function).filter(this.state.filtering_function).filter(this.state.searching_function);

    return (
      <main id="market-list" >
        <article className="market-list">
          <div className="market-list__title">Магазин 1000 мелочей</div>
          <SearchForm />


          <SortingMenu />


          <FilteringMenu />

          < MarketListItem data={goods_list} />



        </article>

        <Cart />
      </main>

    );
  }

}


class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        choosen_goods: [],

      }
  };


  render() {
    return (
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
    )
  }
}

// получение данных о товарах из файла json

fetch('static/js/market_list.json').then(function (response) {
  if (response.ok) {
    response.json().then(function (labels_collection) {



      ReactDOM.render(
        <MarketList data={labels_collection} />,
        document.getElementById('market-list')
      );

    });
  } else {



    ReactDOM.render(
      <h1>Файла с данными о товарах  не существует.</h1>,
      document.getElementById('market-list')
    );

  }
});








