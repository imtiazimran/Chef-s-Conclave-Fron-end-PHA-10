import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import useTitle from '../CustomHooks/useTitle';

const ref = React.createRef();

const Blog = () => {
    const blogs = useLoaderData()

    useTitle('Blog')
    return (
        <div className='position-relative mb-5'>
            <Pdf targetRef={ref} filename="QnA.pdf">
                {({ toPdf }) => <button className="rounded pdf" onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div className='container row justify-content-center mx-auto mt-5'>
                <h2 className='text-center p-3 rounded shadow'>QnA</h2>
                <div ref={ref} className='col-md-6'>
                    {blogs.map((blog) => (
                        <div className='shadow rounded mt-5 p-5' key={blog.id}>
                            <h2>{blog.question}</h2>
                            <p>{blog.ans}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;