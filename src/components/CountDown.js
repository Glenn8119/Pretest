import React, { useEffect, useState } from "react";

const CountDown = () => {
    //重新進入網站後當下的時間
    const date = new Date();
    //明天的同一時間
    const tomorrow = new Date(date.getTime()+86400000);

    const [ timeArr, setTimeArr ] = useState([23,59,59])


    useEffect(()=>{
        //每秒都會取一次新的時間和tomorrow比對
        setInterval(() => {
            const date = new Date();
            const timeDifference = new Date(tomorrow-date).getTime()
            if(timeDifference>0){
                const hour = new Date(timeDifference).getUTCHours();
                const minute = new Date(timeDifference).getUTCMinutes();
                const second = new Date(timeDifference).getUTCSeconds();
                setTimeArr([hour, minute, second]);
            } else {
                setTimeArr([0,0,0])
            }
        }, 1000);
    }, [])

    return (
        <div className="count-down">
            再過 <span>{timeArr[0]}</span>時<span>{timeArr[1]}</span>分<span>{timeArr[2]}</span>秒，就達成連續瀏覽此網頁一天的成就了！（但是沒有獎勵...）
        </div>
    )
}

export default CountDown;