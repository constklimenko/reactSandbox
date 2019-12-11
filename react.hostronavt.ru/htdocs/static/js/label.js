
var labels_collection = new Array(
    {
        description_exist: true,
        type: 'санки-коляска',
        model: 'арктик бежевый',
        checkbox_is_checked: true,
        price: ['7000', '7000'],
        complectation: ['Варежки для рук',
            'Рюкзак для мамы',
            'Отстёгивающийся тент',
            'Меховой конверт белого цвета',],
        tech_char: [
            [
                'Вес модели',
                '13 кг'
            ],

            [
                'Ширина посадочного места',
                '35 см'
            ],

            [
                'Габариты в сложенном состоянии',
                '110*45*33'
            ],
        ]
    },

        
);

// console.log(`labels_collection[1].model ${labels_collection[1].model}`)
// console.log(labels_collection[0])

// var labels_collection2 = labels_collection.filter((item) => item.description_exist == false).concat(labels_collection.filter((item) => item.description_exist == true))

// console.log(labels_collection2)
class LabelApp extends React.Component {
    constructor(props) {
        super(props);

        console.log(`App.props.labels_collection ${props.labels_collection} `)
        const labels_collection = props.labels_collection;
        this.state = {



        }
    }

    render() {

        console.log(`App.props.labels_collection - ${this.props.labels_collection} `);
        console.log(`App.props.labels_collection.type - ${this.props.labels_collection.type} `)
        return (
            <div>
                <section className="label-form">
                    <div className="label-grid">
                        <div className="label-front">
                            <div className="label-header">
                                <label >товар со скидкой?<input type="checkbox" /></label>



                            </div>
                            <div className="label-title">

                                Тип товара   <input type="text" /> <br /> Модель <input type="text" /></div>

                            <div className="first-price">цена <input type="text" /> руб</div>
                            <div className="second-price">цена <input type="text" /> руб</div>
                            <div className="label-footer"></div>
                        </div>

                        <div className="label-back">
                            <div className="label-header">описание</div>
                            <div className="label-back__text">
                                <div className="complectation">
                                    Комплектация:
                        <ul>
                                        <li> <input type="text" /> </li>
                                        <li> <input type="text" /> </li>
                                        <li> <input type="text" /> </li>
                                        <button>добавить строку</button>
                                    </ul>
                                </div>
                                <p><strong>Технические характеристики</strong> </p>

                                <table className="tech-char">
                                    <tbody>
                                        <tr><td>характеристика</td>
                                            <td>значение</td>
                                        </tr>
                                        <tr><td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td> <input type="text" /></td>
                                            <td><input type="text" /></td>
                                        </tr>
                                        <tr><td><input type="text" /></td>
                                            <td><input type="text" /></td>
                                        </tr>
                                        <tr><td> <input type="text" /></td>
                                            <td><input type="text" /></td>
                                        </tr>

                                        <tr><td><button>добавить строку таблицы</button></td></tr>


                                    </tbody>

                                </table>
                                <p><button> Сохранить новый ценник </button></p>


                            </div>


                        </div>
                    </div>
                </section>
                <LabelFrame labels_collection={this.props.labels_collection} />

            </div>
        )
    }
}


class LabelFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels_collection: props.labels_collection

        }

    }

    render() {

        let data = this.state.labels_collection;
        let label_frame_template = data.map(
            function (item, index) {
                console.log(`item.description_exist ${item.description_exist}`)
                return (
                    <div key={index} className={item.description_exist ? 'label--spanbox' : ''}  ><LabelItem data={item} /></div>


                )


            }
        )

        return (<section className="label-frame" >
            <div className="label-grid">
                {label_frame_template}
            </div>

        </section>
        )
    }
}


class LabelItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        console.log(`in LabelItem this.props.data.model ${this.props.data.model}`)

        if (this.props.data.description_exist) {
            return (<div className="label-box" >

                <div className="label-front" >
                    <div className="label-header">

                        {this.props.data.checkbox_is_checked ? 'товар со скидкой' : ''}</div>
                    <div className="label-title">{this.props.data.type} <br /> {this.props.data.model} </div>

                    <div className="first-price">цена <span className="price">{this.props.data.price[0]}</span> руб</div>
                    <div className="second-price">цена <span className="price">{this.props.data.price[1]}</span> руб</div>
                    <div className="label-footer"></div>
                </div>

                <div className="label-back">
                    <div className="label-header">описание</div>
                    <div className="label-back__text">
                        <div className="complectation">
                            Комплектация:
                        <ul>
                                <li>Варежки для рук</li>
                                <li>Рюкзак для мамы</li>
                                <li>Отстёгивающийся тент</li>
                                <li>Меховой конверт белого цвета</li>
                            </ul>
                        </div>
                        <p><strong>Технические характеристики</strong> </p>

                        <table className="tech-char">
                            <tbody>
                                <tr><td>Вес модели</td>
                                    <td>13 кг</td>
                                </tr>

                                <tr><td>Ширина посадочного места</td>
                                    <td>35 см</td>
                                </tr>

                                <tr><td>Габариты в сложенном состоянии</td>
                                    <td>rtsr</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>


                </div>
            </div>

            )
        }
        else {
            return (

                <div className="label-front" >
                    <div className="label-header">

                        {this.props.data.checkbox_is_checked ? 'товар со скидкой' : ''}</div>
                    <div className="label-title">{this.props.data.type} <br /> {this.props.data.model} </div>

                    <div className="first-price">цена <span className="price">{this.props.data.price[0]}</span> руб</div>
                    <div className="second-price">цена <span className="price">{this.props.data.price[1]}</span> руб</div>
                    <div className="label-footer"></div>
                </div>


            )
        }




    }
}



fetch('static/js/label_collection.json').then(function (response) {
    if(response.ok){
        response.json().then(function (labels_collection) {

            var labels_collection2 = labels_collection.filter((item) => item.description_exist == false).concat(labels_collection.filter((item) => item.description_exist == true))

            ReactDOM.render(
                <LabelApp labels_collection={labels_collection2} />,
                document.getElementById('label_app')
            );

        });
    } else {

        ReactDOM.render(
            <LabelApp labels_collection={labels_collection} />,
            document.getElementById('label_app2')
        );

        ReactDOM.render(
            <h1>Файла с данными о ценниках пока не существует. Ниже расположена форма для его создания и пример того, как всё будет выглядеть</h1>,
            document.getElementById('label_app')
        );

    }
});