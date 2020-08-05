const result1 = fetch('https://api.github.com/users/ISTC-accelerator-5-2');
result1.then(fresult1=>{
            const body1 = fresult1.json();
const result2 = fetch('https://api.github.com/users/ISTC-accelerator-5-2/repos');
result2.then(fresult2=>{
            const body2 = fresult2.json();
            body2.then(result2=>{
                result2.sort(( a, b ) => a.id - b.id)
            let i;
              console.log(result2.length+" Repositoies");
                for(let i=0;i<result2.length; ++i){
                    console.log(i+1+". "+result2[i].name);
                    }
                    })
            })
        })

        