let root = document.getElementById("root")

const app =
<div> 


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">API5</a>
        <div className="px-1">
            <a className="mx-3" href="#"><button className="btn btn-outline-light active">Welcome</button></a>
        </div>
      </div>
    </nav>


    <div className="container p-3">
        <h1>Abdulrhman Alnafisi</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam voluptatibus consequatur repudiandae facere numquam ipsam qui eum cum. Libero commodi totam inventore voluptatibus adipisci doloremque iure.</p>

        <div>
            <h3 className="red">Work Experience</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam voluptatibus consequatur repudiandae facere numquam ipsam qui eum cum. Libero commodi totam inventore voluptatibus adipisci doloremque iure.</p>
            <ul>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
            </ul>   
        </div>

        <div>
            <h3 className="red">Projects</h3>
            <div>
                <h3><b>Full-Stack App with Authentication</b></h3>
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
                </ul> 
            </div>
            <div>
                <h3><b>Designed a website using Boostrap</b></h3>
                <ul>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, officiis perspiciatis dignissimos nam</li>
                </ul> 
            </div>    
        </div>

        <div>
            <h3 className="red" >Education</h3>
            <h3>Qassim University - B.S., Computer Science</h3>
            <p>2018 - 2024</p>
        </div>


    </div>


</div>


ReactDOM.render(app, root)