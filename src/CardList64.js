import React from 'react'
import Card from './Card64'

const CardList = ({ pt }) => {
    return (
        <div>
            {pt.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={user.id}
                        name={user.name}
                        img={user.img}
                    />
                )
            })

            }
        </div>
    )
}

export default CardList

