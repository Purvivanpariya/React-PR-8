import React, { useEffect, useState } from 'react'
import './App.css';
function Movie({movie,setMovie}) {
  
    const [filterdata,setFilterData] = useState([])  
    const [status,setStatus] = ('') 
    const [Search,setSearch] = useState('')
    


      useEffect(()=>{
        let old = [...movie]
        let loc = localStorage.setItem('user',JSON.stringify(old))
        setMovie(loc) 
      },[])

      useEffect(()=>{
        if(Search.length == 0){
          let answer = JSON.parse(localStorage.getItem('user'))
          setMovie(answer)
        }else{
          const sea = movie.filter((val)=>val.name.toLowerCase().includes(Search.toLowerCase()))
          setMovie(sea)
        }
      },[Search])

      useEffect(()=>{

        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
      },[])


      const Favorite = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.status === "Favorite"
        })
        setMovie(ans)
      }
      const Trending = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.status === "Trending"
        })
        setMovie(ans)
      }
      const Upcoming = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.status === "Upcoming"
        })
        setMovie(ans)
      }
      const General = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)   
      }


    const Thriller = () =>{
      const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "Thriller"
        })
        setMovie(ans)
      }

      const Animation = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "Animation"
        })
        setMovie(ans)
      }

      const Action = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "Action"
        })
        setMovie(ans)
      }

      const Family = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "Family"
        })
        setMovie(ans)
      }

      const Comedy = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "Comedy"
        })
        setMovie(ans)
      }

      const Drama = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "Drama"
        })
        setMovie(ans)
      }

      const Love = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "Love"
        })
        setMovie(ans)
      }

      const Horrer = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "Horrer"
        })
        setMovie(ans)
      }

      const History = () =>{
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
        let ans = all.filter((val)=>{
          return val.category === "History"
        })
        setMovie(ans)
      }

      const All = () =>{
        
        const all = JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        setMovie(all)
      }


  return (
    <div>
      <div>
        <div style={{width:'300px',height:'100vh',zIndex:'999', backgroundColor:'#000',color:'gray',position:'fixed', alignItems:"center",justifyContent:"center",textAlign:'center'}}>
        <div className="img">
            <img style={{margin:'0 auto',display:'flex',paddingTop:'20px'}} src="https://yt3.ggpht.com/a/AGF-l7_zKGzBOV1Jj4bw9xWpUfcrvXwFHoEQz9RJzg=s88-c-k-c0xffffffff-no-rj-mo" width={120} alt="" />
            <h2>Star Movies</h2>
        </div> 
        <div className="button" style={{justifyContent:'center',flexWrap:'wrap',padding:'100px 0 150px'}}>
            <button style={{borderRadius:'7px',width:'70%',marginBottom:'10px',backgroundColor:'rgba(255, 255, 255, 0.100)',fontSize:'16px',color:'white',height:'36px'}} onClick={Trending}>Trending</button>
            <button style={{borderRadius:'7px',width:'70%',marginBottom:'10px',backgroundColor:'rgba(255, 255, 255, 0.100)',fontSize:'16px',color:'white',height:'36px'}} onClick={Upcoming}>Upcoming</button>
            <button style={{borderRadius:'7px',width:'70%',marginBottom:'10px',backgroundColor:'rgba(255, 255, 255, 0.100)',fontSize:'16px',color:'white',height:'36px'}} onClick={Favorite}>Favorite</button>
            <button style={{borderRadius:'7px',width:'70%',marginBottom:'10px',backgroundColor:'rgba(255, 255, 255, 0.100)',fontSize:'16px',color:'white',height:'36px'}} onClick={General}>General</button>
        </div>
        <button style={{borderRadius:'7px',width:'90%',marginBottom:'10px',backgroundColor:'rgba(255, 255, 255, 0.100)',fontSize:'16px',color:'white',height:'36px',marginTop:'50px'}}>Log In</button>
        </div>
        <div style={{marginLeft:'300px'}}>
        <div style={{background:'linear-gradient(90deg, rgba(106,0,134,1) 0%, rgba(176,30,170,1) 40%, rgba(119,78,208,1) 67%, rgba(0,57,255,1) 100%)',padding:"70px",display:"flex",justifyContent:"center"}}>
            <input type="text" style={{width:'400px',borderRadius:'8px',padding:'10px',border:'none',outline:'none'}} placeholder='Search' name="" id="" onChange={(e) => setSearch(e.target.value)} value={Search}/>
        </div>
        <div
      style={{
        width: "85%",
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        paddingTop: "35px",
        justifyContent: "center"
      }}
    >
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={Thriller}
      >
        Thriller
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={Animation}
      >
        Animation
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={Action}
      >
        Action
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={Family}
      >
        Family
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={Comedy}
      >
        Comedy
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={Drama}
      >
        Drama
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={Love}
      >
        Love
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={Horrer}
      >
        Horrer
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={History}
      >
        History
      </button>
      <button
          className='btns' 
        style={{
          width: "100px",
          border: "none",
          fontWeight: "700",
          height: "30px",
          fontSize: "15px",
          borderRadius: "7px",
          marginRight: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.100)",
          marginBottom: "20px",
          color: "white",
        }}
        onClick={All}
      >
        All
      </button>
    </div>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
        {
        movie.map((val) => {
          return (
              <div className="card m-2 shadow-lg" style={{ width: "20rem" ,backgroundColor:'rgba(255, 255, 255, 0.100)',padding:'15px'}}>
                <img src={val.image} style={{height:'250px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white text-center P">{val.name}</h5>
                  <p className="card-text text-white text-center">{val.category}</p>
                </div>
              </div>
          );
        })}
      </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
