import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";


const products = [
    { id:1, image: "https://cdn.sanity.io/images/jsdrzfkj/production-esmx/5e2316cc629ede9cd6646163efeafc5486161751-6240x4160.jpg?w=800&h=533&fit=crop", category: 'hamburguesas', title:"Hamburguesa SF"},
    { id:2, image: "https://thumbs.dreamstime.com/b/hamburguesa-del-tocino-44262462.jpg", category: 'hamburguesas', title: "Hamgurguesa con tocino"},
    { id:3, image: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/09/papasfritasconpocoaceite.jpg", category: 'complementos', title:"Papas a la francesa"},
    { id:4, image: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/09/malteadadechocolatecremacacahuate_0.jpg", category: 'complementos', title:"Malteadas"},
];

export const ItemDetailContainer =()=> {

    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout (() => {
                resolve(products);
            }, 1000)
        })

        getData.then(res =>setData(res.find(product=>product.id === parseInt(detalleId))))
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;