import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, SetReview] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => SetReview(data))


    }, [])

    return [reviews, SetReview];


}
export default useReview