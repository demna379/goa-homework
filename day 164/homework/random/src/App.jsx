import { useEffect, useState, useRef } from "react"

function App() {
  let date = new Date()

  const [userinfo, Setuserinfo] = useState()

  const handlesubmit = (e) => {
    e.preventDefault()
    let value = e.target.username.value
    let response = fetch(`https://api.github.com/users/${value}`)
    let data = response.then(data => data.json())
    data.then(data => Setuserinfo(data))
  }
  console.log(userinfo)

  const [bool, setBool] = useState(true)

  const [text_color, setText_color] = useState('white') // black
  const [text, setText] = useState('Light') // Dark
  const [background1, setBackground1] = useState('#1f2a48') // #fefefe
  const [background2, setBackground2] = useState('#141c2f') // #f5f8ff
  // root background: #f5f8ff, #141c2f

  return (
    <>
      <div className="w-[50%] min-h-[500px] flex flex-col gap-3 max-[861px]:w-[70%] max-[626px]:w-[85%]">
        <div className="flex justify-between h-[70px] items-center">
          <h1 className="text-[1.4rem]" style={{ color: text_color }}>devfinder</h1>
          <div onClick={() => {
            if (bool) {
              setText_color('black')
              setText('Dark')
              document.getElementById('root').style.color = 'black'
              setBackground1('#fefefe')
              setBackground2('#f5f8ff')
              document.getElementById('root').style.backgroundColor = '#f5f8ff'
              setBool(false)
            } else {
              setText_color('white')
              setText('Light')
              setBackground1('#1f2a48')
              setBackground2('#141c2f')
              document.getElementById('root').style.color = 'white'
              document.getElementById('root').style.backgroundColor = '#141c2f'
              setBool(true)
            }
          }} className="flex gap-3 items-center">
            <p style={{ color: text_color }}>{text}</p>
            <img src="/sun.png" alt="" />
          </div>
        </div>

        <form onSubmit={handlesubmit} style={{ backgroundColor: background1 }} className="w-[100%] h-[70px] rounded-[15px] items-center flex justify-between max-[535px]:h-[50px]">
          <div className="flex gap-[20px] p-[0_0_0_20px] w-[70%]">
            <img src="/search.png" alt="" />
            <input  className="outline-0 w-[100%] placeholder-[grey]" type="text" name="username" id="" placeholder="Search GitHub username..." />
          </div>
          <button className="bg-[#0079fe] text-[1.2rem] p-[10px_15px] rounded-[10px] m-[0_10px_0_0] max-[535px]:h-[80%] max-[535px]:p-[0_15px]">
            Search
          </button>
        </form>

        {
          !userinfo ?
            <div style={{ backgroundColor: background1 }} className="flex-1 rounded-[15px] flex max-[535px]:flex-col max-[535px]:items-center">
              <div className="w-[25%] flex justify-center h-[100%] max-[1199px]:w-[150px]">
                <img className="w-[100px] h-[100px] m-[40px] rounded-[50%]" src="github.png" alt="png here" />
              </div>

              <div className="flex-1 p-[40px_20px_0_0] flex flex-col gap-[20px] max-[535px]:p-[10px] max-[535px]:w-[100%]">
                <div className="w-[100%]">
                  <div className="flex justify-between items-center max-[456px]:flex-col max-[456px]:items-start">
                    <h1 className="text-[1.6rem]" style={{ color: text_color }}>Username</h1>
                    <p className="text-[#dbdde2]">join Date</p>
                  </div>
                  <p className="text-[#046fe7]">@Username</p>
                </div>

                <div>
                  <p className="text-[#8e94a2]">Bio here</p>
                </div>

                <div style={{backgroundColor: background2}} className="flex justify-between p-[10px_20px] rounded-[10px] max-[1000px]:flex-col max-[1000px]:gap-3">
                  <div>
                    <p>Repos</p>
                    <p style={{ color: text_color }}>0</p>
                  </div>
                  <div>
                    <p>Followers</p>
                    <p style={{ color: text_color }}>0</p>
                  </div>
                  <div>
                    <p>Following</p>
                    <p style={{ color: text_color }}>0</p>
                  </div>
                </div>

                <div className="flex justify-between w-[70%] max-[1136px]:gap-3 max-[1136px]:flex-col max-[1136px]:mb-[20px]">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-[20px]">
                      <img className="w-[20px]" src="/location.png" alt="" />
                      <p>location</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <img className="w-[20px]" src="/link.png" alt="" />
                      <p>https://github.blog</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-[20px]">
                      <img className="w-[20px]" src="/twitter.png" alt="" />
                      <p>Twitter</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <img className="w-[20px]" src="/building.png" alt="" />
                      <p>@github</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> :

            <div style={{ backgroundColor: background1 }} className="flex-1 rounded-[15px] flex max-[535px]:flex-col max-[535px]:items-center">
              <div className="w-[25%] flex justify-center h-[100%] max-[1199px]:w-[150px]">
                <img className="w-[100px] h-[100px] m-[40px] rounded-[50%]" src={userinfo.avatar_url} alt="png here" />
              </div>

              <div className="flex-1 p-[40px_20px_0_0] flex flex-col gap-[20px] max-[535px]:p-[10px] max-[535px]:w-[100%]">
                <div className="w-[100%]">
                  <div className="flex justify-between items-center max-[456px]:flex-col max-[456px]:items-start">
                    <h1 className="text-[1.6rem]">{userinfo.name == null ? userinfo.login : userinfo.name}</h1>
                    <p className="text-[#dbdde2]">Joined {`${userinfo.created_at}`}</p>
                  </div>
                  <p className="text-[#046fe7]">@{userinfo.login}</p>
                </div>

                <div>
                  <p className="text-[#8e94a2]">{userinfo.bio}</p>
                </div>

                <div style={{ backgroundColor: background2 }} className="flex justify-between p-[10px_20px] rounded-[10px] max-[1000px]:flex-col max-[1000px]:gap-3">
                  <div>
                    <p>Repos</p>
                    <p style={{ color: text_color }}>{userinfo.public_repos}</p>
                  </div>
                  <div>
                    <p>Followers</p>
                    <p style={{ color: text_color }}>{userinfo.followers}</p>
                  </div>
                  <div>
                    <p>Following</p>
                    <p style={{ color: text_color }}>{userinfo.following}</p>
                  </div>
                </div>

                <div className="flex justify-between w-[70%] max-[1136px]:gap-3 max-[1136px]:flex-col max-[1136px]:mb-[20px]">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-[20px]">
                      <img className="w-[20px]" src="/location.png" alt="" />
                      <p>{userinfo.location == null ? 'Not Available' : userinfo.location}</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <img className="w-[20px]" src="/link.png" alt="" />
                      <p>{userinfo.blog == '' ? 'Not Available' : userinfo.blog}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-[20px]">
                      <img className="w-[20px]" src="/twitter.png" alt="" />
                      <p>{userinfo.twitter == null ? 'Not Awailable' : userinfo.twitter}</p>
                    </div>
                    <div className="flex items-center gap-[20px]">
                      <img className="w-[20px]" src="/building.png" alt="" />
                      <p>{userinfo.company == null ? 'Not Available' : userinfo.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default App
