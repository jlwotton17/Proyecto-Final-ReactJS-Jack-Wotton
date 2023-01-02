import React, {useState, useEffect} from "react";
import Title from '../Title';
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const products = [
    { id:1, price: 50, image: "https://cdn.sanity.io/images/jsdrzfkj/production-esmx/5e2316cc629ede9cd6646163efeafc5486161751-6240x4160.jpg?w=800&h=533&fit=crop", category: 'hamburguesas', title:"Hamburguesa SF"},
    { id:2, price: 60, image: "https://thumbs.dreamstime.com/b/hamburguesa-del-tocino-44262462.jpg", category: 'hamburguesas', title: "Hamgurguesa con tocino"},
    { id:3, price: 70, image: "https://revistacitylife.com/wp-content/uploads/2018/03/hamburguesa-doble.jpg", category: 'hamburguesas', title:"Hamburguesa doble"},
    { id:4, price: 25, image: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/09/papasfritasconpocoaceite.jpg", category: 'complementos', title:"Papas a la francesa"},
    { id:5, price: 35, image: "https://dam.cocinafacil.com.mx/wp-content/uploads/2014/09/deditos-de-queso.jpg", category: 'complementos', title:"Dedos de Queso"},
    { id:6, price: 20, image: "https://img.gruporeforma.com/imagenes/960x640/5/971/4970529.jpg", category: 'complementos', title:"Refresco"},
    { id:7, price: 30, image: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/09/malteadadechocolatecremacacahuate_0.jpg", category: 'complementos', title:"Malteadas"},
];


export const ItemListContainer =({texto})=>{
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(()=> {
        const getData = new Promise(resolve => {
            setTimeout (() => {
                resolve(products);
            },2000);
        });
        if(categoriaId){
            getData.then(res => setData(res.filter(hamburguesas => hamburguesas.category === categoriaId)))
        }else{
            getData.then(res => setData(res))
        }
        
    }, [categoriaId])


    return (
        <>
            <Title greeting={texto}/>
            <ItemList data={data}/>
        </>
    )
}

export default ItemListContainer;