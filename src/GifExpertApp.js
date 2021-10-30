import React, { useState, } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Guts'])

    // const handleAdd = () =>{
    //     // setcategories( [...categories, 'Naruto'] );
    //     // setcategories( cat => [...cat, 'Naruto'] );
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {
                    categories.map((category, i) => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

