// Calendar


let month_list = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
}

class MonthFrame extends React.Component {
    render() {
        const eDaysNumber = Number(this.props.data.empty);
        const DaysNumber = Number(this.props.data.days);
        let DaysArray = [];
        let emptyDaysTemplate = 0;

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



        const DaysTemplate = DaysArray.map(
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
       
        return (
            <div className="month-frame">
                <div className="month-frame__title">{this.props.data.month}</div>
                <MonthFrameHead/>
                <MonthFrame data={this.props.data} />
            </div>
        )

    }
}

class MonthFrameHead extends React.Component {

ComponentWillUpdate(){
    return false;
}

    render(){
        const DaysNameArray = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']

        const DaysTemplate = DaysNameArray.map(
            (item, index) => <div className="month-frame__day-name" key={index}>{item} </div>
        )

        return(
            <div className="month-frame__head">
                {DaysTemplate}
            </div>
        )
    }
}

class Calendar extends React.Component {
    constructor(props) {
    super(props);

        const current_date = new Date();
        const current_year = current_date.getFullYear();

        const current_month = current_date.getMonth();
        const next_month = current_month == 11 ? 0 : current_month + 1;
        
        const day_shift = this.getDayShift(current_year,current_month)

         //console.log(`current year - ${current_year} current month - ${current_month} current day shift - ${day_shift}`)

        const days_in_month = this.getLastDayOfMonth(current_year, current_month);

        const days_in_next_month = current_month == 11 ? this.getLastDayOfMonth(current_year + 1, 0) : this.getLastDayOfMonth(current_year, current_month + 1)




    this.state = {
        month_list: month_list,
        month: month_list[current_month],
        month_2: month_list[next_month],
        date: current_date,
        day_shift: day_shift,
        days: days_in_month,
        days_of_next_month: days_in_next_month,
        year:current_year,
    }
        // console.log(current_month)
        // console.log(next_month)

        this.arrowClick =this.arrowClick.bind(this)
    
    }


    getDayShift(year, month){
        const date = new Date(year, month , 1);
        const day = date.getDay();
        return day == 0 ? 6 : day - 1
    }

    
    getLastDayOfMonth(year, month) {
        const date = new Date(year, month + 1, 0);
        return date.getDate();
    };

    arrowClick(e){
        let dir_value = 0;

        console.log(e);
        console.log(e.target)
        console.log(e.target.className)
        switch (e.target.className){
            
            case 'prev_month':
                dir_value = -1;break;
            case 'next_month':
                dir_value = 1;
            }

                 
        const current_date = this.state.date;
        let current_year = current_date.getFullYear();

        let current_month = current_date.getMonth() + dir_value;

        if (current_month < 0){
            current_month = 11;
            current_year -= 1;

        }

        if (current_month > 11){
            current_month = 0;
            current_year += 1;
        }


       const new_current_date = new Date(current_year, current_month)
        
        //console.log(`current date - ${new_current_date} current month - ${current_month} current day shift - ${day_shift}`)
        let next_month = current_month == 11 ? 0 : current_month + 1;

        const day_shift = this.getDayShift(current_year, current_month)

        //console.log(`current year - ${current_year} current month - ${current_month} current day shift - ${day_shift}`)

        const days_in_month = this.getLastDayOfMonth(current_year, current_month);

        const days_in_next_month = current_month == 11 ? this.getLastDayOfMonth(current_year + 1, 0) : this.getLastDayOfMonth(current_year, current_month + 1)


        this.setState(
            {
                month: month_list[current_month],
                month_2: month_list[next_month],
                date: new_current_date,
                day_shift: day_shift,
                days: days_in_month,
                days_of_next_month: days_in_next_month,
                year: current_year,
            }
        )

    };

    render() {

       
        const empty1 = Number(this.state.day_shift);
        const days1 = Number(this.state.days);
        const empty2 = (empty1 + days1) % 7

        const value1 = {
            empty: empty1,
            days: days1,
            month: this.state.month
        }


        const value2 = {
            empty: empty2,
            days: Number(this.state.days_of_next_month),
            month: this.state.month_2
        }



        return (
            <div className="container">

                <div className="calendar-frame">
                    <Month data={value1} />

                    <Month data={value2} />
                    <div className="next_month" data-name={1} onClick={this.arrowClick}> &gt; </div>
                    <div className="prev_month" data-name={-1} onClick={this.arrowClick}> &lt; </div> 

                </div>
            </div>
        );
    }
};





ReactDOM.render(
    <Calendar />,
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