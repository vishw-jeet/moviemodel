const cl=console.log;

const backdrop=document.getElementById("backdrop");
const ourmodel=document.getElementById("ourmodel");
const addbtn=document.getElementById("addbtn");
const closeBackDrop=[...document.querySelectorAll(".closeBackDrop")];
const addMovie=document.getElementById("addMovie");
const movieFrom=document.getElementById("movieFrom");
const movieTitleControl=document.getElementById("movieTitle");
const imgurlControl=document.getElementById("imgurl");
const movieratingControl=document.getElementById("movierating");
const imgCardcontrol=document.getElementById("imgCard");
const submitBtn=document.getElementById("submitBtn");

const deletebtn=document.getElementById("deletebtn")


const onMovieAdd=()=>{
    ourmodel.classList.toggle("active");
    backdrop.classList.toggle("active");

    closeBackDrop.forEach((ele)=>{
        ele.addEventListener("click",onMovieAdd)
    });
};

let movieArrey=[];

const onMoviesubmit=((eve)=>{
     eve.preventDefault()
    let newObj={
        titale: movieTitleControl.value,
        imgUrl: imgurlControl.value,
        rating: movieratingControl.value
    }
    movieArrey.push(newObj);
    cl( movieArrey)
    movieFrom.reset()
    let result="";
movieArrey.forEach((ele)=>{
    result+=`  <div class="col-md-4">
                <div class="img-card">
    <figure class="m-0 figure">
      <img src="${ele.imgUrl}" alt="movieImg" class="img">
      <figcaption class="figcaption">
        <div class="card-body p-0 bg-info">
         <div class="row">
          <div class="col-3">
            <h2 class-="m-0">${ele.titale} </h2>
          </div>
          <div class="col-9 text-right">
            <em class="p-4">${ele.rating}</em>
          </div>
         </div>
      </figcaption>
    </figure>  
   </div>
   <div class="card-footer">
        <button type="button" class="btn btn-danger float-right"id="deletebtn">Delete</button>
      </div>
                </div>`
});
cl(result)
imgCardcontrol.innerHTML=result;
    onMovieAdd()

})
// function onDeletebtn(eve){
//     cl(eve)
//     eve.classList.add("d-none");
// } 
// const onDelete=(eve)=>{
//     cl(eve)
//     eve.classList.add("d-none");
// };


addbtn.addEventListener("click",onMovieAdd);

movieFrom.addEventListener("submit",onMoviesubmit);

// deletebtn.addEventListener("click",onDelete)


const elementCreat=document.createElement("button")
cl(elementCreat)