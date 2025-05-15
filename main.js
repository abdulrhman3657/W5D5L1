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
        <p>Full stack developer. Passionate about learning and building reliable web applications, with a strong understanding of JavaScript, HTML and CSS</p>

        <div>
            <h3 className="red">Work Experience</h3>
            <h3>Javascript bootcamp</h3>
            <ul>
                <li>Actively learning HTML, CSS, JavaScript, and Git/GitHub fundamentals</li>
                <li>Collaborated with a team to develop user-friendly websites</li>
            </ul>   
        </div>

        <div>
            <h3 className="red">Projects</h3>
            <div>
                <h3><b>Full-Stack App with Authentication</b></h3>
                <ul>
                    <li>Developed a full-stack web app using Node.js, Express, and MongoDB for the backend and React, Redux for the frontend.</li>
                    <li>Implemented JWT authentication for secure user login, signup, and token-based authentication.</li>
                    <li>Enabled users to add and delete goals with real-time state management using Redux.</li>
                </ul> 
            </div>
            <div>
                <h3><b>YouTube Video Data Extractor App</b></h3>
                <ul>
                    <li>Built a website using Node.js, Express for the backend and ejs and Bootstrap for the front end.</li>
                    <li>The user provides a YouTube video link, and the website returns the video data including title, view count, likes, description and thumbnail</li>
                    <li>Deployed the application using render and managed the app using GitHub.</li>
                </ul> 
            </div>
                        <div>
                <h3><b>EduBot: University Policy Chatbot Assistant</b></h3>
                <ul>
                    <li>Developed an AI chatbot LLM with RAG to help students in navigating Qassim University policies in Arabic.</li>
                    <li>Integrated an embedding database for semantic search, enhancing response and relevance.</li>
                    <li>Collected and processed with a team a dataset from Saudi universities' rules and regulations.</li>
                </ul> 
            </div>   
        </div>

        <div>
            <h3 className="red" >Education</h3>
            <h3>Qassim University - B.S., Computer Science</h3>
            <p>2018 - 2024</p>
        </div>

        <div>
            <h3 className="red">Skills</h3>
                <ul>
                    <li>Python, JavaScript, HTML, CSS</li>
                    <li>git/github</li>
                    <li>REST APIs</li>
                </ul>
        </div>  


    </div>


</div>


ReactDOM.render(app, root)