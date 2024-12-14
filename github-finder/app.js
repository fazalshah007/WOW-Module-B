let inputFeild = document.getElementById("inputFeild");
const btn = document.getElementById("btn");
const root = document.getElementById("root")




btn.addEventListener("click", async function(){

    if(inputFeild.value === ""){
        Swal.fire({
            title: "Sorry!",
            text: "Enter the username.",
            icon: "error"
          }).then((data) => {
            if(data.isConfirmed){
               window.location.reload()
                
            }else if(data.isDismissed){
                window.location.reload()
            }
          })
          inputFeild.value = ""
          return 
    }else{

        
        root.innerHTML = `
          <div class="loading">
            <div class="loader"></div>
          </div>
    `

   const url = `https://api.github.com/users/${inputFeild.value}`

   const res = await fetch(url)
   const data = await res.json()
   profileShow(data) 
   inputFeild.value = ""
}
})


function profileShow(data){

    
    if(data.status == 404){
        root.innerHTML = ` <div class="loading">
        <h1>User ${data.message}</h1>
        <button onclick="goBackTo()">Refresh</button>
        </div>`
    }else{
        root.innerHTML = `
              <div class="first">
                <div class="start">
                    <img src=${data.avatar_url} alt="">
                </div>
                <div class="middle">
                    <h1>${data.name !== null ? data.name : data.login }</h1>
                    <h3>@${data.login}</h3>
                    <p>${data.bio !== null ? data.bio : "No Bio"}</p>
                </div>
                <div class="end"><h3>joined ${new Date(data.created_at).toLocaleString("en-US",{
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}</h3></div>
            </div>
            <div class="second">
                <div class="secondFirst">
                    <h4>Repos</h4>
                    <h1>${data.public_repos}</h1>
                </div>
                <div class="secondMiddle">
                    <h4>Followers</h4>
                    <h1>${data.followers}</h1>
                </div>
                <div class="secondlast">
                    <h4>Following</h4>
                    <h1>${data.following}</h1>
                </div>
            </div>

            <div class="third">
                <div class="items">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 2.5C21.11 2.5 12.25 11.85 12.25 23.35C12.25 34.35 30.02 59.79 30.77 60.86C30.9096 61.0561 31.0941 61.2159 31.3081 61.3262C31.522 61.4365 31.7593 61.4941 32 61.4941C32.2407 61.4941 32.478 61.4365 32.6919 61.3262C32.9059 61.2159 33.0904 61.0561 33.23 60.86C34 59.79 51.75 34.39 51.75 23.35C51.75 11.85 42.89 2.5 32 2.5ZM22.77 23.35C23.27 11.12 40.77 11.12 41.23 23.35C40.73 35.59 23.27 35.58 22.77 23.35Z" fill="black"></path>
                        </svg>
                        <h2>${data.location ? data.location : "No Address"}</h2>
                </div>
                <div class="items">
                    <svg width="20px" height="16px" viewBox="0 0 20 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                       
                        <title>twitter [#154]</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <h2>${data.twitter_username ? data.twitter_username : "No Account"}</h2>
                </div>
                <div class="items">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path d="M42.783,5.217c-4.289-4.289-11.267-4.289-15.556,0l-9.9,9.899c-4.289,4.289-4.289,11.267,0,15.556,.736,.736,1.556,1.336,2.423,1.82l4.666-4.666c-1.041-.144-2.048-.597-2.846-1.396-1.949-1.949-1.949-5.122,0-7.071l9.899-9.9c1.949-1.949,5.122-1.949,7.071,0s1.949,5.122,0,7.071l-3.646,3.646c1.022,2.496,1.243,5.236,.656,7.829l7.232-7.232c4.289-4.289,4.289-11.267,0-15.556Z"></path>
                        <path d="M30.673,17.327c-.736-.736-1.556-1.336-2.423-1.82l-4.666,4.666c1.041,.144,2.048,.597,2.846,1.396,1.949,1.949,1.949,5.122,0,7.071l-9.899,9.899c-1.949,1.949-5.122,1.949-7.071,0-1.949-1.949-1.949-5.122,0-7.071l3.635-3.635c-1.032-2.513-1.232-5.257-.641-7.844l-7.237,7.237c-4.289,4.289-4.289,11.267,0,15.556,4.289,4.289,11.267,4.289,15.556,0l9.9-9.9c4.289-4.289,4.289-11.267,0-15.556Z"></path>
                      </svg>
                      <h2><a href=${data.html_url} target="_blank">Profile</a></h2>
                </div>
                <div class="items">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#000000;}.cls-2{fill:#000000;}</style></defs><title>b</title><rect class="cls-1" x="17.3217" y="72.78424" width="10.22311" height="10.22311"></rect><rect class="cls-1" x="35.38662" y="72.78424" width="10.22319" height="10.22311"></rect><rect class="cls-1" x="17.3217" y="91.22494" width="10.22311" height="10.22311"></rect><rect class="cls-1" x="35.38662" y="91.22494" width="10.22319" height="10.22311"></rect><rect class="cls-1" x="96.07009" y="91.22575" width="10.22311" height="10.22311"></rect><rect class="cls-1" x="96.07009" y="72.78506" width="10.22311" height="10.22311"></rect><rect class="cls-1" x="40.34807" y="36.89214" width="10.22319" height="10.22319"></rect><rect class="cls-1" x="58.41308" y="36.89214" width="10.22311" height="10.22319"></rect><path class="cls-2" d="M83.33,50.59988V43.20744h-.015V4.36587L25.57924,26.30193v24.2977L2.0199,50.59873v73.03392l123.96019.00147V50.59988ZM53.9647,116.68639l-44.998-.00057V57.54589l23.55942.001v-.00106l21.43854.0009Zm22.40352-73.479h-.17471v73.47928L58.596,116.68647v-63.771l-26.06982-.00082V31.09391l43.84206-16.6572Zm42.665,73.47986L83.33,116.6868V57.54671h35.70323Z"></path></svg>
                    <h2>@Github</h2>
                </div>
            </div>
        `
    }
}



const goBackTo = ()=>{
   window.location.reload()
}