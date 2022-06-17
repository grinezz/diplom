import './Ddd.css';
import {useEffect, useState} from "react";


const db = [
  {
    date: "2022-04-25",
    time: "10:00",
    fio: "Иванов И.И."
  },
  {
    date: "2022-04-26",
    time: "18:00",
    fio: "Петрова А.Е."
  },
  {
    date: "2022-04-27",
    time: "17:00",
    fio: "Фенин М.Д."
  },
  {
    date: "2022-04-26",
    time: "15:00",
    fio: "Баков А.О."
  },
  {
    date: "2022-03-11",
    time: "11:00",
    fio: "Арапов Е. У."
  }
];

const COLORS = [
  "lightblue" //"gold", "lightcoral",
  // "lightgreen", "lightpink", "honeydew"
];

function App() {
  
  const [days, setDays] = useState([
    {name: "ПН", appointments: ["", "", "", "", "", "", "", "", "", ""]},
    {name: "ВТ", appointments: ["", "", "", "", "", "", "", "", "", ""]},
    {name: "СР", appointments: ["", "", "", "", "", "", "", "", "", ""]},
    {name: "ЧТ", appointments: ["", "", "", "", "", "", "", "", "", ""]},
    {name: "ПТ", appointments: ["", "", "", "", "", "", "", "", "", ""]},
  ]);

  
  useEffect(() => {
    
    let info = [...days];

    
    db.forEach((el) => {
      
      let date = new Date(el.date + " " + el.time);

      let dayId = date.getDay() - 1; 
      let timeID = date.getHours() - 9; 

      

      
      info[dayId].appointments[timeID] = el.fio;
    });

    
    setDays(info);
  }, []);



  const deleteAppointment = (i, j) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Вы уверены, что хотите удалить запись?")) {

      let info = [...days];
      info[i].appointments[j] = "";


      setDays(info);
    }
  };

  return (<div className="App">
    <div className="time">
      <div className="cell" />
      <div className="cell">09:00</div>
      <div className="cell">10:00</div>
      <div className="cell">11:00</div>
      <div className="cell">12:00</div>
      <div className="cell">13:00</div>
      <div className="cell">14:00</div>
      <div className="cell">15:00</div>
      <div className="cell">16:00</div>
      <div className="cell">17:00</div>
      <div className="cell">18:00</div>
    </div>


    {days.map((el, i) => {
      return <div className="day" key={i}>
        <div className="cell">{el.name}</div>


        {el.appointments.map((person, j) => {

          if (person) {
            return <div key={j} className={"cell"}>
              <div style={{
                backgroundColor: COLORS[Math.floor(Math.random() * COLORS.length)]
              }} className="appointment" onClick={() => {

                deleteAppointment(i, j);
              }}>
                <h3>{person}</h3>
              </div>
            </div>
          }


          return <div key={j} className={"cell"} onClick={() => {
            let info = [...days];
            info[i].appointments[j] = prompt("Кто записывается?");
            setDays(info)
          }} />
        })}
      </div>
    })}
  </div>);
}

export default App;
