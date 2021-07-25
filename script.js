console.log("hi")



document.getElementById("CArts").setAttribute("onclick","Darts()")
document.getElementById("CHome").setAttribute("onclick","Dhome()")
document.getElementById("CScience").setAttribute("onclick","Dscience()")
document.getElementById("CUs").setAttribute("onclick","Dus()")
document.getElementById("CWorld").setAttribute("onclick","Dworld()")



async function Darts()
{
    document.getElementById("bottomc").innerHTML=""
    try{
    var ld= await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=EhujdeHHbEUxGvO4bEfxYEIdWYH0Sjqr")
    data = await ld.json()
    data=data.results
    console.log(data)
    i=0
    data.forEach(element => {

        var div=document.createElement("div")
        div.className="row"
        div.id="rows"+i
        document.getElementById("bottomc").appendChild(div)

        var div1=document.createElement("div")
        div1.className="card mb-3"
        div1.id="maindiv"+i
        document.getElementById("rows"+i).appendChild(div1)

        var div2=document.createElement("div")
        div2.className="row"
        div2.id="divrow"+i
        document.getElementById("maindiv"+i).appendChild(div2)

        var div3=document.createElement("div")
        div3.className="col-sm-5 col-md-5 col-lg-5"
        div3.id="divleft"+i
        document.getElementById("divrow"+i).appendChild(div3)
        
        var img=document.createElement("img")
        img.src=element.multimedia[0].url
        img.className="img-fluid rounded-start"
        document.getElementById("divleft"+i).appendChild(img)

        var div4=document.createElement("div")
        div4.className="col-sm-7 col-md-7 col-lg-7"
        div4.id="maincard"+i
        document.getElementById("divrow"+i).appendChild(div4)

        var div5=document.createElement("div")
        div5.className="card-body"
        div5.id="cardbody"+i
        document.getElementById("maincard"+i).appendChild(div5)

        var titl=document.createElement("h3")
        titl.innerText=element.title
        document.getElementById("cardbody"+i).appendChild(titl)

        var tex2=document.createElement("b")
        tex2.innerText="Dated : "+element.created_date
        document.getElementById("cardbody"+i).appendChild(tex2)

        var tex3=document.createElement("p")
        tex3.innerText=element.abstract
        document.getElementById("cardbody"+i).appendChild(tex3)

        var tex1=document.createElement("p")
        tex1.innerText="-"+element.byline
        tex1.style.float="right"
        document.getElementById("cardbody"+i).appendChild(tex1)


        i=i+1
    });
    
    }
    catch(error){

        console.log(error)
    }

}




async function Dhome()
{
    document.getElementById("bottomc").innerHTML=""
    try{
    var ld= await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EhujdeHHbEUxGvO4bEfxYEIdWYH0Sjqr")
    data = await ld.json()
    data=data.results
    console.log(data)
    i=0
    data.forEach(element => {

        var div=document.createElement("div")
        div.className="row"
        div.id="rows"+i
        document.getElementById("bottomc").appendChild(div)

        var div1=document.createElement("div")
        div1.className="card mb-3"
        div1.id="maindiv"+i
        document.getElementById("rows"+i).appendChild(div1)

        var div2=document.createElement("div")
        div2.className="row"
        div2.id="divrow"+i
        document.getElementById("maindiv"+i).appendChild(div2)

        var div3=document.createElement("div")
        div3.className="col-sm-5 col-md-5 col-lg-5"
        div3.id="divleft"+i
        document.getElementById("divrow"+i).appendChild(div3)
        
        var img=document.createElement("img")
        img.src=element.multimedia[0].url
        img.className="img-fluid rounded-start"
        document.getElementById("divleft"+i).appendChild(img)

        var div4=document.createElement("div")
        div4.className="col-sm-7 col-md-7 col-lg-7"
        div4.id="maincard"+i
        document.getElementById("divrow"+i).appendChild(div4)

        var div5=document.createElement("div")
        div5.className="card-body"
        div5.id="cardbody"+i
        document.getElementById("maincard"+i).appendChild(div5)

        var titl=document.createElement("h3")
        titl.innerText=element.title
        document.getElementById("cardbody"+i).appendChild(titl)

        var tex2=document.createElement("b")
        tex2.innerText="Dated : "+element.created_date
        document.getElementById("cardbody"+i).appendChild(tex2)

        var tex3=document.createElement("p")
        tex3.innerText=element.abstract
        document.getElementById("cardbody"+i).appendChild(tex3)

        var tex1=document.createElement("p")
        tex1.innerText="-"+element.byline
        tex1.style.float="right"
        document.getElementById("cardbody"+i).appendChild(tex1)


        i=i+1
    });
    }
    catch(error){

        console.log(error)
    }

}

