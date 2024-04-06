import { useEffect, useState } from 'react'
import { shareProfile } from '../api/shareapi'
import { useParams } from 'react-router-dom';

export const Share = ({ route }) => {

  const { token } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kisanid, setKisanid] = useState("");
  const [mobile, setMobile] = useState("");
  const [profileimg, setProfileimg] = useState("avatar.png");
  const [address, setAddress] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorous, setPhosphorous] = useState("");
  const [potassium, setPotassium] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [ph, setPh] = useState("");


  const handleShare = async () => {
    const data = await shareProfile(token);
    console.log(data.data);
    setName(data.data.name);
    setEmail(data.data.email);
    setKisanid(data.data.kisanid);
    setMobile(data.data.mobile);
    setProfileimg(data.data.profileimg);
    setAddress(data.data.address);
    setNitrogen(data.data.nitrogen);
    setPhosphorous(data.data.phosphorous);
    setPotassium(data.data.potassium);
    setHumidity(data.data.humidity);
    setTemperature(data.data.temperature);
    setRainfall(data.data.rainfall);
    setPh(data.data.ph);
  };

  useEffect(() => {
    handleShare();
  }, [])

  return (
    <div className='flex flex-col bg-yellow-100 h-screen'>
      <div className=' flex font-bold text-4xl p-10 items-center justify-center w-full'>Agro Tech</div>
      <div className='flex flex-row justify-center items-center'>
        <div className=' w-36 h-36 rounded-full'>
          <img src={profileimg} alt="" className='h-full w-full' style={{backgroundSize:"cover"}} />
        </div>
        <div className='flex flex-col p-10 gap-2'>
          <div className='flex flex-row items-center'>
            <div className=' text-slate-500 items-center p-2'>Name:</div>
            <div className='text-2xl align-middle'>{name}</div>
          </div>
          <div className='flex flex-row items-center'>
            <div className=' text-slate-500 items-center p-2'>Kisan Id:</div>
            <div className='text-2xl align-middle'>{kisanid}</div>
          </div>
          <div className='flex flex-row items-center'>
            <div className=' text-slate-500 items-center p-2'>Email:</div>
            <div className='text-2xl align-middle'>{email}</div>
          </div>
          <div className='flex flex-row items-center'>
            <div className=' text-slate-500 items-center p-2'>Mobile Number:</div>
            <div className='text-2xl align-middle'>{mobile}</div>
          </div>
        </div>

      </div>
      <div className='flex flex-col flex-wrap gap-10 justify-center'>

        <div className='flex flex-row justify-center'>
          <div style={{ width: 130 }} className=" bg-lime-500 mr-5 h-full flex flex-col items-center justify-around p-5 rounded-3xl">
            <div className="font-bold">Nitrogen</div>
            <div style={{ height: 2 }} className="w-2/3 bg-black"></div>
            <div>{nitrogen}</div>
          </div>
          <div style={{ width: 130 }} className="bg-lime-500 mr-5 h-full flex flex-col items-center justify-around p-5 rounded-3xl">
            <div className="font-bold">Phosphorus</div>
            <div style={{ height: 2 }} className="w-2/3 bg-black"></div>
            <div>{phosphorous}</div>
          </div>
          <div style={{ width: 130 }} className="bg-lime-500 mr-5 h-full flex flex-col items-center justify-around p-5 rounded-3xl">
            <div className="font-bold">Potassium</div>
            <div style={{ height: 2 }} className="w-2/3 bg-black"></div>
            <div>{potassium}</div>
          </div>
          <div style={{ width: 130 }} className="bg-lime-500 mr-5 h-full flex flex-col items-center justify-around p-5 rounded-3xl">
            <div className="font-bold">Humidity</div>
            <div style={{ height: 2 }} className="w-2/3 bg-black"></div>
            <div>{humidity}</div>
          </div>
        </div>

        <div className='flex flex-row justify-center'>
          <div style={{ width: 130 }} className="bg-lime-500 mr-5 h-full flex flex-col items-center justify-around p-5 rounded-3xl">
            <div className="font-bold">Temperature</div>
            <div style={{ height: 2 }} className="w-2/3 bg-black"></div>
            <div>{temperature}</div>
          </div>
          <div style={{ width: 130 }} className="bg-lime-500 mr-5 h-full flex flex-col items-center justify-around p-5 rounded-3xl">
            <div className="font-bold">Rainfall</div>
            <div style={{ height: 2 }} className="w-2/3 bg-black"></div>
            <div>{rainfall}</div>
          </div>
          <div style={{ width: 130 }} className="bg-lime-500 mr-5 h-full flex flex-col items-center justify-around p-5 rounded-3xl">
            <div className="font-bold">PH</div>
            <div style={{ height: 2 }} className="w-2/3 bg-black"></div>
            <div>{ph}</div>
          </div>
        </div>




      </div>
    </div>
  )
}
