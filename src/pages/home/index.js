import axios from "axios";
import { useState } from "react"
import Searchbar from "../../component/SearchBar"
import ShowGif from "../../component/ShowGif"
import { useSelector, useDispatch } from "react-redux";
import {search} from "../../store/search-actions"
export default function Home(params) {
    // const [search,setSearch] = useState("");
    const currentSearch = useSelector((state) => state.search.value);
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    const onChange = (e) => {
        const {name,value} = e.target;
        dispatch(search({...search, [name]: value}));
    }
    // console.log(currentSearch.input);
    var url = "http://api.giphy.com/v1/gifs/search"
    var API = process.env.REACT_APP_GIPHY_KEY;

    const fetchGIF = () => {
        console.log('click')
        axios.get(url, {
            params : {
               api_key : API,
               q: currentSearch.input,
               limit: 12
            }})
            .then((res)=> {
                console.log(res.data.data);
                setData(res.data.data)
            })
    }
    const onSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <Searchbar onChange={onChange} onClick={fetchGIF} onSubmit={onSubmit}/>
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
