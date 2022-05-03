import { useState, useEffect } from "react";
import Carousel from "./Carousel";



export default function Products() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const getData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');

            setData(await res.json())

            setLoading(false)
        }

        getData();


    }, [])
    console.log(data)
    console.log(loading)


    return (
        <section>
            {loading && "Loading..."}
            <div className="trending">
                <Carousel />
            </div>
            <div className="filter">

            </div>
            <div className="products"></div>
        </section>

    )
}