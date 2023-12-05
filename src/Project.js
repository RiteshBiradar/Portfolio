import todo from './images/todo.jpeg';
const Project = () => {
    const ToDo = "https://riteshbiradar.github.io/To-Do-List/";
    return ( 
        <div className="boxes">
            <div className="projects">
            <a href= {ToDo}><img src={todo} alt="todo"></img></a>
            <a href= {ToDo}>ToDo</a> 
                <p>Welcome to My To-Do List App, your ultimate companion for staying organized and boosting productivity. Designed with simplicity and efficiency in mind, this web application is your go-to solution for managing tasks seamlessly.</p>
            </div>
        </div>
     );
}
 
export default Project;