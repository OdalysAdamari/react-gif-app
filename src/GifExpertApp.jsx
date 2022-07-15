import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories  ] = useState(['Twice dahyun']);

  const onAddCategory = (newCategory) =>{

    if ( categories.includes(newCategory) ) return;

    setCategories([newCategory, ...categories]);
    //setCategories(categories =>[ newObj, ...categories ]);
  }

  return (


    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory 
        //setCategories={ setCategories }
          onNewCategory = {value => onAddCategory(value)}
        />

       
          { categories.map( category => {
              return (
                <GifGrid key={category} category={category}/>
              )
            })
          }
        
    </>
    
  )
}
