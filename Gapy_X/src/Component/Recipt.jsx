import React from "react"
import Tick from "../assets/google-pay-success.jpg"
import Sound from "../assets/Gpay_PaymentSound.mp3"

export default function Recipt(){

    function ring(){
        let input = document.querySelector("#money-input")
        let moneyShow = document.querySelector("#money-display")
        console.log(input.value) 
        moneyShow.innerHTML = "₹ "+input.value
        input.remove()
        let sound = document.querySelector("#paied")
        sound.play()
    }

    let d = new Date()  
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "dateecember"];
    let [date,month,year,hour,min] = [d.getDate(),monthNames[d.getMonth() ],d.getFullYear(),d.getHours(),d.getMinutes()]
    hour.toString().length===1 ? hour ="0"+hour.toString() : hour
    min.toString().length===1 ? min ="0"+min.toString() : min
    
    return(
        <div className="recipt-container">
            <img src={Tick} alt="bruh" onClick={ring}/>
            <h1 id="money-display"><span id="rupee">₹</span> <input id="money-input" type="number" placeholder=".00"/>
                </h1>
            <div className="reciverInfo">
                <input className="light" type="text" placeholder={"Paid to Subramaniyam Iyar"}></input>
                <input className="dim" type="text" placeholder={"Iyar19856@Paytm"}></input>
            </div>
            <div className="dateInfo">
                <p className="light">{date+" "+month+" "+year+" "+hour+":"+min}</p>
                <input className="dim" type="text" placeholder={"UPI transaction ID: 54139746821"}></input>
            </div>
                <audio id="paied"controls hidden>
                    <source src={Sound} type="audio/mpeg"/>
                </audio>
        </div>
    )
}