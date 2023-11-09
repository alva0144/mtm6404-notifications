import List from "./List"

function NotificationContainer ({prop,remove}){
    console.log(prop)
    return (<ul>
        { prop.map((el, i)=> <List data={el} key={i} remove={remove}/>)}
        </ul>)
}

export default NotificationContainer