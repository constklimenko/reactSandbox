var labels_collection = [
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
    {
        description_exist: true,
        type: 'санки-коляска',
        model: 'арктик шоколад',
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
                '110*78*33'
            ],
        ]
    },

];

class LabelApp extends React.Component {
    constructor(props) {
        super(props);
        const labels_collection = props.data;
        this.state = {



        }
    }

    render() {
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
                <LabelFrame data={this.props.data} />

            </div>
        )
    }
}


class LabelFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data

        }
        console.log(props)
        console.log(this.state)
    }

    render() {

        let data = this.state.data;
        let label_frame_template = data.map(
            function (item, index) {

                return (<section className="label-frame"><div className="label-grid"> <LabelItem data={item} /></div>

                </section>)


            }
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

        if (item.description_exist) {
            return (<div className="label-box" key={index}>

                <div className="label-front" >
                    <div className="label-header">

                        {item.checkbox_is_checked ? 'товар со скидкой' : ''}</div>
                    <div className="label-title">{item.type} <br /> {item.model} </div>

                    <div className="first-price">цена <span className="price">{item.price[0]}</span> руб</div>
                    <div className="second-price">цена <span className="price">{item.price[1]}</span> руб</div>
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


                </div></div>

            )
        }
        else {
            return (

                <div className="label-front" key={index}>
                    <div className="label-header">

                        {item.checkbox_is_checked ? 'товар со скидкой' : ''}</div>
                    <div className="label-title">{item.type} <br /> {item.model} </div>

                    <div className="first-price">цена <span className="price">{item.price[0]}</span> руб</div>
                    <div className="second-price">цена <span className="price">{item.price[1]}</span> руб</div>
                    <div className="label-footer"></div>
                </div>


            )
        }




    }
}



ReactDOM.render(
    <LabelApp data={labels_collection} />,
    document.getElementById('label_app')
);