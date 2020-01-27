
// библиотека реализует паттерн Наблюдатель
window.ee = new EventEmitter()


// our MarketList

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
    // событие отправляет фильтрующую функцию в вышележащий компонент
    if (e.target.value == "food") { this.state.filteringFunction = function (a, b) { return a.group == "food" } }

    if (e.target.value == "animal") { this.state.filteringFunction = function (a) { return a.group == "animal" } }

    if (e.target.value == "stuff") { this.state.filteringFunction = function (a) { return a.group == "stuff" } }

    if (e.target.value == "all") { this.state.filteringFunction = function (a) { return true } }

    if (e.target.value == undefined) { this.state.filteringFunction = function (a) { return true } }

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

    if (!e.target.value) {
      document.querySelector('.search__button').innerHTML = "Показать все"
    } else {
      document.querySelector('.search__button').innerHTML = "Искать"
    }
  };

  ButtonPush(e) {


    const s_value = this.state.searching_value;

    if (s_value) {
      const searchingFunction = function (a) {
        return (a.title.indexOf(s_value) != -1)
      }
      window.ee.emit('Searching.on', searchingFunction);

    }
    else {

      const searchingFunction = (a) => { return true };
      window.ee.emit('Searching.on', searchingFunction);
      document.querySelector('.search__button').innerHTML = "Искать"
    }

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

class MarketListItemButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}

    this.ButtonPush = this.ButtonPush.bind(this);
  }

  ButtonPush(e) {
    const item = this.props.data;
    // alert(item);
    window.ee.emit('Item.push', item);

  };

  render() {
    return (
      <button className="market-list__item__button" onClick={this.ButtonPush}>в корзину</button>
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
            <div className="market-list__item" key={index} >
              <input type="checkbox" name="" id="" className="market-list__item__checkbox v-none" ></input>
              <div className="market-list__item__title">{item.title}

              </div>
              <small className="market-list__item__group">{item.group}</small>
              <img className="market-list__item__img" src={item.imgURL} alt={item.title}></img>
              <div className="market-list__item__number-input  number-input" >
                <input className="number-input__input" type="text" ></input>
                <span className="number-input__plus">+</span>
                <span className="number-input__minus">-</span>

              </div>

              <div className="market-list__item__cost">${item.cost}</div>
              <MarketListItemButton data={item} />


            </div >
          );
        }
      )
    } else {
      itemsTemplate = <p>К сожалению, товаров нет</p>
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

  componentDidMount() {
    const self = this;

    window.ee.addListener('Item.push', function (item) {

      var goods = self.state.choosen_goods;

      var title = item.title;
      if (goods.length == 0) {
        var item2 = goods.concat(item);

        self.setState({
          choosen_goods: item2,
          [title]: 1
        })
      } else {
        if (!self.state[title]) {
          var item2 = goods.concat(item);

          self.setState({
            choosen_goods: item2,
            [title]: 1
          })
        }
        else {
          self.setState((prevState) => {

            return { [title]: prevState[title] + 1 }
          })

        }
      }
    });

    window.ee.addListener('Delete.row', function (item) {


      var goods = self.state.choosen_goods.filter((a) => {
        return a.title != item.title
      });
      self.setState((prevState) => {

        return {

          choosen_goods: goods,
          [item.title]: 0
        }
      }

      )
    })
  };
  componentWillUnmount() {
    window.ee.removeListener('Item.push');
    window.ee.removeListener('Delete.row');
  };





  render() {
    return (
      <aside className={(this.state.choosen_goods.length > 0) ? "cart" : "d-none"}>

        <CartMain super_state={this.state} data={this.state.choosen_goods} />

        <div className="cart__statistics"></div>
      </aside>
    )
  }
}


class CartMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  };

  render() {
    var data = this.props.data;
    self = this

    var itemsTemplate;

    if (data.length > 0) {
      itemsTemplate = data.map(
        function (item, index) {
          return (


            <div className="cart__main__row cart-row" key={index}>
              <div className="cart-row__title">{item.title}</div>
              <div className="cart-row__group">{item.group}</div>
              <div className="cart-row__cost">{item.cost}</div>
              <div className="cart-row__number">{self.props.super_state[item.title]}</div>
              <div className="cart-row__cost">{self.props.super_state[item.title] * item.cost}</div>

              <CartRowClose item={item} />

            </div>


          )
        });
    } else {
      itemsTemplate = <p>К сожалению, товаров нет</p>
    };

    // анализ сумм по группам

    let summ = data.reduce((prevVal, item) => {
      return self.props.super_state[item.title] * item.cost + prevVal;
    }, 0)

    let summ_food = data.filter((item) => { return item.group == "food" }).reduce((prevVal, item) => {
      return self.props.super_state[item.title] * item.cost + prevVal;
    }, 0);

    let summ_stuff = data.filter((item) => { return item.group == "stuff" }).reduce((prevVal, item) => {
      return self.props.super_state[item.title] * item.cost + prevVal;
    }, 0);

    let summ_animal = data.filter((item) => { return item.group == "animal" }).reduce((prevVal, item) => {
      return self.props.super_state[item.title] * item.cost + prevVal;
    }, 0);

    let animal_percent = Math.floor((summ_animal * 100) / summ);

    let stuff_percent = Math.floor((summ_stuff * 100) / summ);

    let food_percent = Math.floor((summ_food * 100) / summ);

    return (
      <div className="cart__main">
        <div className="cart__main__title">Список покупок</div>
        <p className="cart__text" >Стоимость всех покупок: $ {summ}</p>
        <p className="cart__text" >Еда:  {food_percent} %</p>
        <p className="cart__text" >Животные:  {animal_percent} %</p>
        <p className="cart__text" >Предметы:  {stuff_percent} %</p>
        <div className="cart__main__row cart-row" >
          <strong className="cart-row__title"><small>Товар</small></strong>
          <strong className="cart-row__group"><small>группа</small></strong>
          <strong className="cart-row__cost"><small>цена</small></strong>
          <strong className="cart-row__number"><small>количество</small></strong>
          <strong className="cart-row__cost"><small>общая стоимость</small></strong>
        </div>

        {itemsTemplate}



      </div>
    )
  }
}

class CartRowClose extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.ButtonPush = this.ButtonPush.bind(this);
  }

  ButtonPush(e) {

    let item = this.props.item;

    window.ee.emit('Delete.row', item)
  }

  render() {
    return (
      <button className="cart-row__button" onClick={this.ButtonPush} >x</button>
    )
  }

}

// получение данных о товарах из файла json

fetch('static/js/market_list.json').then(function (response) {
  if (response.ok) {
    response.json().then(function (labels_collection) {



      ReactDOM.render(
        <MarketList data={labels_collection} />,
        document.getElementById('market-list-root')
      );

    });
  } else {



    ReactDOM.render(
      <h1>Файла с данными о товарах  не существует.</h1>,
      document.getElementById('market-list-root')
    );

  }
});








