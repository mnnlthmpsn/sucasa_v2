import { useEffect, useState } from 'react'
import { blogTitles } from '../data/blogPosts'

const BlogCarousel = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            current >= 0 && current < (blogTitles.length - 1) ? setCurrent(current + 1) : setCurrent(0)
        }, 7000);

        return () => clearInterval(interval);
    }, [current])

    return (
        <div className="h-full items-center text-gray-500 text-xs font-gothamLight flex">
            {
                blogTitles.map((blogPost, index) => (
                    <div key={index} className={`absolute ease-in-out transition-all duration-700 ${current === index ? 'block opacity-100' : 'hidden opacity-0'}`}>
                        <p className='hover:text-blue-500 hover:underline underline-offset-4 cursor-pointer'>{blogPost.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogCarousel