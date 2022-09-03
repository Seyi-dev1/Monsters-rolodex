import Card from "./Card"

const CardList = (props)=>{
    return(
        <div className="card-list">
       { props.monsters.map((monster)=>{
            return(
                <Card
                    key={monster.id}
                    monster={monster}
                />
            )
        })}
        </div>
    )
}
export default CardList