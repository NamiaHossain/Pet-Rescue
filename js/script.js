const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
const createPet=function(name,species){
    const pet={
        name:name,
        species:species,
        isTired:5,
        sleep:function(){
            console.log(`${this.name} needs a nap now...zzz!`);
            this.isTired=1;

        },
        play:function(){
            if (this.isTired===10){
                console.log("Too tired to play.");
                this.sleep();
            }else {
                console.log(`Yay ${this.name} would love to play!`);
                this.isTired+=1;
            }
            
            

        }
    };
    return pet;
};

const sora=createPet("Sora","ferret");
const clover=createPet("Clover","rabbit");
const baxter=createPet("Baxter","hamster");
const cleo=createPet("Cleo","Cat");
const francine=createPet("francine","turtle");
// console.log(sora, clover, baxter, cleo, francine);
// clover.sleep();
// baxter.play();
// baxter.play();
// baxter.play();
// baxter.play();
// baxter.play();

// console.log(sora, clover, baxter, cleo, francine);
// baxter.play();
// baxter.play();