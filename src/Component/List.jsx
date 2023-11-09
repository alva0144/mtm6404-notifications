function List ({data, remove}){
    console.log(data)
    return (<li>
        <h2>{data.id}</h2>
       <h2>{data.name}</h2>
       
       <p>{data.message}</p>
       <button onClick={()=>remove(data.id)} type="button">delete</button>
        </li>)
}

export default List