import React from 'react';
import style from '../Theme/Success.module.css';


export default function Home() {

    function getGreetingMsg(){
        let currentHour = new Date().getHours()
        if (currentHour < 12){
          return "Good Morning !";
        }else if(currentHour < 17){
          return "Good Afternoon !";
        }else{
          return "Good Evining !"
        }
      }

    let greeting = getGreetingMsg()

    return (
        <div className={style.successPage}>
            <h1>{greeting}</h1>
            <h2>Welcome To Home Page !</h2>
        </div>
    )
}
