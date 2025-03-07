
import mockData from "../data.js"

import { useState } from "react"

function HomePage() {
    let [data, setData] = useState(mockData)

    return <div>
        {data.map((post, index)=> {
            //use id when availanle
            return <div>
                {post.body}
            </div>
        })}
    </div>
}

export default HomePage


