const SearchBox = (props)=>{
    return(
        <div className="searchbox">
            <input type="search" placeholder={props.placeHolder}
       value={props.text}
       onChange={props.changeText} />
        </div>
    )
}
export default SearchBox