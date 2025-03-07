import mockData from "../data.js"

function HomePage() {
    let [data, setData] = useState(mockData)

    return <div>
        {data.map((post)=> {
            return <div>
                {post.body}
            </div>
        })}
    </div>
}

export default HomePage


