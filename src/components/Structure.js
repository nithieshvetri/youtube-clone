
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import {fetchRequest, Play} from '../actions'
import { connect } from "react-redux";
import {GrChannel} from 'react-icons/gr'



function Media({data,play,next,fetchrequest}) {
console.log(data,"nithiesh")
const navigate=useNavigate()


  return (
    <div className="home-content" >
    <Grid container wrap="wrap" margin="auto" justifyContent="center">
      { !data?<img  alt="loading" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIA5wMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EADYQAQACAgECBAQCBwkBAAAAAAABAgMEEQUhBhIxYRMiQVFxsRUjMnKBkaEUNTdSdMHh8PEH/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4gAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyx4smW3lxY73t68VrMyxAG72vDO/qdBxdYyTjnXyRW3lifmrW3pM/wBGkkAAAAAAAAAAAAAAAAAAAAAAAABPOltV1q7VsGSMFp4jJNflmfxQO+8Jda1d/Rp0XqGOnminkpFo+XLWPp+KI1//AM23cev1jLrX4i2zj4pb68x34/jHP8lHxx039HdcyTjp5cWzX4tPt39Y/nCTrvRdnw7v493Tta2CMkXxX+tLc/sz/wB7tr446n0rq3RtTNr56W2YtzWkd7ViY+aJ/oDbde/wv1/9Nr/nV8ypHMut6l4q1drwbg6NXBljYrTHjvaePLxSY7x+PEOTiYrX3BjeeZPLMRzMTx90uvh88+a37P5stnLEx8OvpCqrgAAAAAAAAAAAAAAAAAAAAREz6A63w50/ofUOnfBz2j+2TM+bm/lvH7vsx3/Buzgt8Tpuf4sR3rW0+W8fx/8AGjr0bqfaY0s3t2bbU3fEnTcUzOLLfDSO8ZqeaIj80RH1HxNv7HS7dL3MNPiV+TJlnnzTxPpMff3c8k2c+TZ2MmfNPmyZLTa0+8o1UABNGW9qRjrDLHqzPe88e0IKWmlotX1TXjZyR3rbifZEebFcVYiMcxNufpPKFnODLETM47cQwVQAAAAAAAAAAAAAAAAABljvOO9b07WrMWifeGIDpo8ZbXEc6mHn96Xl/FW7s474sOnjm1qzHNObTH8EXRei6mfUjc28vNeZ+XzcRX8ZXsvXOm9PpOPRpF5r6Rjjiv8ANEcjMcdha28exnnJvZMFq48t5t5ojt3VQAFV7XnzRx3nlaneyR2tjrz7osXxMM0zTj+WfrPpK1GfBnji8REz9JRENt69qzEUrHMeqqs7WvTFETS0959JVlUAAAAAAAAAAAAAAAAAAAB7FrceXmeJn057Nv0TpM7P6/Zr+oj0r/n/AOGnX/0vsxo11KzFaxHl88esx9gX+u9TrkrOlq8TSPltaPb6Qpb/AE2NPWplnJM3meJrP3Y9F14z7kWmOaYo80x7/RJ1/Y+Lsxiiflxx3/GURUvp5aatdi3Hkt792VdSL6vxa25txzxH0X9r+5cf7lP9lXpuTtfDb8Y5B7p7Fc2OMGX144j3hX29a2C3Md6T6ezDZx/Bz2rHP3q9ybWTJijHbjiPWfrIIeZ+4CqAAAAAAAAAAAAAAAAAAAAAAn1NvNqWtOGYjzdp5jlDkvbJa17zza08zLwBfzbtMnTqa8RPniIie3bspUvbHeL0niYYgM8uW2a83vPMsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=" />:data.map((item, index) => (
        <Box   className="card" onClick={()=>{
          play(item)
          
          navigate('/playing',{state:{id:item.id.videoId}})}} key={index} sx={{ width: 280,justifyContent:'center', marginRight: 0.5,marginLeft:0.7, my: 5 ,marginBottom:0.6}}>
          {item.snippet ? (
            <img
              style={{ width: 250, height: 150}}
              alt={item.title}
              src={item.snippet?.thumbnails.high.url}
            />
          ) : (
            <Skeleton variant="rectangular" width={240} height={118} />
          )}

          {item ? (
            <Box   sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.snippet?.title}
              </Typography>
              <Typography display="block"  variant="caption" >
                <GrChannel       style={{ color: 'white', size: '50px' }}
 />
                { item.snippet?.channelTitle}
              </Typography>
              <Typography variant="caption" >
               Released at  {`${item.snippet?.publishTime.substr(0,10)} `}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
    </div>
  );
}

 function Structure({data,play,next,fetchrequest}) {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media  data={data} next={next}  fetchrequest={fetchrequest} play={play}/>
    </Box>
  );
}

const mapstatetodispatch=dispatch=>{
  return {
    play:(data)=>dispatch(Play(data)),
    fetchrequest:(search)=>dispatch(fetchRequest(search))
  }
}

export default connect(null,mapstatetodispatch)(Structure)

