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
  const [phosphorus, setPhosphorus] = useState("");
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
    setPhosphorus(data.data.phosphorus);
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
    <div className='flex flex-col justify-center'>
      <div className='text-3xl p-10 align-middle justify-center w-full'>Agro Tech</div>
      <div className='flex flex-row justify-around'>
        <div className='w-20 h-20 rounded-full'><img src={profileimg} alt="" className='h-full w-full' /></div>
        <div className='flex flex-col'>
          <div>{name}</div>
          <div>{kisanid}</div>
        </div>

      </div>
      <div className='flex flex-col'>
        <div>{email}</div>
        <div>{mobile}</div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div>{nitrogen}</div>        
      </div>
    </div>
  )
}
