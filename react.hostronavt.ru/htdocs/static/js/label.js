var labels_collection = [
    {
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
    {},
    {}
];

class LabelApp extends React.Component {
    constructor(props) {
        super(props);
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
                            <label >товар со скидкой?<input  type="checkbox" /></label>



                        </div>
                        <div className="label-title">

                            санки-коляска <br />> пикате арктик</div>

                        <div className="first-price">цена <input  type="text" /> руб</div>
                        <div className="second-price">цена <input type="text"  /> руб</div>
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

                <section className="label-frame">
                    <div className="label-grid">
                        <div className="label-front">
                            <div className="label-header">товар со скидкой</div>
                            <div className="label-title">санки-коляска <br/>> пикате арктик</div>

                                <div className="first-price">цена <span className="price">7000</span> руб</div>
                                <div className="second-price">цена <span className="price">7000</span> руб</div>
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
    </section>
    </div>
                )
            }
        }
        
        
        
        ReactDOM.render(
    <LabelApp />,
                document.getElementById('label_app')
);