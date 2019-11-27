// Calendar


let month_list = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь'
}

class MonthFrame extends React.Component {
    render() {
        var eDaysNumber = Number(this.props.data.empty);
        var DaysNumber = Number(this.props.data.days);
        var DaysArray = [];
        var emptyDaysTemplate = 0;

        if (eDaysNumber >= 1) {
            var eDaysArray = [];

            for (let i = 0; i < eDaysNumber; i++) {
                eDaysArray[i] = 1;

            }

            emptyDaysTemplate = eDaysArray.map(
                function (item, index) {
                    return (
                        <div key={index + 1}></div>
                    )
                }
            )
        }
        else {
            emptyDaysTemplate = ''

        }

        for (let i = 1; i <= DaysNumber; i++) {
            DaysArray[i - 1] = i;

        }



        let DaysTemplate = DaysArray.map(
            function (item, index) {
                return (
                    <div key={index + 1 + eDaysNumber} className="day">{item}</div>
                )
            }
        )

        return (
            <div className="month-frame__days">
                
                {emptyDaysTemplate}
                <p className="none day" >0</p>
                {DaysTemplate}
            </div>
        )


    }
}

class Month extends React.Component {
    render() {
        let value1 = {
            empty: this.props.data.empty,
            days: this.props.data.days,
            month: this.props.data.month
        };

        return (
            <div className="month-frame">
                <div className="month-frame__title">{value1.month}</div>
                <div className="month-frame__head">
                    <div className="month-frame__day-name">Mon </div>
                    <div className="month-frame__day-name">Tue</div>
                    <div className="month-frame__day-name">Wen</div>
                    <div className="month-frame__day-name">Thu</div>
                    <div className="month-frame__day-name">Fry</div>
                    <div className="month-frame__day-name">Sat</div>
                    <div className="month-frame__day-name">Sun</div>

                </div>
                <MonthFrame data={value1} />
            </div>
        )

    }
}

class Calendar extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
     month_list: month_list,
     month: 'Май',
     month_2: 'Июнь'
    }

    this.counterPlus = this.counterPlus.bind(this)
  }



    render() {

        

        let empty1 = Number(this.props.data.empty);
        let days1 = Number(this.props.data.days);
        let empty2 = (empty1 + days1) % 7

        let value1 = {
            empty: empty1,
            days: days1,
            month: this.state.month
        }


        let value2 = {
            empty: empty2,
            days: 30,
            month: this.state.month_2
        }

        return (
            <div className="container">

                <div className="calendar-frame">
                    <Month data={value1} />

                    <Month data={value2} />

                </div>
            </div>
        );
    }
};

var date_info = {
    days: 30, 
    month: 11,
    empty: 4,
}



ReactDOM.render(
    <Calendar data={date_info}/>,
    document.getElementById('calendar')
);




 

// функционал календаря
var oval_count = 0;



var Elements = document.getElementsByClassName("day");
var days_list = new Array(Elements.length);

days_list.forEach(element => {
    element = 0;
});

for (var i = 0; i < Elements.length; i++) {

    Elements[i].onclick = toggleOval;
    Elements[i].dataNumber = i;

}

function toggleOval() {

    let number = this.dataNumber;
    // alert(number);
    if (days_list[number] != 1) {

        if (oval_count < 2) {
            this.classList.toggle('month-frame__oval');
            oval_count++;
            days_list[number] = 1;
            underblue()
        }
        else {
            //  alert('oval_count >= 2');
        }

    } else {
        if (oval_count > 0) {
            this.classList.toggle('month-frame__oval');
            oval_count--;
            days_list[number] = 0;
            underblue()
        }
        else {
            //  alert('oval_count <= 0');
        }
    }



}

function underblue() {
    if (oval_count == 2) {
        let left_num = 0;
        let right_num = 0;

        for (let j = 0; j < days_list.length; j++) {
            if (days_list[j] == 1) {
                if (left_num == 0) {
                    left_num = j;
                } else {
                    right_num = j;
                }
            }

        }

        for (let i = left_num + 1; i < right_num; i++) {
            Elements[i].classList.toggle('lb');
        }

    }
    else {
        for (let i = 0; i < Elements.length; i++) {
            Elements[i].classList.remove('lb');
        }
    }
}