async function Dscience()
{
    document.getElementById("bottomc").innerHTML=""
    try{
    var ld= await fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=EhujdeHHbEUxGvO4bEfxYEIdWYH0Sjqr")
    data = await ld.json()
    data=data.results
    console.log(data)
    i=0
    data.forEach(element => {

        var div=document.createElement("div")
        div.className="row"
        div.id="rows"+i
        document.getElementById("bottomc").appendChild(div)

        var div1=document.createElement("div")
        div1.className="card mb-3"
        div1.id="maindiv"+i
        document.getElementById("rows"+i).appendChild(div1)

        var div2=document.createElement("div")
        div2.className="row"
        div2.id="divrow"+i
        document.getElementById("maindiv"+i).appendChild(div2)

        var div3=document.createElement("div")
        div3.className="col-sm-5 col-md-5 col-lg-5"
        div3.id="divleft"+i
        document.getElementById("divrow"+i).appendChild(div3)
        
        var img=document.createElement("img")
        img.src=element.multimedia[0].url
        img.className="img-fluid rounded-start"
        document.getElementById("divleft"+i).appendChild(img)

        var div4=document.createElement("div")
        div4.className="col-sm-7 col-md-7 col-lg-7"
        div4.id="maincard"+i
        document.getElementById("divrow"+i).appendChild(div4)

        var div5=document.createElement("div")
        div5.className="card-body"
        div5.id="cardbody"+i
        document.getElementById("maincard"+i).appendChild(div5)

        var titl=document.createElement("h3")
        titl.innerText=element.title
        document.getElementById("cardbody"+i).appendChild(titl)

        var tex2=document.createElement("b")
        tex2.innerText="Dated : "+element.created_date
        document.getElementById("cardbody"+i).appendChild(tex2)

        var tex3=document.createElement("p")
        tex3.innerText=element.abstract
        document.getElementById("cardbody"+i).appendChild(tex3)

        var tex1=document.createElement("p")
        tex1.innerText="-"+element.byline
        tex1.style.float="right"
        document.getElementById("cardbody"+i).appendChild(tex1)


        i=i+1
    });
    }
    catch(error){

        console.log(error)
    }

}

async function Dus()
{
    document.getElementById("bottomc").innerHTML=""
    try{
    var ld= await fetch("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=EhujdeHHbEUxGvO4bEfxYEIdWYH0Sjqr")
    data = await ld.json()
    data=data.results
    console.log(data)
    i=0
    data.forEach(element => {

        var div=document.createElement("div")
        div.className="row"
        div.id="rows"+i
        document.getElementById("bottomc").appendChild(div)

        var div1=document.createElement("div")
        div1.className="card mb-3"
        div1.id="maindiv"+i
        document.getElementById("rows"+i).appendChild(div1)

        var div2=document.createElement("div")
        div2.className="row"
        div2.id="divrow"+i
        document.getElementById("maindiv"+i).appendChild(div2)

        var div3=document.createElement("div")
        div3.className="col-sm-5 col-md-5 col-lg-5"
        div3.id="divleft"+i
        document.getElementById("divrow"+i).appendChild(div3)
        
        var img=document.createElement("img")
        img.src=element.multimedia[0].url
        img.className="img-fluid rounded-start"
        document.getElementById("divleft"+i).appendChild(img)

        var div4=document.createElement("div")
        div4.className="col-sm-7 col-md-7 col-lg-7"
        div4.id="maincard"+i
        document.getElementById("divrow"+i).appendChild(div4)

        var div5=document.createElement("div")
        div5.className="card-body"
        div5.id="cardbody"+i
        document.getElementById("maincard"+i).appendChild(div5)

        var titl=document.createElement("h3")
        titl.innerText=element.title
        document.getElementById("cardbody"+i).appendChild(titl)

        var tex2=document.createElement("b")
        tex2.innerText="Dated : "+element.created_date
        document.getElementById("cardbody"+i).appendChild(tex2)

        var tex3=document.createElement("p")
        tex3.innerText=element.abstract
        document.getElementById("cardbody"+i).appendChild(tex3)

        var tex1=document.createElement("p")
        tex1.innerText="-"+element.byline
        tex1.style.float="right"
        document.getElementById("cardbody"+i).appendChild(tex1)


        i=i+1
    });
    }
    catch(error){

        console.log(error)
    }

}

async function Dworld()
{
    document.getElementById("bottomc").innerHTML=""
    try{
    var ld= await fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=EhujdeHHbEUxGvO4bEfxYEIdWYH0Sjqr")
    data = await ld.json()
    data=data.results
    console.log(data)
    i=0
    data.forEach(element => {

        var div=document.createElement("div")
        div.className="row"
        div.id="rows"+i
        document.getElementById("bottomc").appendChild(div)

        var div1=document.createElement("div")
        div1.className="card mb-3"
        div1.id="maindiv"+i
        document.getElementById("rows"+i).appendChild(div1)

        var div2=document.createElement("div")
        div2.className="row"
        div2.id="divrow"+i
        document.getElementById("maindiv"+i).appendChild(div2)

        var div3=document.createElement("div")
        div3.className="col-sm-5 col-md-5 col-lg-5"
        div3.id="divleft"+i
        document.getElementById("divrow"+i).appendChild(div3)
        
        var img=document.createElement("img")
        img.src=element.multimedia[0].url
        img.className="img-fluid rounded-start"
        document.getElementById("divleft"+i).appendChild(img)

        var div4=document.createElement("div")
        div4.className="col-sm-7 col-md-7 col-lg-7"
        div4.id="maincard"+i
        document.getElementById("divrow"+i).appendChild(div4)

        var div5=document.createElement("div")
        div5.className="card-body"
        div5.id="cardbody"+i
        document.getElementById("maincard"+i).appendChild(div5)

        var titl=document.createElement("h3")
        titl.innerText=element.title
        document.getElementById("cardbody"+i).appendChild(titl)

        var tex2=document.createElement("b")
        tex2.innerText="Dated : "+element.created_date
        document.getElementById("cardbody"+i).appendChild(tex2)

        var tex3=document.createElement("p")
        tex3.innerText=element.abstract
        document.getElementById("cardbody"+i).appendChild(tex3)

        var tex1=document.createElement("p")
        tex1.innerText="-"+element.byline
        tex1.style.float="right"
        document.getElementById("cardbody"+i).appendChild(tex1)


        i=i+1
    });
    }
    catch(error){

        console.log(error)
    }

}


