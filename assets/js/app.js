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
})

addbtn.addEventListener("click",onMovieAdd);

movieFrom.addEventListener("submit",onMoviesubmit);