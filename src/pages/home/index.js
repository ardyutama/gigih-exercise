import axios from "axios";
import { useState } from "react"
import Searchbar from "../../component/SearchBar"
import ShowGif from "../../component/ShowGif"
export default function Home(params) {
    const [search,setSearch] = useState("");
    const [data,setData] = useState([]);
    // const [selectedFile,setSelectedFile] = useState(null);
    const onChange = (e) => {
        setSearch(e.target.value);
    }
    var url = "http://api.giphy.com/v1/gifs/search"
    var API = "sEUaNvlVBzeW73JPtzeB1eep04vODDIl"

    const fetchGIF = () => {
        console.log('click')
        axios.get(url, {
            params : {
               api_key : API,
               q: search,
               limit: 12
            }})
            .then((res)=> {
                console.log(res.data.data);
                setData(res.data.data)
            })
    }

    return (
        <div>
            <Searchbar onChange={onChange} onClick={fetchGIF}/>
            <div>
                {data.map((value,key)=> {
                    return (
                        <ShowGif src={value.images.fixed_width.url} title={value.title} key={key}/>
                    );
                })}
            </div>
        </div>
    )
};
